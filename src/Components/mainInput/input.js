import React from 'react'
import Select from '../input/select'
import TextInput from '../input/TextInput'


const Input = () => {
  return (
    <div>
        <h1>Haelkjmopnf</h1>
        <div>
              <Select
                label="Organization"
                placeholder="Select"
                // options={option}
              />
            </div>
        <TextInput
              name="username"
              label="Username"
            //   imgSrc={user}
            //   value={inputs.accountName}
              placeholder="User"
            //   onChange={onChange}
            />
            <TextInput
              name="email"
              label="Email"
            //   imgSrc={user}
            //   value={inputs.accountName}
              placeholder="Email"
            //   onChange={onChange}
            />
            <TextInput
              name="date"
              label="Date"
            //   imgSrc={user}
            //   value={inputs.accountName}
              placeholder="Date"
            //   onChange={onChange}
            />
            <div>
              <Select
                label="Status"
                placeholder="Select"
                // options={option}
              />
            </div>
            <TextInput
              name="phonenumber"
              label="Phone Number"
            //   imgSrc={user}
            //   value={inputs.accountName}
              placeholder="User"
            //   onChange={onChange}
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
  )
}
export default Input