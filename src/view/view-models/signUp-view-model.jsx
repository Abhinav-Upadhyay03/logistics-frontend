import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SignUpViewModel = () => {
    const navigate = useNavigate();
  const handleLoginClick = () => {
      navigate('/login');
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(false)
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false)

  const handlePasswordEyeClick = () => {
      setIsPasswordVisible(!isPasswordVisible);
  };
  const handleConfirmPasswordEyeClick = () => {
      setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const intialRegistrationFormData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    vehicleType: '',
  }
  const [registrationFormData,setRegistrationFormData] = useState(intialRegistrationFormData)
  const handleFormInputChange = (field,value) => {
    setRegistrationFormData(prev => ({
        ...prev,
        [field]: value
    }))
  }
  const registerSubmit = async (e) => {
      e.preventDefault();
      // setIsLoading(true);
      console.log(registrationFormData);
      const data = await axios.post('/api/signup',registrationFormData);
      {console.log(data)};
      
      
      console.log("Registered Successfully");
      if(data.data.user.role === 'user'){
          navigate('/user');
      }else{
          navigate('/driver');
      }
  }
  
  

  return{
    isLoading: isLoading,
    isRegisterSuccess,
    setIsRegisterSuccess,
    handleLoginClick,
    isPasswordVisible,
    isConfirmPasswordVisible,
    handlePasswordEyeClick,
    handleConfirmPasswordEyeClick,
    registrationFormData,
    handleFormInputChange,
    registerSubmit,
    isPasswordMatching: registrationFormData.password === registrationFormData.confirmPassword || registrationFormData.confirmPassword === '',
  }
}

export default SignUpViewModel
