import React from 'react';
import { useLocation } from 'react-router-dom';

const UserBooking = () => {
  // Access the state passed from the previous page
  const location = useLocation();
  const { vehicleType, driverName, price, distance, status, pickupLocation, 
          dropOffLocation } = location.state || {};

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-5">Booking Details</h1>

      {/* Display the booking details */}
      <div className="grid gap-4 max-w-lg border border-gray-200 rounded-lg shadow-lg p-5 bg-white">
        <div>
          <p className="font-medium">Vehicle Type:</p>
          <p className="text-gray-700">{vehicleType || 'N/A'}</p>
        </div>
        <div>
          <p className="font-medium">Driver Name:</p>
          <p className="text-gray-700">{driverName || 'Unknown'}</p>
        </div>
        <div>
          <p className="font-medium">Price:</p>
          <p className="text-gray-700">${price?.toFixed(2) || 'N/A'}</p>
        </div>
        <div>
          <p className="font-medium">Distance:</p>
          <p className="text-gray-700">{distance?.toFixed(2)} km</p>
        </div>
        <div>
          <p className="font-medium">Status:</p>
          <p className="text-gray-700">{status || 'Pending'}</p>
        </div>
        <div>
          <p className="font-medium">Pickup Location:</p>
          <p className="text-gray-700">{pickupLocation}</p>
        </div>
        <div>
          <p className="font-medium">Drop Off Location:</p>
          <p className="text-gray-700">{dropOffLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default UserBooking;
