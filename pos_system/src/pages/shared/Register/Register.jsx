import { useState } from "react"
import React from 'react'
import handleSubmit from "./handleSubmit"
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [formData, setFormData] = useState({
    empId:'',
    name: '',
    password: ''
  });

  const [res,setResponse]=useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
   
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData.empId,formData.name,formData.password,setResponse,navigate);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
     
        <label htmlFor="userName">Employee ID
          <input type="text" id="empId" name="empId" onChange={handleChange}/>
        </label>

        <label htmlFor="userName">Name
          <input type="text" id="name" name="name"  onChange={handleChange}/>
        </label>

        <label htmlFor="password" onChange={handleChange}>Password
          <input type="text" id="password"/>
        </label>
        <button type='submit' >Submit</button>
      </form>
    </div>
     
  )
}

export default Register