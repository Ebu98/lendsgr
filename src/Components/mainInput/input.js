import React, { useState } from "react";
import Select from "../input/select";
import TextInput from "../input/TextInput";
import date from "../../assests/image/date.png";
import './main.scss'


const Input = () => {
    
  const [value, setValue] = useState({
    username: "",
    email: "",
    date: "",
    phonenumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue(prevValue => ({ 
        ...prevValue,
         [name]: value }));
  };

  const options = [
    { value: "0", label: "Male" },
    { value: "1", label: "Female" },
  ];

  return (
    <div className="main-input-container">
      <div>
        <Select label="Organization" placeholder="Select" options={options} />
      </div>
      <TextInput
        name="username"
        label="Username"
        value={value.username}
        placeholder="User"
        onChange={handleChange}
      />
      <TextInput
        name="email"
        label="Email"
        value={value.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <TextInput
        name="date"
        type=""
        label="Date"
        value={value.date}
        placeholder="Date"
        imgSrc={date}
        onChange={handleChange}
      />
      
      <TextInput
        name="phonenumber"
        label="Phone Number"
        type="number"
        value={value.phonenumber}
        placeholder="phone Number"
        onChange={handleChange}
      />
      <div>
        <Select label="Status" placeholder="Select" options={options} />
      </div>
            <div className="buttons-wrap">
            <button className="reset">Reset</button>
            <button className="filter">Filter</button>
            </div>
    </div>
  );
};
export default Input;
