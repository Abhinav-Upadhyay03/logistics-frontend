import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const SignInViewModel = () => {
    const navigate = useNavigate();
    const handleSignUpClick = () => {navigate('/signup')};
    const [isLoading,setIsLoading] = useState(false);
    const [errorText,setErrorText] = useState('');
    const [isPasswordVisible,setIsPasswordVisible] = useState(false);
    const initialUserLoginFormData = {
  email: '',
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

const handleUserLogin = async (e) => {
  e.preventDefault();
  try {
    // Make a POST request to login the user
    // console.log(`Form data: ${userLoginFormData}`);
    const response = await axios.post('/api/login', userLoginFormData);

    // Check if the response contains the user data
    if (response.data) {
      console.log('Login successful:', response.data);

      // Get the user's role
      const userRole = response.data.user.role;

      // Navigate based on the user's role
      if (userRole === 'user') {
        navigate('/user');
      } else if (userRole === 'driver') {
        navigate('/driver');
      } else {
        console.error('Unknown role:', userRole);
      }
    }
  } catch (error) {
    console.error('Error logging in:', error);
    alert('Invalid email or password');
  }
};


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
