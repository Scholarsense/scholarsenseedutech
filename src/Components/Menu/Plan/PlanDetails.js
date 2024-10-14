import React from 'react'

export default function PlanDetails() {
  return (
    <div style={{ background: 'linear-gradient(180deg, #fffbee, #fff)' }} className="cutNoise">
    {/* Back link */}
    <div className="back-link" style={{ cursor: 'pointer' }} >
      <img src="https://image.prepladder.com/content/Fi85C05fQBthRdKq2q3c1654666966.png" className="w24" alt="Back" />
    </div>

    {/* Main content section */}
    <div className="topSpacing4rem contentSec">
      <div className="container">
        {/* Header */}
        <header style={{ display: 'none' }}>
          <div className="text-center">
            <div className="logo"></div>
          </div>
        </header>

        {/* Plan details */}
        <div className="row d-flex justify-between d-md-block plan_body">
          {/* Features */}
          <div className="features">
  <div className="back-link" style={{ cursor: 'pointer' }}>
    <img src="https://image.prepladder.com/content/mtiJpXFI4ZBIUdq8zoWv1679550226.png" alt="Back" />
    Back
  </div>
  <div className="features-content">
    <div className="features-list">
      <div className="features-list-head">
        <h2 className="subHead">
          What we offer
          <sup><img src="https://image.prepladder.com/content/CSSwcBoYE1r5PLmz70wq1678434162.png" alt="sup" /></sup>
        </h2>
        <p>Enhance your preparation with our best &amp; exclusive study material</p>
      </div>
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <img src="https://image.prepladder.com/content/hqYiEP8b6kiuSM5EAIYf1706186633.png" alt="Conceptual Video Lectures" />
          <div>Conceptual Video Lectures</div>
        </li>
        <li>
          <img src="https://image.prepladder.com/content/Clinical QBank.png" alt="18000+ questions" />
          <div>18000+ questions including clinical, one-liners &amp; PYQs</div>
        </li>
        <li>
          <img src="https://image.prepladder.com/content/charts-treasures.png" alt="1500+ summary charts" />
          <div>1500+ summary charts in the form of treasures</div>
        </li>
        <li>
          <img src="https://image.prepladder.com/content/Mock Tests.png" alt="12 Mock Tests" />
          <div>12 Mock Tests with 1 lakh participants</div>
        </li>
        <li>
          <img src="https://image.prepladder.com/content/6500 MCQs.png" alt="Option to buy hard copy notes" />
          <div>Option to buy hard copy notes with space to annotate</div>
        </li>
      </ul>
    </div>
  </div>
</div>


          {/* Right side - Plan details */}
          <div className="col-xl-7 col-lg-7 col-md-12 float-right">
            <div className="right-side">
              <div className="right-side-content Height80">
                <div className="subject-title text-center">
                  <h1>ELITE Plan</h1>
                  <div className="sec-head">
                    <h2>Choose your plan duration</h2>
                  </div>
                </div>

                {/* Plan options */}
                <div className="choosePlan">
                  <ul className="choosePlan-list">
                    <li>
                      <input type="checkbox" id="choosePlan-1-0" name="choosePlan" />
                      <label htmlFor="choosePlan-1-0">
                        <span className="choosePlan-check">
                          <img src="https://image.prepladder.com/content/zJukbtLqmbzY6JHoBfL91706093212.png" alt="check" />
                        </span>
                        <div className="choosePlan-top d-flex justify-between items-center">
                          <div className="months">
                            <strong>1 month</strong>
                          </div>
                          <div className="annualPrice">
                            <del>₹10,000</del>
                            <strong>₹6,490</strong>
                          </div>
                        </div>
                        <div className="choosePlan-btm d-flex justify-between items-center">
                          <div className="freeMonths"></div>
                          <div className="monthlyprice">₹6,490/mo</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="choosePlan-1-1" name="choosePlan" />
                      <label htmlFor="choosePlan-1-1">
                        <span className="choosePlan-check">
                          <img src="https://image.prepladder.com/content/zJukbtLqmbzY6JHoBfL91706093212.png" alt="check" />
                        </span>
                        <div className="choosePlan-top d-flex justify-between items-center">
                          <div className="months">
                            <strong>3 months</strong>
                          </div>
                          <div className="annualPrice">
                            <del>₹29,000</del>
                            <strong>₹17,990</strong>
                          </div>
                        </div>
                        <div className="choosePlan-btm d-flex justify-between items-center">
                          <div className="freeMonths"></div>
                          <div className="monthlyprice">₹5,997/mo</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="choosePlan-1-2" name="choosePlan" />
                      <label htmlFor="choosePlan-1-2">
                        <span className="choosePlan-check">
                          <img src="https://image.prepladder.com/content/zJukbtLqmbzY6JHoBfL91706093212.png" alt="check" />
                        </span>
                        <div className="choosePlan-top d-flex justify-between items-center">
                          <div className="months">
                            <strong>9 months</strong>
                          </div>
                          <div className="annualPrice">
                            <del>₹51,000</del>
                            <strong>₹29,490</strong>
                          </div>
                        </div>
                        <div className="choosePlan-btm d-flex justify-between items-center">
                          <div className="freeMonths"> + 1 Month Free</div>
                          <div className="monthlyprice">₹2,949/mo</div>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="choosePlan-1-3" name="choosePlan" />
                      <label htmlFor="choosePlan-1-3">
                        <span className="choosePlan-check">
                          <img src="https://image.prepladder.com/content/zJukbtLqmbzY6JHoBfL91706093212.png" alt="check" />
                        </span>
                        <div className="choosePlan-top d-flex justify-between items-center">
                          <div className="months">
                            <strong>1 Year</strong>
                          </div>
                          <div className="annualPrice">
                            <del>₹55,000</del>
                            <strong>₹33,690</strong>
                          </div>
                        </div>
                        <div className="choosePlan-btm d-flex justify-between items-center">
                          <div className="freeMonths"> + 2 Months Free</div>
                          <div className="monthlyprice">₹2,406/mo</div>
                        </div>
                      </label>
                    </li>
                    <li className="recmndList">
                      <input type="checkbox" id="choosePlan-1-4" name="choosePlan" />
                      <label htmlFor="choosePlan-1-4">
                        <span className="choosePlan-check">
                          <img src="https://image.prepladder.com/content/zJukbtLqmbzY6JHoBfL91706093212.png" alt="check" />
                        </span>
                        <div className="recommend"><strong>Recommended</strong></div>
                        <div className="choosePlan-top d-flex justify-between items-center">
                          <div className="months">
                            <strong>18 months</strong>
                          </div>
                          <div className="annualPrice">
                            <del>₹67,500</del>
                            <strong>₹45,490</strong>
                          </div>
                        </div>
                        <div className="choosePlan-btm d-flex justify-between items-center">
                          <div className="freeMonths"> + 2 Months Free</div>
                          <div className="monthlyprice">₹2,275/mo</div>
                          </div>
                        </label>
                      </li>
                    </ul>
                    <div className="choosePlan-btn text-center mT20">
                      <button className="btn btn-border">View all plans</button>
                    </div>
                  </div>

                  {/* Features list - whiteBox (desktop view) */}
                  <div className="features-list whiteBox d-none d-md-block">
                    <label htmlFor="featureList">
                      <div className="features-list-head">
                        <h2 className="subHead">What we offer<sup><img src="https://image.prepladder.com/content/CSSwcBoYE1r5PLmz70wq1678434162.png" alt="sup" /></sup></h2>
                        <p>Enhance your preparation with our best & exclusive study material</p>
                      </div>
                      <div aria-hidden="true" className="rah-static rah-static--height-zero" style={{ height: '0px', overflow: 'hidden' }}>
                        <div style={{ display: 'none' }}>
                          <ul>
                            <li>
                              <img src="https://image.prepladder.com/content/hqYiEP8b6kiuSM5EAIYf1706186633.png" alt="Conceptual Video Lectures" />
                              <div>Conceptual Video Lectures</div>
                            </li>
                            <li>
                              <img src="https://image.prepladder.com/content/Clinical QBank.png" alt="18000+ questions" />
                              <div>18000+ questions including clinical, one-liners & PYQs</div>
                            </li>
                            <li>
                              <img src="https://image.prepladder.com/content/charts-treasures.png" alt="1500+ summary charts" />
                              <div>1500+ summary charts in the form of treasures</div>
                            </li>
                            <li>
                              <img src="https://image.prepladder.com/content/Mock Tests.png" alt="12 Mock Tests" />
                              <div>12 Mock Tests with 1 lakh participants</div>
                            </li>
                            <li>
                              <img src="https://image.prepladder.com/content/6500 MCQs.png" alt="Option to buy hard copy notes" />
                              <div>Option to buy hard copy notes with space to annotate</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* Add notes section */}
                  <div className="whiteBox">
                    <h2 className="subHead">Add notes</h2>
                    <div className="addons addonNotes">
                      <div aria-hidden="false" className="rah-static rah-static--height-auto" style={{ height: 'auto', overflow: 'visible' }}>
                        <div style={{ transition: 'opacity 300ms ease 0ms' }}>
                          <div className="added-price notes-added addonTop d-flex justify-between align-center">
                            <div className="added-price d-flex align-center">
                              <div className="added-price-img">
                                <img src="https://image.prepladder.com/content/uJepBlSmVsHRBThOccqO1707997563.png" alt="Notes 6.0" />
                              </div>
                              <div className="added-price-content">
                                <h4>Added Notes 6.0</h4>
                                <p className="Totalprice"><del>₹9,999</del>₹8,499</p>
                              </div>
                            </div>
                            <div className="added-price-btn11">
                              <button className="btn btn-border mL-auto">Remove</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-hidden="true" className="rah-static rah-static--height-zero" style={{ height: '0px', overflow: 'hidden' }}>
                        <div style={{ transition: 'opacity 300ms ease 0ms', opacity: 0, display: 'none' }}>
                          <div className="addons-top-cont">
                            <div className="added-price d-flex align-center">
                              <div className="added-price-left">
                                <div className="added-price-img">
                                  <img src="https://image.prepladder.com/content/uJepBlSmVsHRBThOccqO1707997563.png" alt="Notes 6.0" />
                                </div>
                                <div className="added-price-content">
                                  <h4>Notes 6.0</h4>
                                  <p className="Totalprice"><del>₹9,999</del>₹8,499</p>
                                </div>
                              </div>
                              <div className="added-price-btn1">
                                <button className="btn btn-border mL-auto">+ Add</button>
                              </div>
                            </div>
                            <div className="addons-content">
                              <h3>Here's what you get</h3>
                              <ul>
                                <li>Content representation with single column layout, tables & flowcharts.</li>
                                <li>Synopsis with competency tagging.</li>
                                <li>PYQ tags, Integration & important information boxes, and chanting lines.</li>
                              </ul>
                              <div className="addons-content-bg addons-content-bg-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="whiteBox">
  <div className="coupon">
    <div className="coupon-box">
      <div className="coupon-head d-flex align-center">
        <img src="https://image.prepladder.com/content/1RGjXz2wisSoVdS5v8LT1637223550.png" className="mR15 w24" alt="Apply coupon code" />
        Apply coupon code
      </div>
      <form className="coupon-field">
        <div>
          <input type="text" name="couponCode" placeholder="Enter coupon code" />
          <button disabled className="apply-link align-center d-flex" style={{ cursor: 'pointer' }}>
            Apply code
            <img src="https://image.prepladder.com/content/MA9vH1DmhFAN7vCIqs151678444180.png" alt="Apply" />
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
                  {/* Bill summary table */}
                  <div className="bill-table whiteBox" style={{ marginBottom: '0rem' }}>
                    <h2 className="subHead">Price summary</h2>
                    <table width="100%">
                      <tbody>
                        <tr>
                          <th>Subtotal</th>
                          <td> ₹67,500</td>
                        </tr>
                        <tr>
                          <th>Notes 6.0<span className="color-red">REMOVE</span></th>
                          <td>+ ₹8,499</td>
                        </tr>
                        <tr className="border-row">
                          <th>Discount </th>
                          <td className="color-green" style={{ whiteSpace: 'nowrap' }}>- ₹22,010</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Final price</th>
                          <td>₹53,989</td>
                        </tr>
                      </tfoot>
                    </table>
                    <div className="pack-valid">
                      <p>Valid till 25th Feb 2026</p>
                    </div>
                  </div>

                  {/* KYC Process */}
                  <div className="kycProcess">
                    <div className="container">
                      <img src="https://image.prepladder.com/content/8TPmwWywTjbIKY02mSM71692957014.png" className="w24 mR10" alt="KYC Process" />
                      <p>Don’t forget to complete your KYC post payment completion. It won’t take more than a minute.</p>
                    </div>
                  </div>

                  <footer1>
  <div className="footer-bottom">
    <div className="left">
      <div className="total-payment">₹ <span>53,989.00</span></div>
      <p className="color-default">for 18 months</p>
    </div>
    <div className="right mY-auto">
      <button className="btn btn-theme">Proceed to pay</button>
    </div>
  </div>
</footer1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
