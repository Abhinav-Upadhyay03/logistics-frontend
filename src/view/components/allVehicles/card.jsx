import React, { useState } from 'react';
import Modal from './Modal';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';


const VehicleCard = ({ id, vehicleSize, name, distance, pickupLocation, dropOffLocation, userId, driverId }) => {
  const navigate = useNavigate(); 
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmModal = async () => {
    try {
      // Calculate the trip price
      const price = calculateTripPrice(distance, vehicleSize);

      // Prepare booking data
      const bookingData = {
        userId,           
        driverId,         
        pickupLocation,   
        dropOffLocation,  
        vehicleType: vehicleSize,      
        price,            
      };
      // Send POST request to the backend
      const response = await axios.post('/api/booking', bookingData);
      console.log(response.data);
      
      if (response.data.success) {
        alert('Booking confirmed!');

        navigate('/userBooking', {
        state: {
          vehicleType: vehicleSize,
          driverName: name,       
          price,
          distance,
          status: response.data.bookingStatus || 'On the way to pickup', 
          pickupLocation, 
          dropOffLocation
        }
      });
      } else {
        alert('Error confirming the booking. Please try again.');
      }

    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Server error. Please try again later.');
    } finally {
      setIsModalOpen(false);
    }

  };

  const calculateTripPrice = (distance, vehicleSize) => {
    const rates = {
      'small sized': 1.5,
      'medium sized': 2.0,
      'large sized': 2.5,
    };
    const ratePerKm = rates[vehicleSize];
    if (ratePerKm === undefined) {
      throw new Error('Invalid vehicle size');
    }

    let totalPrice = distance * ratePerKm;
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
          distance={distance}
          calculateTripPrice={calculateTripPrice}
          onConfirm={handleConfirmModal}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default VehicleCard;
