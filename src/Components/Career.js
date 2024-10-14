import React, { useState } from "react";
import Slider from "react-slick"; // Importing react-slick for carousel/slider functionality
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css";

export default function Career() {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close
  const [selectedOption, setSelectedOption] = useState("all"); // State to track selected option

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Adjust speed for automatic sliding (in milliseconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px", // Adjust as per your design
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Delay between slides during autoplay (in milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  };

  const scrollToJobSection = () => {
    document.getElementById("viewJobs").scrollIntoView({ behavior: "smooth" });
  };

  // Array of image URLs
  const images = [
    "https://image.prepladder.com/content/Wh7v4FQVUklDMxtCiWTL1645430480.jpg",
    "https://image.prepladder.com/content/SagiDjkPwV9bYYEag6s11645430509.jpg",
    "https://image.prepladder.com/content/Glv7qxpfJism9kwZXxCA1645430563.jpg",
    "https://image.prepladder.com/content/RGHxlmm12DKudr6blu201645430177.jpg",
    "https://image.prepladder.com/content/32cdAkE3OsbhshKPMQCo1645430216.jpg",
    "https://image.prepladder.com/content/M8Rfyx9p6pcbAwqqdpyh1645430258.jpg",
    "https://image.prepladder.com/content/nXKpdppWscfxL0bYJzwa1645430295.jpg",
    "https://image.prepladder.com/content/GwmYObKPS2B0UQzr0Zxq1645430327.jpg",
    "https://image.prepladder.com/content/qIsbQPLtgsdJRSna0F7n1645430385.jpg",
    "https://image.prepladder.com/content/5i4ZIb9aUD8ZFginuRpC1645430422.jpg",
    "https://image.prepladder.com/content/8t2h3YXAKFkPXoPGzYQu1645430450.jpg",
  ];

  const jobListings = [
    {
      id: 1,
      title: "NEET PG Content developers",
      location: "Chandigarh",
      imageUrl:
        "https://image.prepladder.com/content/w4b8ExShJY0LXgL15GXl1709893560.svg",
      url: "/careers/61-neet+pg+content+developers+chandigarh",
    },
    {
      id: 2,
      title: "Sales Manager",
      location: "Chandigarh",
      imageUrl:
        "https://image.prepladder.com/content/w4b8ExShJY0LXgL15GXl1709893560.svg",
      url: "/careers/142-sales+manager+chandigarh",
    },
    // Add more job objects as needed
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    toggleDropdown(); // Close dropdown after selecting an option
    // Handle any other logic you want when an option is selected
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle the dropdown state
  };

  // Function to get display text based on selected option
  const getDisplayText = () => {
    switch (selectedOption) {
      case "all":
        return "all";
      case "Contractual":
        return "Contractual";
      case "Full Time":
        return "Full Time";
      default:
        return "all"; // Default to 'all' if selectedOption does not match any case
    }
  };

  return (
    <div>
      <section className="career_career__H3OCr py8 flex items-center flex-wrap">
        <div className="weblayout_container__0W9V9">
          <div className="weblayout_row__VBgkR">
            <div className="weblayout_col-xl-6__rHMdE weblayout_col-lg-6__bH2F2 weblayout_col-md-12__j0tLe weblayout_col-sm-12__bJVbl">
              <div className="career_career__main__iotsv">
                <h2>We are Hiring</h2>
                <span>Be a part of the ScholarSense Family</span>
                <p className="justify">
                  As we continue to enroll more and more students each day,
                  PrepLadder is continuously helping in creating the leaders of
                  tomorrow by ensuring that our students are fully equipped with
                  everything they need to be successful.
                </p>
                <button className="btn-1 mt3" onClick={scrollToJobSection}>
                  Check out all available positions
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="career_career__image__4Ydaa">
          <img
            src="https://image.prepladder.com/content/8UKPXvVFr2DKDI2t0ymr1653633891.webp"
            alt="career-graphic"
          />
        </div>
      </section>
      <section
        className="career_career_exp__vzyMJ py6"
        style={{ width: "100%", paddingTop: "3%" }}
      >
        <div
          className="home_web__heading__hj0NB container center"
          style={{ width: "100%", maxWidth: "none" }}
        >
          <h2>Experience life at ScholarSense</h2>
          <p style={{ paddingTop: "1rem" }}>
            Our aim is to create a work environment that promotes growth, both
            personally and professionally.
          </p>
        </div>
        <div
          className="container carrier-slider py6"
          style={{
            width: "100%",
            maxWidth: "none",
            paddingTop: "2%",
            paddingBottom: "3%",
          }}
        >
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} style={{ padding: "10px" }}>
                <img
                  src={image}
                  alt={`img-${index}`}
                  style={{
                    width: "calc(100% - 20px)", // Adjusted width considering padding
                    height: "300px", // Adjusted height (example height)
                    borderRadius: "8px", // Rounded corners
                    objectFit: "cover", // Ensures the image fills the container
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section
        className="career_careerOpen__4SaWU pt6 lastsection"
        id="viewJobs"
        style={{ scrollMargin: "28px" }}
      >
        <div className="container">
          <div className="home_web__heading__hj0NB career_careerOpen-top__iv9wD flex justify-between items-center">
            <h2>Current job openings</h2>
            <div className="career_careerOpen-full__xLARg">
              <span
                className="dropdown-header"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                {getDisplayText()}{" "}
                {/* Display dynamic text based on selectedOption */}
                <img
                  src="https://image.prepladder.com/content/eQflvSrC5xINWOOEHmt91709884028.svg"
                  alt="img"
                />
              </span>
              <i
                className={`fas fa-chevron-${
                  isOpen ? "up" : "down"
                } dropdown-icon`}
                onClick={toggleDropdown}
              ></i>
              {isOpen && (
                <div
                  id="jobType"
                  className="career_careerOpen-full-content__Cm1fO"
                >
                  <ul>
                    <li>
                      <a
                        className={selectedOption === "all" ? "active" : ""}
                        onClick={() => handleOptionSelect("all")}
                      >
                        all
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          selectedOption === "Contractual" ? "active" : ""
                        }
                        onClick={() => handleOptionSelect("Contractual")}
                      >
                        Contractual
                      </a>
                    </li>
                    <li>
                      <a
                        className={
                          selectedOption === "Full Time" ? "active" : ""
                        }
                        onClick={() => handleOptionSelect("Full Time")}
                      >
                        Full Time
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="career_careerOpen-full__xLARg career_careerOpen-mob__MTS0h">
              <span>
                All Departments
                <img
                  src="https://image.prepladder.com/content/eQflvSrC5xINWOOEHmt91709884028.svg"
                  alt="img"
                />
              </span>
              <div
                id="dept"
                className="career_careerOpen-full-content__Cm1fO display-none"
              >
                <ul>
                  <li>
                    <a> All Departments (13)</a>
                  </li>
                  <li>
                    <a> PL Content (1)</a>
                  </li>
                  <li>
                    <a> Telesales (2)</a>
                  </li>
                  <li>
                    <a> Legal (1)</a>
                  </li>
                  <li>
                    <a> Digital Marketing (2)</a>
                  </li>
                  <li>
                    <a> Business Development (5)</a>
                  </li>
                  <li>
                    <a> Brand &amp; Marketing (1)</a>
                  </li>
                  <li>
                    <a> Product &amp; Tech (1)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt6 flex flex-wrap">
            <div className="career_careerOpen-sticky__xMQRT col col-4 md-col-4 sm-col-12">
              <div className="career_careerOpen-head__99tVz">
                <span>Departments</span>
              </div>
              <div className="career_careerOpen-list__7s18o">
                <ul>
                  <li className="career_careerOpen-active__hDx_F">
                    All Departments (13)
                  </li>
                  <li className="">PL Content (1)</li>
                  <li className="">Telesales (2)</li>
                  <li className="">Legal (1)</li>
                  <li className="">Digital Marketing (2)</li>
                  <li className="">Business Development (5)</li>
                  <li className="">Brand &amp; Marketing (1)</li>
                  <li className="">Product &amp; Tech (1)</li>
                </ul>
              </div>
            </div>
            <div className="col col-8 md-col-8 sm-col-12">
              <div>
                <div className="career_careerOpen-head__99tVz">ROLES</div>
                <div className="career_careerOpen-role__vYZd5">
                  <ul>
                    {jobListings.map((job) => (
                      <li key={job.id}>
                        <a className="" href={job.url}>
                          <div className="flex justify-between">
                            <div>
                              <h4>{job.title}</h4>
                              <p>{job.location}</p>
                            </div>
                            <img src={job.imageUrl} alt="img" />
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
