import React, { useState, useEffect } from 'react';
import CountryCodeDropdown from '../../CountryCodeDropdown';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import EducationDetails from './EducationDetails';
import API_BASE_URL from '../../../config/apiConfig';

export default function Edit_Pdetails({ name, email, phoneNumber, onClose }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    whatsappNumber: '',
    useSameForWhatsapp: false,
  });
  const [showEditDetailsModal, setShowEditDetailsModal] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        // Initialize formData with user details
        setFormData({
          name: name || user.displayName || '',
          email: email || user.email || '',
          phone: phoneNumber || user.phoneNumber || '',
          whatsappNumber: '',
          useSameForWhatsapp: false,
        });
      }
    });

    return () => unsubscribe();
  }, [name, email, phoneNumber]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSave = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "frontend_lang=en_GB; session_id=b45dfa0fee599018badb0fe93b2865a08cb6c8d7");

    const raw = JSON.stringify({
      user_id: 46, // If you have the user's ID, pass it here
      display_name: formData.name,
      email: formData.email,
      mobile_number: formData.phone,
      gender: "male", // Update if you're capturing this value
      birthday: "1990-05-15", // Update as per user data
      country: 21, // Provide dynamic values if necessary
      state: 5,
      whatsapp_number: formData.whatsappNumber,
      school_collage_name: "Oxford University", // Update as necessary
      student_class: "12", // Update as necessary
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // Send the API request
    fetch(`${API_BASE_URL}/update_user`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        console.log('API response:', result);
        setShowEditDetailsModal(true); // Show the EducationDetails modal if successful
      })
      .catch((error) => console.error('API error:', error));
  };

  const handleCloseClick = () => {
    if (onClose) {
      onClose(); // Call the onClose prop function to close the modal
    }
    setTimeout(() => navigate('/signup'), 300); // Navigate to signup page after closing the modal
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  if (showEditDetailsModal) {
    return <EducationDetails onClose={() => setShowEditDetailsModal(false)} />;
  }

  return (
    <div className="login_logins_modal__XJidY post-decription-index">
      <div className="login_logins_modal-inner__cn_vk overflow-auto" style={{ transition: 'right 700ms ease 0s', right: '0%', position: 'relative' }}>
        <div className="rightDrawer_rightDrawer-close__0zY9D">
          <div className="flex justify-between">
            <div className="flex items-center w-100">
              <button className="darkIcon">
                <img
                  onClick={toggleDrawer}
                  className="darkIcon"
                  src="https://image.prepladder.com/content/Z1TxFCMcxQg8qis2CO4p1688641226.svg"
                  alt="Close"
                />
              </button>
            </div>
          </div>
        </div>
        <h1 className="mb0">Complete Profile details</h1>
        <h4 className="rightDrawer_rating_subhed__LR4Ow mt1 mb3"></h4>
        <div className="login-heights radioBtnGroup">
          <div>
            <form className="form formNew" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
              <div className="form-group">
                <label>Name</label>
                <input
                  className="form-control"
                  placeholder="Please enter name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="profile_PD-email__BVphk form-group">
                <label>Email address</label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    className="form-control flex1 border-none PersonalEmail"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="errMsg"></div>
              </div>
              <div className="form-group">
                <label>Mobile number<span></span></label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <div className="dash-label mb3">
                  <label className="dash-label-wrapper">
                    <input
                      type="checkbox"
                      name="useSameForWhatsapp"
                      checked={formData.useSameForWhatsapp}
                      onChange={handleInputChange}
                    />
                    <span className="dash-label-check"></span>
                    <span className="dash-label-title">Use same mobile number for WhatsApp</span>
                  </label>
                </div>
              </div>
              {!formData.useSameForWhatsapp && (
                <div className="form-group">
                  <label>WhatsApp number</label>
                  <div className="countryCode_CountryCode01__poc7N">
                    <div className="countryCode_CountryCode01_inner__Tmkwa countryCode_CountryCode01New__vCLwh m0">
                      <div className="countryCode_CountryCode01_form__vOC5g" method="post">
                        <div className="countryCode_codeLabel__d1w4a flex items-center">
                          <div className="countryCode_countryFlags__StAQb">
                            <img src="https://image.prepladder.com/content/Pkkswnm7xW5auWwyhDIX1617863781.png" alt="" />
                          </div>
                          <span>+91</span>
                          <img
                            className="footernew_codeLabel_img__PQ1xX darkIcon"
                            src="https://image.prepladder.com/content/iIIogvP6IqhIeimkMrzK1655805750.svg"
                            alt="icon"
                            style={{ maxWidth: '1.7rem', marginLeft: '0.6rem', cursor: 'pointer' }}
                            onClick={toggleDropdown}
                          />
                        </div>
                        <div className="countryCode_codeInput__p44pH">
                          <input
                            maxLength="10"
                            type="text"
                            name="whatsappNumber"
                            placeholder="WhatsApp number"
                            autoComplete="off"
                            value={formData.whatsappNumber}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {dropdownOpen && <CountryCodeDropdown />}
                </div>
              )}
              <div className="mt3 flex justify-between items-center">
                <div>
                  <button type="submit" className="btn btn-custom">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="login_logins-bg__k5jEO"></div>
    </div>
  );
}
