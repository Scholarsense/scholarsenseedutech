import React from 'react';
import Select from 'react-select';

const StateDropdown = ({ selectedState, onStateChange }) => {
  return (
    <div className="form-group">
      <label className="flex mb1">Current state of residence</label>
      <Select
      className="custom-select-changes__input"
      styles={customStyles}
        onChange={(e) => onStateChange(e.target.value)}
      >
        <option value="">Please select your state</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Delhi">Delhi</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        {/* Add more states as needed */}
      </Select>
    </div>
  );
};

export default StateDropdown;
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