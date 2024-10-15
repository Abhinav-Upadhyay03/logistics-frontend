import React, { useEffect, useState } from 'react'
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
const [user, setUser] = useState({});
useEffect(() => {
  localStorage.setItem('user', JSON.stringify(user));
}, [user]);


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
    const response = await axios.post('/api/login', userLoginFormData);
    if (response.data) {
      console.log('Login successful:', response.data);
      

      if (response.data.success) {
        console.log(response.data);
        
        alert("Login successful!");

        if (response.data.user && response.data.user.role === "user") {
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user to localStorage
          navigate("/user");
        } else if (response.data.user && response.data.user.vehicle) {
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user)); // Save driver to localStorage
          navigate("/driver");
        } else if (response.data.user.role === "admin") {
          setUser(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user)); // Save admin to localStorage
          navigate("/admin");
        } else {
          alert("Invalid role detected: " + response.data.user.role);
        }
      } else {
        alert("Login failed: " + response.data.message);
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
