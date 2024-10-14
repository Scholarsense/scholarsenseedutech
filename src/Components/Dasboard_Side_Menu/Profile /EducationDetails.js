import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CountrySelect from '../../CountrySelect';
import Select from 'react-select';
import OtherDetailsModal from './OtherDetailsModal'; // Import the OtherDetailsModal

const options = [
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
];

const EducationDetails = ({ onSave }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const [collegeName, setCollegeName] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOtherDetailsModalVisible, setIsOtherDetailsModalVisible] = useState(false); // State for OtherDetailsModal visibility
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const handleCollegeNameChange = (event) => {
    setCollegeName(event.target.value);
  };

  const handleChange = (option) => {
    setSelectedOption(option);
  };

  const handleSave = () => {
    console.log('Saved data:', { collegeName, selectedOption });
    
    // Show the OtherDetailsModal when saving
    setIsOtherDetailsModalVisible(true);
  };

  const handleCloseOtherDetailsModal = () => {
    setIsOtherDetailsModalVisible(false);
  };

  return (
    <div className={`login_logins_modal__XJidY drawer-container ${isDrawerVisible ? 'visible' : 'hidden'}`}>
      <div className="login_logins_modal-inner__cn_vk overflow-auto">
        <div className="drawer-content">
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
          <h1 className="mb20">Education details</h1>
          <div className="login-heights radioBtnGroup">
            <form className="formNew">
              <div className="rightDrawer_rightDrawer_inputs___WBYM removeArrow rightDrawer_inputs-active mb24">
                <label className="flex">Country</label>
                <CountrySelect />
              </div>
              <div className="rightDrawer_rightDrawer_inputs___WBYM formDropDown mb24">
                <label className="flex">Your college name</label>
                <input
                  type="text"
                  name="graduationCollege"
                  placeholder="Type 3 characters to search"
                  className="custom-select dash-profile-select mt1"
                  autoComplete="off"
                  value={collegeName}
                  onChange={handleCollegeNameChange}
                />
              </div>
              <div className="rightDrawer_rightDrawer_inputs___WBYM removeArrow rightDrawer_inputs-active mb24">
                <label className="flex">Your MBBS admission year</label>
                <Select
                  value={selectedOption}
                  className="custom-select-changes__input"
                  styles={customStyles}
                  onChange={handleChange}
                  options={options}
                  placeholder="Select Year"
                  isSearchable={false}
                />
              </div>
              <div className="mt3 flex justify-between items-center">
                <button type="button" className="btn btn-custom" onClick={handleSave}>
                  Save & Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Render OtherDetailsModal conditionally */}
      {isOtherDetailsModalVisible && (
        <OtherDetailsModal onClose={handleCloseOtherDetailsModal} />
      )}
    </div>
  );
};

export default EducationDetails;

const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'var(--dash-white)',
    borderColor: 'var(--dash-bg-color1)',
    borderRadius: '0.8rem',
    fontWeight: 600,
    fontSize: '1.4rem',
    color: '#7a8a93',
    minHeight: '4rem',
    padding: '0.8rem 0.8rem',
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#7a8a93',
  }),
  input: (provided) => ({
    ...provided,
    fontWeight: 600,
    fontSize: '1.4rem',
    color: '1px solid #7a8a93',
  }),
  singleValue: (provided) => ({
    ...provided,
    fontWeight: 600,
    fontSize: '1.4rem',
    color: '1px solid #7a8a93'
  }),
  menu: (provided) => ({
    ...provided,
    fontWeight: 600,
    fontSize: '1.4rem',
    color: '1px solid #7a8a93',
  }),
};