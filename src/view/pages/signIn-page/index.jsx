import React from 'react'
import FullScreenLoader from '../../components/common/full-screen-loader'
import style from "./style.module.css";
import SignInViewModel from '../../view-models/signIn-view-model';
import LogoMain from "../../../assets/LogoMain.png";

const SignIn = () => {
    const {
        isLoading,
    handleSignUpClick,
    userLoginFormData,
    handleInputChange,
    handleUserLogin,
    errorText,
    isPasswordVisible,
    handlePasswordEyeClick
    } = SignInViewModel();
  return (
    <div className="sm:flex w-full">
                  {isLoading ? <FullScreenLoader/> : (
                <>
                    <div className="sm:block hidden bg-[#28a99e] w-[40%] h-svh"></div>
                    <div className="bg-white sm:w-[60%] w-full h-svh ">
                        <div className="w-full sm:h-[15%] h-[10%] sm:bg-white bg-[#28a99e]">
                            <div className="w-full h-[35%]"></div>
                            <div className="flex justify-center w-full h-[50%]">
                               <img
                                    className="" 
                                    src={LogoMain}
                                    alt="link"
/>

                            </div>
                        </div>
                        <form onSubmit={handleUserLogin}>
                            <div className="p-10 sm:px-20">
                                <h1 className="text-center sm:text-left text-4xl font-normal">
                                    Sign In
                                </h1>
                                <h2 className="sm:hidden text-center text-md font-normal mt-10">
                                    Enter your login ID and password
                                </h2>
                                <div className="sm:mt-10 mt-20 ">
                                    <div className='w-full relative'>
                                        <p className="sm:flex hidden text-left items-center">
                                            Login ID
                                        </p>
                                        <input
                                            className={`${style.loginInputEmail} mt-2 cursor-text w-full ${errorText === 'Invalid identifier or password' && 'border-red-400'}`}
                                            placeholder="Email ID"
                                            type="text"
                                            value={userLoginFormData.user}
                                            onChange={(e) => handleInputChange('user',e.target.value)}
                                            required
                                        />
                                        <div className='absolute top-[20px] right-2'>
                                            <div className='relative group ml-2 sm:hidden'>
                                                <div className='flex items-center justify-center h-4 w-4 text-[10px] rounded-full bg-gray-300 cursor-pointer'>
                                                    i
                                                </div>
                                                <div
                                                    className='hidden w-max group-hover:block absolute top-0 right-5 bg-white z-[99] border border-gray-300 p-2 rounded shadow-md max-w-[50vw] whitespace-normal break-words'
                                                >
                                                    User ID will be the email ID.
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <p className="sm:block hidden">Password</p>
                                        <div className={`relative sm:border-none border-b flex items-baseline justify-between w-full ${errorText === 'Invalid identifier or password' && 'border-red-400'}`}>
                                            <input
                                                className={`${style.loginInputPassword} mt-2 cursor-text`}
                                                placeholder="Password"
                                                value={userLoginFormData.password}
                                                onChange={(e) => handleInputChange('password',e.target.value)}
                                                type={isPasswordVisible ? 'text' : 'password'}
                                                required
                                            />
                                            <p className="text-[#3AB7FC] cursor-pointer text-sm absolute right-2 top-[14px]">
                                                <i
                                                    className={` ${isPasswordVisible ? 'ri-eye-line' : 'ri-eye-off-line'} text-[#3AB7FC] font-normal text-xl cursor-pointer`}
                                                    onClick={handlePasswordEyeClick}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center py-6 text-xs font-semibold text-red-400'>{errorText === 'Invalid identifier or password' ? 'Invalid Credentials' : errorText}</div>
                            </div>
                            <div className="sm:px-20 px-10 flex justify-between">
                                <button 
                                    type='submit'
                                    className="bg-[#3AB7FC] p-2 sm:rounded text-white  w-full rounded-full sm:font-normal font-semibold"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        <div className="text-center sm:mt-20">
                            <p className="text-[#3AB7FC] cursor-pointer pt-6 sm:pt-0" onClick={() => navigate(Routes.forgotPassword)}>
                                Forgot password?
                            </p>
                            <br />
                            <p>
                                Don't have an account?{' '}
                                <span className="text-[#3AB7FC] cursor-pointer" onClick={handleSignUpClick}>
                                    Sign Up
                                </span>
                            </p>
                        </div>
                    </div>
                </>
            )}
            
        </div>
    
  )
}

export default SignIn
