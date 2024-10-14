import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase';
import { useNavigate } from 'react-router-dom';
import EducationDetails from './EducationDetails';
import HeaderAfterLogin from '../../HeaderAfterLogin';
import SideBar from '../../SideBar';
import EditPersonalDetails from './Edit_Pdetails';
import OtherDetailsModal from '.././Profile /OtherDetailsModal'; 
import API_BASE_URL from '../../../config/apiConfig';

export default function Profile() {
  const [isOtherDetailsModalOpen, setIsOtherDetailsModalOpen] = useState(false); 
  const [isEducationDetailsOpen, setIsEducationDetailsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null); // New state for storing user details
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase authentication logic
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        navigate('/signup');  // Redirect to signup page if not authenticated
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  // Fetch user details from API
  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Cookie", "frontend_lang=en_GB; session_id=bc2f7084c484a79bcea16a018cfb9a20d0107faf");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${API_BASE_URL}/get_user?user_id=46`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "success") {
          setUserDetails(result.user_details); // Store the fetched user details
        } else {
          console.error("Failed to fetch user details");
        }
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, []);

  const handleOpenModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleToggleEducationDetails = () => {
    setIsEducationDetailsOpen(!isEducationDetailsOpen);
  };

  const handleOpenOtherDetailsModal = () => {
    setIsOtherDetailsModalOpen(true);  // Open "Other details" modal
  };

  const handleCloseOtherDetailsModal = () => {
    setIsOtherDetailsModalOpen(false);  // Close "Other details" modal
  };

  if (!user || !userDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <HeaderAfterLogin />
      <div className="dash-container flex dash-main-layout video-dash-container">
        <div className="applayout_section__left__dV2_V">
          <SideBar />
        </div>
        <div id="right_section" className="applayout_section__right__5EPWR video-section false">
          <div className="ExperienceSticky items-center justify-between">
            <h4>For better experience switch to the app.</h4>
            <div className="flex items-center flex-none">
              <button className="btn-custom flex-none" style={{ padding: '8px 16px' }}>Download</button>
              <div className="ExperienceSticky-cross">
                <img src="https://image.prepladder.com/content/wd5SX8TSh6x03lCU5FQW1683285998.png" alt="Close" />
              </div>
            </div>
          </div>

          <section className="profile_profile__g_N4X">
            <div className="profile_userDetail__FMRWh dash-white-box p-20 flex items-center">
              <div className="profile_userDetail-img__cSUjk">
                <img src="https://image.prepladder.com/content/orlrjqwD41EK7qwA01R21604491348.jpg" alt="User" />
              </div>
              <div className="ml2 mr2">
                <div className="profile_userDetail-name__ql7XY">{userDetails.display_name || 'User'}</div>
                <div className="profile_userDetail-phone__f8KJT">{userDetails.mobile_number || 'N/A'}</div>
              </div>
              <div className="profile_edit-img____HNg ml-auto">
                <input id="profilechoose" type="file" accept="image/*" className="display-none" />
                <label htmlFor="profilechoose" className="btn btn-border">Edit profile picture</label>
              </div>
            </div>

            <div className="dash-white-box p-20 mt3">
              <div className="profile_profile-card-head__K7GQm flex1 flex items-center">
                <h3>Personal details</h3>
                <div className="profile_profile-card-edit__LsEX5 ml-auto">
                  <a className="flex items-center" href="#" onClick={handleOpenModal}>
                    <img
                      src="https://image.prepladder.com/content/StEaAfQWA0srBV0bYjpq1686720335.png"
                      className="width-16 darkIcon"
                      alt="Edit"
                    />
                    Edit
                  </a>
                </div>
              </div>
              <div className="profile_profile-card-content__xzCew">
                <form className="form formNew formNewRow flex flex-wrap">
                  <div className="form-group">
                    <label>Name</label>
                    <div className="form-value">{userDetails.display_name || 'N/A'}</div>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <div className="form-value">{userDetails.email || 'N/A'}</div>
                  </div>
                  <div className="form-group">
                    <label>Mobile number</label>
                    <div className="form-value">{userDetails.mobile_number || 'N/A'}</div>
                  </div>
                  <div className="form-group">
                    <label>WhatsApp number</label>
                    <div className="form-value">{userDetails.whatsapp_number || 'N/A'}</div>
                  </div>
                  <div className="grayField form-group">
                    <label>School/College</label>
                    <div className="grayField-box form-control">
                      <span>{userDetails.school_collage_name || 'N/A'}</span>
                    </div>
                  </div>
                </form>
              </div>

              {isModalOpen && <EditPersonalDetails onClose={handleCloseModal} />}
            </div>

            {/* Additional sections for Education, Enrolment, and Other details */}
            <div className="dash-white-box p-20 mt3">
              <div className="profile_profile-card-head__K7GQm flex1 flex items-center">
                <h3>Education details</h3>
                <div className="profile_profile-card-toggle__xKbVV ml-auto">
                  <button className="btn btn-border flex items-center" onClick={handleToggleEducationDetails}>
                    <img
                      src="https://image.prepladder.com/content/AuPpkaK8bWZugLSG8ImF1686660174.png"
                      className="width-24 mr1 darkIcon"
                      alt="Add Education details"
                    />
                    Add Education details
                  </button>
                </div>
              </div>
              {isEducationDetailsOpen && (
                <div className="profile_profile-card-content__xzCew" style={{ border: 'none', margin: '0px' }}>
                  <EducationDetails onSave={handleOpenOtherDetailsModal} />
                </div>
              )}
            </div>

            <div className="dash-white-box p-20 mt3">
              <div className="profile_profile-card-head__K7GQm flex1 flex items-center">
                <h3>Other details</h3>
                <div className="profile_profile-card-toggle__xKbVV ml-auto">
                  <button className="btn btn-border flex items-center" onClick={handleOpenOtherDetailsModal}>
                    <img
                      src="https://image.prepladder.com/content/AuPpkaK8bWZugLSG8ImF1686660174.png"
                      className="width-24 mr1 darkIcon"
                      alt="Add Other details"
                    />
                    Add Other details
                  </button>
                </div>
              </div>
              <div className="profile_profile-card-content__xzCew" style={{ border: 'none', margin: '0px' }}>
                <form className="form formNew formNewRow flex flex-wrap"></form>
              </div>
            </div>

            {/* Show OtherDetailsModal if open */}
            {isOtherDetailsModalOpen && <OtherDetailsModal onClose={handleCloseOtherDetailsModal} />}
          </section>
        </div>
      </div>
    </div>
  );
}
