import React, { useState } from 'react';
import Select from 'react-select';
import { getNames, getCode } from 'country-list';
import './style.css'; 

const CountrySelect = () => {
  // Ensure that getNames() returns an array
  const countryNames = getNames() || [];

  // Map country names to an object containing both name and code, ensuring getCode is valid
  const countries = countryNames.map((name) => {
    const code = getCode(name);
    return code ? { label: `${name} (${code})`, value: code } : { label: name, value: name };
  });

  // State to manage selected country
  const [selectedCountry, setSelectedCountry] = useState(null);

  // Handle selection change
  const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };

  return (
    <Select
    className="custom-select-changes__input"
    styles={customStyles}
      options={countries}
      onChange={handleChange}
      classNamePrefix="react-select"
      placeholder="Select a country..."
      isSearchable
      value={selectedCountry}
    />
  );
};

export default CountrySelect;

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