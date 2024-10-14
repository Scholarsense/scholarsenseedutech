import React, {useState} from 'react'

export default function Doubt() {
    const [modalOpen, setModalOpen] = useState(false);
  const [doubtText, setDoubtText] = useState('');

  // Function to handle opening the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalOpen(false);
    setDoubtText(''); // Clear doubt text when closing modal
  };

  // Function to handle submitting the doubt form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle submitting the doubt text
    console.log('Submitting doubt:', doubtText);
    // Reset doubt text and close modal
    setDoubtText('');
    setModalOpen(false);
  };

  const handleOnClick = () => {
    window.location.href = '/FeedbackPopup'; // Replace with the actual URL or path you want to navigate to
  };

  const handleClose = () => {
    window.location.href = '/settings';; 
  };


  return (
    <div>
 <div id="parent-container">
      <header className="header mob-space">
        <div className="container flex justify-between items-center">
          <div className="header_left">
            <div className="pa-logo">
              <a title="PrepAI">
                <img
                  src="https://image.prepladder.com/content/9X9iYCjrQsnXpxNdOX801714972389.svg"
                  alt="logo"
                  className="light_img"
                />
                <img
                  src="https://image.prepladder.com/content/w9q1wY7XyTcdSbJwUBSS1696842778.png"
                  alt="logo"
                  className="dark_img"
                />
              </a>
            </div>
            <div className="pa-logo pa-logo-mob">
              <div className="flex items-center">
                <img
                  src="https://image.prepladder.com/content/NjQvOAz26f5xijJkW1UH1698988870.svg"
                  alt="back icon"
                  className="backarrow dark_icon"
                />
                <span>PrepAI</span>
              </div>
            </div>
          </div>
          <div className="header_right">
            <ul className="flex">
              <li className="pa-elite">
                <button>
                  <img
                    src="https://image.prepladder.com/content/eiJLU6DAUyiaaEOZHu461714982275.svg"
                    alt="Go Elite"
                  />
                  <span>Go Elite</span>
                </button>
              </li>
              <li className="pa-close">
                <img
                  src="https://image.prepladder.com/content/iSpvxZ08wWoOSlAnQTbr1695205744.svg"
                  alt="close"
                  className="dark_icon"
                  onClick={handleClose}
                />
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="mainLayout ML-welcomebanner">
        <div className="container">
          <div className="mainLayout_left">
            <div className="sidebar flex">
              <div className="sidebar-header">
                <button className="askques w-100" onClick={openModal}>
                  + Ask new doubt
                </button>
              </div>
              <div className="sidebar-main"></div>
              <div className="sidebar-footer">
                <div className="sidebar-footer-preplogo">
                  <img
                    src="https://image.prepladder.com/content/x4VSptrvKe02ELr0owiw1695036607.svg"
                    alt="logo"
                    className="light_img"
                  />
                  <img
                    src="https://image.prepladder.com/content/0DkkH4MdYwQItaEfkGxT1695036685.svg"
                    alt="logo"
                    className="dark_img"
                  />
                </div>
                <div className="sidebar-footer-pptc">
                  <a href="/privacyPolicy">Privacy Policy</a> | <a href="/termsConditions">Terms & Condition</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mainLayout_right">
            <div id="scrollingArea" className="mainLayout_right-main">
              <div className="welcomPage">
                <div className="welcomPage_hed mb2">
                  <h1>
                    Get your doubts resolved instantly with{' '}
                    <font color="#00ACFF">Scholar Sense</font>
                  </h1>
                </div>
                <ul className="WC-list">
                  <li>
                    <div className="card">
                      <h2>What are the Inborn errors of metabolism?</h2>
                      <div className="card-icon">
                        <img
                          src="https://image.prepladder.com/content/U0yuOOfYzV1wanMhdBoK1713438776.png"
                          alt="What are the Inborn errors of metabolism?"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <h2>Can you suggest the treatment for OP Poisoning?</h2>
                      <div className="card-icon">
                        <img
                          src="https://image.prepladder.com/content/B90RJH7ifmuTS61ehBWn1713438715.png"
                          alt="Can you suggest the treatment for OP Poisoning?"
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <h2>
                        Tell the difference between Ulcerative colitis &amp; Crohn’s
                        disease.
                      </h2>
                      <div className="card-icon">
                        <img
                          src="https://image.prepladder.com/content/KEZ6Rgw85j7TASSqkXNI1713438841.png"
                          alt="Tell the difference between Ulcerative colitis &amp; Crohn’s disease."
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="card">
                      <h2>What will be the drug of Choice for Status Epilepticus?</h2>
                      <div className="card-icon">
                        <img
                          src="https://image.prepladder.com/content/i5KyQR2nxF02vVPDnNqw1713438868.png"
                          alt="What will be the drug of Choice for Status Epilepticus?"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="recent-srh">
                  <div className="prevSrh flex justify-between">
                    <h2>Recent doubts</h2>
                    <span>See All</span>
                  </div>
                  <ul className="prevSrh-list"></ul>
                </div>
              </div>
              <div className="ansField"></div>
            </div>
            <div className="mainLayout_right-footer">
              <div className="srhbg">
                <div className="flex items-center">
                  <div className="searchField">
                    <textarea
                      id="autoresizing"
                      placeholder="Ask your doubt here..."
                      autoFocus={true}
                      rows={2}
                      style={{ boxSizing: 'border-box' }}
                    ></textarea>
                    <button disabled="" id="submit-button" onClick={handleOnClick}>
                      <img
                        src="https://image.prepladder.com/content/d3zx78hYmyunYMald5Fz1695037099.svg"
                        alt="search button"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal structure */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Ask a doubt</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                value={doubtText}
                onChange={(e) => setDoubtText(e.target.value)}
                placeholder="Type your doubt here..."
                rows="4"
                autoFocus
              ></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  )
}