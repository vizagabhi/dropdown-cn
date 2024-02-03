import React from 'react';
import './Dropdown.css'

const Dropdown = ({ items }) => {


  const handleSelectChange = (event) => {
    const selectedItem = event.target.value;
    console.log(`Selected item: ${selectedItem}`);
  };

  return (
    <select className="dropdown-select" onChange={handleSelectChange}>
      <option value="" disabled selected hidden>Select</option>
      {items.map((item, index) => (
        <option className="options" key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
