import React from 'react';

const VehicleCard = ({ id, vehicleSize }) => {
  return (
    <div className='w-full max-w-xs h-[100px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center transition-transform duration-300 hover:scale-105'>
      <p className='text-3xl font-bold text-gray-800'>{id+1}</p>
      <p className='text-xl text-gray-600'>{vehicleSize}</p>
    </div>
  );
};

export default VehicleCard;
