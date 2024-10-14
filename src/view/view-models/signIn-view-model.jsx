import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SignInViewModel = () => {
    const navigate = useNavigate();
    const handleSignUpClick = () => {navigate('/signup')};
    const [isLoading,setIsLoading] = useState(false);
    const [errorText,setErrorText] = useState('');
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);
    const initialUserLoginFormData = {
  user: '',
  password: ''
}

const handlePasswordEyeClick = () => {
  setIsPasswordVisible(prev => !prev)
}

const [userLoginFormData, setUserLoginFormData] = useState(initialUserLoginFormData)

const handleInputChange = (field, value) => {
  setUserLoginFormData(prev => {
    return {
      ...prev,
      [field]: value
    }
  })
}

const handleUserLogin = (e) => {
  e.preventDefault();

  setIsLoading(true);
  console.log(userLoginFormData);
  
}


  return  {
    isLoading: isLoading,
    handleSignUpClick,
    userLoginFormData,
    handleInputChange,
    handleUserLogin,
    errorText,
    isPasswordVisible,
    handlePasswordEyeClick
  }
}

export default SignInViewModel
