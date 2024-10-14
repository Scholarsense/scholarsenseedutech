import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StateDropdown from '../../StateDropdown';

export default function OtherDetailsModal({ onClose }) {
  const navigate = useNavigate(); // Initialize the navigate function
  const [gender, setGender] = useState(''); // Default gender selection
  const [state, setState] = useState('');
  const [dob, setDob] = useState('');
  const [isDrawerVisible, setIsDrawerVisible] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerVisible(!isDrawerVisible);
  };

  const handleSave = () => {
    // Save logic can go here
    console.log('Saving other details:', { gender, state, dob });

    // Navigate to the Profile page after saving
    navigate('/profile');
  };

  return (
    <div className={`login_logins_modal__XJidY drawer-container ${isDrawerVisible ? 'visible' : 'hidden'}`}>
      <div className="login_logins_modal-inner__cn_vk overflow-auto">
        <div className="rightDrawer_rightDrawer-close__0zY9D">
          <div className="flex justify-between">
            <div className="flex items-center w-100">
              <button className="darkIcon" onClick={onClose}>
                <img className="darkIcon" src="https://image.prepladder.com/content/Z1TxFCMcxQg8qis2CO4p1688641226.svg" alt="Close" />
              </button>
            </div>
          </div>
        </div>
        <h1 className="mb0">Other details</h1>
        <div className="login-heights radioBtnGroup">
          <form className="formNew">
          <StateDropdown selectedState={state} onStateChange={setState} />

            <div className="form_group">
              <div className="form-group">
                <label className="flex mb1">Date of birth</label>
                <input
                  className="form-control"
                  type="date"
                  placeholder="DD/MM/YYYY"
                  min="1970-01-01"
                  max="2020-01-01"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  style={{color: dob ? 'black' : '#7a8992'}}
                />
              </div>
            </div>

            <div className="form-group">
    <label className="flex mb1">Gender</label>
    <div className="dash-label flex items-center mb3 flex-wrap">
       
        <label >
        <input type="radio" id="gender-female" name="gender" value="female" />
            <span className="dash-label-radio"></span>
            <span className="dash-label-title">
              <div className="dash-label_head">Female</div></span></label>
       
        <label >
            <input type="radio" id="gender-male" name="gender" value="male" />
            <span className="dash-label-radio"></span>
            <span className="dash-label-title">
              <div className="dash-label_head">Male</div></span>
        </label>
        <label >
            <input type="radio" id="gender-non-binary" name="gender" value="non-binary" />
            <span className="dash-label-radio"></span>
            <span className="dash-label-title">
              <div className="dash-label_head">Non-Binary</div></span>
        
        </label>
        <label >
            <input type="radio" id="gender-prefer-not" name="gender" value="prefer-not" />
            <span className="dash-label-radio"></span>
            <span className="dash-label-title">
              <div className="dash-label_head">Prefer Not to Say</div></span>
          
        </label>
    </div>
</div>


            <div className="mt3 flex justify-between items-center">
              <button type="button" className="btn btn-custom" onClick={handleSave}>
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="login_logins-bg__k5jEO"></div>
    </div>
  );
}
