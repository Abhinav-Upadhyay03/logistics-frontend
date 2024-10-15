import React from "react";

const JobCard = ({ jobID, pickupLocation, dropOffLocation }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-6 mb-6 max-w-5xl mx-auto">
      {/* Job Details Section */}
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-4">Job Details</h2>
        <div className="flex gap-3 mb-2">
          <p className="font-semibold">Job ID:</p>
          <p>{jobID}</p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="font-semibold">Pickup Location:</p>
            <p>{pickupLocation}</p>
          </div>
          <div>
            <p className="font-semibold">Dropoff Location:</p>
            <p>{dropOffLocation}</p>
          </div>
        </div>
      </div>
      
      {/* Action Buttons */}
      <div className="w-1/4 flex flex-col items-center">
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-3 w-full hover:bg-green-600">
          Accept
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg w-full hover:bg-red-600">
          Decline
        </button>
      </div>
    </div>
  );
};

export default JobCard;
