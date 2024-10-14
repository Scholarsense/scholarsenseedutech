import React, { useState } from "react";

const countryCodes = [
  {
    code: "+91",
    name: "India",
    flagUrl:
      "https://image.prepladder.com/content/Pkkswnm7xW5auWwyhDIX1617863781.png",
  },
  {
    code: "+971",
    name: "United Arab Emirates",
    flagUrl:
      "https://image.prepladder.com/content/qqgl4PPXjrJGxIn6dqWy1676444286.png",
  },
  {
    code: "+93",
    name: "Afghanistan",
    flagUrl:
      "https://image.prepladder.com/content/aGHjoJNnMsAQA4U4zEZL1676444440.png",
  },
  // Add more countries as needed
];

const CountryCodeDropdown = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCountries = countryCodes.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="countryCode_CountryCode01_dropdown__VwuLl">
      <div className="countryCode_CountryCode01_srh__vy0XQ">
        <input
          type="text"
          placeholder="Search country code"
          className="footerInput"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <ul>
        {filteredCountries.map((country, index) => (
          <li
            key={index}
            className={index === 0 ? "countryCode_active_listCode__j9DZi" : ""}
          >
            <div className="countryCode_codelist__dn4Ss">
              <img
                src={country.flagUrl}
                alt=""
                style={{ marginRight: "1rem", maxWidth: "2.5rem" }}
              />
              <span>
                {country.code} {country.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryCodeDropdown;