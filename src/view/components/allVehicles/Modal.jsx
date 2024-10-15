import React from 'react';

const Modal = ({ vehicleSize, driverName, distance, onConfirm, onClose, calculateTripPrice }) => {
  const price = calculateTripPrice(distance, vehicleSize); // Calculate price using distance and vehicleSize

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Booking Details</h2>
        <div className="mb-4">
          <p><strong>Driver Name:</strong> {driverName}</p>
          <p><strong>Vehicle Type:</strong> {vehicleSize}</p>
          <p><strong>Distance:</strong> {distance.toFixed(2)} km</p>
          <p><strong>Price:</strong> ${price.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
            onClick={onConfirm}
          >
            Confirm Booking
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
