import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpViewModel = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate("/login");
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);

  const handlePasswordEyeClick = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleConfirmPasswordEyeClick = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };
  const intialRegistrationFormData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    vehicleType: "",
  };
  const [registrationFormData, setRegistrationFormData] = useState(
    intialRegistrationFormData
  );
  const handleFormInputChange = (field, value) => {
    setRegistrationFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const registerSubmit = async (e) => {
    e.preventDefault();

    try {
      // Determine which route to send the form data to based on role
      const url =
        registrationFormData.role === "driver" ? "/api/driver" : "/api/signup";

      const response = await axios.post(url, registrationFormData);

      if (response.data.success) {
        
        alert("Registration successful!");
        if (response.data.user && response.data.user.role === "user") {
          navigate("/user");
        } else if (response.data && response.data.driver.fullName) {
          navigate("/driver");
        } else if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          alert("Invalid role detected: " + response.data.user.role);
        }
      } else {
        alert("Registration failed: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return {
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
    isPasswordMatching:
      registrationFormData.password === registrationFormData.confirmPassword ||
      registrationFormData.confirmPassword === "",
  };
};

export default SignUpViewModel;
