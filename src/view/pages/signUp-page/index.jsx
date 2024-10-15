import React from "react";
import FullScreenLoader from "../../components/common/full-screen-loader";
import style from "./style.module.css";
import LogoMain from "../../../assets/LogoMain.png";
import SignUpViewModel from "../../view-models/signUp-view-model";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const {
    isLoading,
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
    isPasswordMatching,
  } = SignUpViewModel();

  const navigate = useNavigate();

  const handlePaste = (e) => {
    e.preventDefault();
  };

  return (
    <div className="sm:flex w-full">
      {isLoading && <FullScreenLoader />}
      <div className="sm:block hidden bg-[#28a99e] w-[40%] h-svh"></div>
      <div className="bg-white sm:w-[60%] w-full h-svh">

        <form className="sm:mt-8" action="" onSubmit={registerSubmit}>
          <div className="sm:p-0 p-6 sm:px-20 pt-10">
            <h1 className="text-center sm:text-left text-4xl font-normal">
              Sign Up
            </h1>
            <h2 className="sm:hidden text-center text-md font-normal mt-10">
              Create your account
            </h2>
            <div className="sm:mt-10 mt-20"></div>
            <div className="sm:block hidden">
              <div className="flex flex-col">
                <p className=" text-sm flex items-center justify-between">
                  <div>Full Name</div>
                </p>
                <input
                  className={`h-10 bg-white mb-3.5 sm:rounded-md sm:border border-b focus:outline-none px-[1vw] mt-2 cursor-text w-1/2`}
                  isRequired={true}
                  type="text"
                  value={registrationFormData.fullName}
                  onChange={(e) =>
                    handleFormInputChange("fullName", e.target.value)
                  }
                />
              </div>
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <p className=" text-sm flex items-center justify-between">
                    <div>Email</div>
                    {/* <div className="text-red-400 text-xs">This email is already registered!</div> */}
                  </p>
                  <div className="relative">
                    <input
                      className={`h-10 bg-white mb-3.5 sm:rounded-md sm:border border-b focus:outline-none px-[1vw] mt-2 w-full cursor-text`}
                      placeholder=""
                      type="email"
                      value={registrationFormData.email}
                      onChange={(e) =>
                        handleFormInputChange("email", e.target.value)
                      }
                      required={false}
                    />
                  </div>
                </div>
              </div>

              <div className="w-1/2">
                <p className=" text-sm flex items-center justify-between">
                  <div>Password</div>
                </p>
                <div className="relative">
                  <input
                    className={`h-10 bg-white mb-3.5 sm:rounded-md sm:border border-b focus:outline-none px-[1vw] mt-2 w-full cursor-text`}
                    placeholder=""
                    type={isPasswordVisible ? "text" : "password"}
                    minLength={6}
                    value={registrationFormData.password}
                    onChange={(e) => {
                      handleFormInputChange("password", e.target.value);
                      if (e.target.value.length < 6) {
                        e.target.setCustomValidity(
                          "Password must be atleast 6 characters."
                        );
                      } else {
                        e.target.setCustomValidity("");
                      }
                    }}
                    required={true}
                  />
                  <i
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isPasswordVisible ? "ri-eye-line" : "ri-eye-off-line"} text-[#3AB7FC] font-normal text-xl cursor-pointer`}
                    onClick={handlePasswordEyeClick}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className=" text-sm flex items-center justify-between">
                  <div>Confirm Password</div>
                  {!isPasswordMatching && (
                    <div className="text-red-400 text-xs">
                      Passwords do not match!
                    </div>
                  )}
                </p>
                <div className="relative">
                  <input
                    className={`h-10 bg-white mb-3.5 sm:rounded-md sm:border border-b focus:outline-none px-[1vw] mt-2 w-full cursor-text ${!isPasswordMatching ? "ring-2 ring-red-400" : ""}`}
                    placeholder=""
                    type={isConfirmPasswordVisible ? "text" : "password"}
                    onPaste={handlePaste}
                    value={registrationFormData.confirmPassword}
                    onChange={(e) =>
                      handleFormInputChange("confirmPassword", e.target.value)
                    }
                    required={true}
                  />
                  <i
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${isConfirmPasswordVisible ? "ri-eye-line" : "ri-eye-off-line"} text-[#3AB7FC] font-normal text-xl cursor-pointer`}
                    onClick={handleConfirmPasswordEyeClick}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <p className="text-sm flex items-center justify-between">
                  <div>Role</div>
                </p>
                <select
                  className="h-10 bg-white mb-3.5 sm:rounded-md sm:border border-b focus:outline-none px-[1vw] mt-2 w-full cursor-pointer"
                  required
                  value={registrationFormData.role}
                  onChange={(e) =>
                    handleFormInputChange("role", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="user">User</option>
                  <option value="driver">Driver</option>
                </select>

                {registrationFormData.role === "driver" && (
                  <div className="mt-4">
                    <p className="text-sm">Vehicle Type</p>
                    <select
                      className="h-10 bg-white mb-3.5 sm:rounded-md sm:border border-b focus:outline-none px-[1vw] mt-2 w-full cursor-pointer"
                      required
                      value={registrationFormData.vehicleType}
                      onChange={(e) =>
                        handleFormInputChange("vehicleType", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Vehicle Type
                      </option>
                      <option value="small sized">Small Sized</option>
                      <option value="medium sized">Medium Sized</option>
                      <option value="large sized">Large Sized</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile View Form */}
            <div className="sm:hidden">
              <input
                placeholder="Name"
                type="text"
                value={registrationFormData.fullName}
                onChange={(e) =>
                  handleFormInputChange("fullName", e.target.value)
                }
                required
                className="rounded-2xl shadow-sm pl-2 p-1 border-b-2 w-full mt-4 focus:outline-none"
              />
              <input
                placeholder="Email"
                type="email"
                required
                value={registrationFormData.email}
                onChange={(e) => handleFormInputChange("email", e.target.value)}
                className={` rounded-2xl shadow-sm pl-2 p-1 border-b-2 w-full mt-4 focus:outline-none`}
              />
              <div className="rounded-2xl shadow-sm pl-2 p-1 border-b-2 w-full mt-4 flex justify-between">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="flex-grow focus:outline-none"
                  minLength={6}
                  required
                  onChange={(e) => {
                    handleFormInputChange("password", e.target.value);
                    if (e.target.value.length < 6) {
                      e.target.setCustomValidity(
                        "Password must be atleast 6 characters."
                      );
                    } else {
                      e.target.setCustomValidity("");
                    }
                  }}
                  value={registrationFormData.password}
                />
                {isPasswordVisible && (
                  <i
                    className="ri-eye-line cursor-pointer text-[#3AB7FC] font-normal text-xl mr-4"
                    onClick={handlePasswordEyeClick}
                  ></i>
                )}
                {!isPasswordVisible && (
                  <i
                    className="ri-eye-off-line cursor-pointer text-[#3AB7FC] font-normal text-xl mr-4"
                    onClick={handlePasswordEyeClick}
                  ></i>
                )}
              </div>
              <div
                className={`rounded-2xl shadow-sm pl-2 p-1 border-b-2 w-full mt-4 flex justify-between ${!isPasswordMatching ? "border-red-400" : ""}`}
              >
                <input
                  type={isConfirmPasswordVisible ? "text" : "password"}
                  placeholder="Confirm your password"
                  className="flex-grow focus:outline-none"
                  required
                  onPaste={handlePaste}
                  value={registrationFormData.confirmPassword}
                  onChange={(e) =>
                    handleFormInputChange("confirmPassword", e.target.value)
                  }
                />
                {isConfirmPasswordVisible && (
                  <i
                    className="ri-eye-line cursor-pointer text-[#3AB7FC] font-normal text-xl mr-4"
                    onClick={handleConfirmPasswordEyeClick}
                  ></i>
                )}
                {!isConfirmPasswordVisible && (
                  <i
                    className="ri-eye-off-line cursor-pointer text-[#3AB7FC] font-normal text-xl mr-4"
                    onClick={handleConfirmPasswordEyeClick}
                  ></i>
                )}
              </div>
              
                <select
                    placeholder="Role"
                  className="rounded-2xl shadow-sm pl-2 p-1 border-b-2 w-full mt-4 focus:outline-none px-5"
                  required
                  value={registrationFormData.role}
                  onChange={(e) =>
                    handleFormInputChange("role", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select Role
                  </option>
                  <option value="user">User</option>
                  <option value="driver">Driver</option>
                </select>

                {registrationFormData.role === "driver" && (
                  
                    
                    <select
                        placeholder="Vehicle Type"
                      className="rounded-2xl shadow-sm pl-2 p-1 border-b-2 w-full mt-4 focus:outline-none px-5"
                      required
                      value={registrationFormData.vehicleType}
                      onChange={(e) =>
                        handleFormInputChange("vehicleType", e.target.value)
                      }
                    >
                      <option value="" disabled>
                        Select Vehicle Type
                      </option>
                      <option value="small sized">Small Sized</option>
                      <option value="medium sized">Medium Sized</option>
                      <option value="large sized">Large Sized</option>
                    </select>
                  
                )}
              
            </div>

            <div className="pt-2">
              {!isPasswordMatching && (
                <div className="pt-1 w-full sm:hidden">
                  <div className="text-red-400 text-xs w-full text-center">
                    Passwords do not match!
                  </div>
                </div>
              )}
            </div>
    
            <input
              type="checkbox"
              id="rememberMe"
              className="ml-3 sm:mt-8 mt-12 cursor-pointer"
            />
            <label htmlFor="rememberMe" className="ml-3">
              Remember me
            </label>
            <br />
            <div className="flex justify-between">
              <div>
                <input
                  type="checkbox"
                  id="termsAndConditions"
                  className="mt-3 ml-3 cursor-pointer"
                />
                <label htmlFor="termsAndConditions" className="ml-3">
                  I agree to all the{" "}
                  <span
                    className="text-[#3AB7FC] cursor-pointer"
                    onClick={() => navigate(Routes.termsAndConditions)}
                  >
                    Terms
                  </span>{" "}
                  and{" "}
                  <span
                    className="text-[#3AB7FC] cursor-pointer"
                    onClick={() => navigate(Routes.privacyPolicy)}
                  >
                    Privacy Policy
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="sm:px-20 px-10 flex justify-center text-center items-center mt-8">
            <button
              type="submit"
              className="bg-[#3AB7FC] p-2 sm:rounded text-white w-full rounded-full sm:font-semibold font-semibold disabled:opacity-20 "
            >
              Create account
            </button>
            
          </div>
        </form>

        <div className="text-center sm:mt-8 mt-6">
          <p>
            Already have an account?{" "}
            <span
              className="text-[#3AB7FC] cursor-pointer"
              onClick={handleLoginClick}
            >
              Login
            </span>
          </p>
        </div>
      </div>
      {isRegisterSuccess && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed h-[100vh] w-[100vw] top-0 left-0 backdrop-blur-md flex items-center justify-center z-[999999999999]"
        >
          <div className="gap-2 bg-orange-200 p-2 px-4 rounded-lg shadow-2xl h-[250px] w-[90%] md:w-[520px] flex flex-col items-center justify-center">
            <img
              src="/assets/images/tick-mark.png"
              className="bg-white rounded-xl"
            />
            <p className="text-xl font-semibold">Successfully registered</p>
            <p>Redirecting to login in {countdown} seconds...</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default SignUp;
