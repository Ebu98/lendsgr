import React, { useState } from "react";
import Select from "../input/select";
import TextInput from "../input/TextInput";
import shop from "../../assests/image/shop.png";
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
        imgSrc={shop}
        value={value.username}
        placeholder="User"
        onChange={handleChange}
      />
      <TextInput
        name="email"
        label="Email"
        imgSrc={shop}
        value={value.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <TextInput
        name="date"
        type="date"
        label="Date"
        imgSrc={shop}
        value={value.date}
        placeholder="Date"
        onChange={handleChange}
      />
      <div>
        <Select label="Status" placeholder="Select" options={options} />
      </div>
      <TextInput
        name="phonenumber"
        label="Phone Number"
        type="number"
        //   imgSrc={user}
        value={value.phonenumber}
        placeholder="phone Number"
        onChange={handleChange}
      />
      <TextInput
              name="username"
              label="Username"
            //   imgSrc={user}
            //   value={inputs.accountName}
              placeholder="User"
            //   onChange={onChange}
            />
    </div>
  );
};
export default Input;
