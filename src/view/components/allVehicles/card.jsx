import React, { useState } from 'react';
import Modal from './Modal';

const VehicleCard = ({ id, vehicleSize, name, distance }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(vehicleSize);
  console.log(distance);
  
  
  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = () => {
    setIsModalOpen(false);
    alert('Booking confirmed!');
  };

  const calculateTripPrice = (distance, vehicleSize) => {
    // Define base rates per kilometer for each vehicle size
    const rates = {
      'small sized': 1.5,
      'medium sized': 2.0,
      'large sized': 2.5,
    };
    const ratePerKm = rates[vehicleSize];
    // Check if the vehicle size is valid
    if (ratePerKm === undefined) {
      throw new Error('Invalid vehicle size');
    }
    
    let totalPrice = distance * ratePerKm;
    // Add booking fee
    const bookingFee = 5.0;
    totalPrice += bookingFee;

    return totalPrice;
  };

  return (
    <div>
      <div
        className='w-full max-w-xs h-[100px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105 justify-center bg-[#D6C0B3] cursor-pointer'
        onClick={handleCardClick}
      >
        <p className='text-2xl font-medium text-gray-600'>{id + 1}. {name}</p>
        <p className='text-xl font-medium text-gray-600'>{vehicleSize}</p>
      </div>

      {/* Render the Modal if it's open */}
      {isModalOpen && (
        <Modal
          vehicleSize={vehicleSize}
          driverName={name}
          distance={distance} // Pass distance to modal
          calculateTripPrice={calculateTripPrice}
          onConfirm={handleConfirmModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default VehicleCard;
