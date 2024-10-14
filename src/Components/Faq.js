import React, {useState} from 'react'

export default function Faq() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  const categories = [
    'General',
    'Packages & Subscriptions',
    'Earned Rewards',
    'Booking',
    'QBank',
    'Videos',
    'Tests',
    'Notes',
  ];

  const toggleFAQ = (index) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };
  
  
  const faqData = [
    {
      category: 'General',
      faqs: [
        { question: 'What is ScholarSense?', answer: 'ScholarSense is an online learning platform.' },
        { question: 'How can I sign up?', answer: 'You can sign up by clicking the sign-up button on the homepage.' },
      ],
    },
    {
      category: 'Packages & Subscriptions',
      faqs: [
        { question: 'What packages are available?', answer: 'We offer various packages tailored to different needs.' },
        { question: 'Can I change my subscription?', answer: 'Yes, you can upgrade or downgrade your subscription.' },
      ],
    },
    // More categories...
  ];
  return (
    <div>
            <section className=" faq_faq__pMrg4 pb5 pt5">
      <div className="weblayout_container__0W9V9">
      <div className="faq_faq__border__p7wJR mb5">
            <img src="https://image.prepladder.com/content/l1d77uaOlJnU4viHL6pq1675750040.webp" alt="img" />
            <h1>Frequently Asked Questions About NEET PG</h1>
            <div className="faq_faq-input__gQtz_">
                <img src="https://image.prepladder.com/content/BpYwxbDwOSKYiqUbJrAm1709884085.svg" alt="search" />
                <input type="search" placeholder="Search.." value="" />
            </div>
        </div>
        <div className="row">
          <div className="planFaq_planFaq-list__KCS8n col col-3 md-col-4 sm-col-12">
            <div className="planFaq_planFaq_head__LOa9U">CATEGORIES</div>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className={
                    index === activeCategoryIndex
                      ? 'planFaq_planFaq_active__x3zHq'
                      : ''
                  }
                  onClick={() => setActiveCategoryIndex(index)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="col col-9 md-col-8 sm-col-12">
            <div className="planFaq_planFaq_right__5CjDo faq-collapse">
              {faqData && faqData[activeCategoryIndex] && faqData[activeCategoryIndex].faqs ? (
                faqData[activeCategoryIndex].faqs.map((faq, index) => (
                  <div className="Collapsible" key={index}>
                    <div>
                      <button
                        onClick={() => toggleFAQ(index)}
                        aria-controls={`react-collapsed-panel-${index}`}
                        aria-expanded={activeFAQIndex === index ? 'true' : 'false'}
                        type="button"
                        className="width-100"
                      >
                        <div className="Collapsible-inner">
                          <div className="planFaq_planFaq_para__IPlVR">
                            <p>{faq.question}</p>
                          </div>
                        </div>
                      </button>
                      <section
                        id={`react-collapsed-panel-${index}`}
                        aria-hidden={activeFAQIndex !== index ? 'true' : 'false'}
                        aria-labelledby={`react-collapsed-toggle-${index}`}
                        role="region"
                        style={{
                          boxSizing: 'border-box',
                          display: activeFAQIndex === index ? 'block' : 'none',
                          height: activeFAQIndex === index ? 'auto' : '0px',
                          overflow: 'hidden',
                        }}
                      >
                        <div className="planFaq_planFaq_content__5gDdo">
                          <div>{faq.answer}</div>
                        </div>
                      </section>
                    </div>
                  </div>
                ))
              ) : (
                <div>No FAQs available for this category.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
  )
}
