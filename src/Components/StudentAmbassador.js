import React, { useState } from 'react';

const StudentAmbassador = () => {
  const [code, setCode] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log('Submitted code:', code);
    setModalVisible(true); // Show modal on form submit
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <section className="studentAmbassador_ambassador__TZ_s8">
      <div className="weblayout_container__0W9V9">
        <div className="studentAmbassador_ambassador-content__SC9ju dash-white-box center">
          <h1>
            Know your Student <br /> Ambassador
          </h1>
          <p>Enter the code to verify Student Ambassador</p>
          <form className="studentAmbassador_ambassador-form__oPiwX form" onSubmit={handleSubmit}>
            <div className="flex d-sm-block flex-wrap">
              <input
                type="text"
                className=""
                placeholder="Enter code here"
                maxLength="20"
                value={code}
                onChange={handleCodeChange}
              />
              <input type="submit" className="form-control btn btn-custom" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {modalVisible && (
        <div className="modal">
          <section className="popup_modal-main__jNO6e popup_videoAI-popup__Ni_fB flex items-center justify-center">
            <div className="react-reveal popup_popup__6Zv2F">
              <button
                className="popup_popup_close__O0kkz"
                type="button"
                onClick={handleCloseModal}
              >
                &times;
              </button>
              <div className="center">
                <div className="dash-heading">Share with</div>
                <div className="studentAmbassador_ambassador-social__GpN6X">
                  <ul className="flex justify-center">
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.facebook.com/sharer/sharer.php?u="
                      >
                        <img
                          src="https://image.prepladder.com/content/o5ky2LViynGgqR9Uj3iF1675247828.png"
                          alt="Facebook"
                        />
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://api.whatsapp.com/send?text="
                        data-action="share/whatsapp/share"
                      >
                        <img
                          src="https://image.prepladder.com/content/iABUQllIsIwU8x9a6Xdi1675247847.png"
                          alt="whatsapp1"
                          className=""
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="popup_Popup-share__69vb3 flex justify-between items-center">
                  <h6>Copy Link</h6>
                  <button type="button" className="" onClick={() => navigator.clipboard.writeText(window.location.href)}>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
};

export default StudentAmbassador;