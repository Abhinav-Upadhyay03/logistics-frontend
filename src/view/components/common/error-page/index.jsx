// ErrorPage.jsx
import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import ErrorPage1 from "../../../../assets/icons/ErrorPage1 copy.jpg"

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
      <div role="alert">
          <div className="flex flex-col items-center sm:justify-center justify-evenly sm:gap-8 sm:max-h-[100vh] h-[100vh] overflow-hidden">
              <img
                  src={ErrorPage1}
                  className="max-h-[60vh]"
                  alt="error"
              />
              <div className='flex flex-col gap-8 justify-center text-center'>
                  <h1 className="sm:text-6xl sm:font-bold text-4xl font-normal">
                      Oops!
                  </h1>
                  <div className="flex flex-col items-center justify-center gap-2">
                      <div className="font-bold text-slate-700 text-lg">
                          Something went wrong
                      </div>
                      <div className="font-bold text-slate-700 text-lg">
                          Please try again
                      </div>
                  </div>
                  <div
                      className="bg-[#FFB721] text-white rounded-full p-4"
                      onClick={handleBackClick}>
                      TRY AGAIN
                  </div>
              </div>
          </div>
      </div>
  );
};

export default ErrorPage;
