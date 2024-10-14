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
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
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
      setIsLoading(true);
      console.log("Registered Successfully");
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
