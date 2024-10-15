import React from 'react';
import { useLocation } from 'react-router-dom';
import VehiclesViewModel from '../../view-models/vehicles-view-model.jsx';
import VehicleCard from '../../components/allVehicles/card.jsx';

const AllVehicles = () => {
    const location = useLocation();
  const { pickup, dropOff, distance } = location.state || {};
  const { vehicles, isLoading, error } = VehiclesViewModel();

  if (isLoading) return <p>Loading vehicles...</p>;
  if (error) return <p>Error fetching vehicles: {error}</p>;

  return (
    <div className='p-5 w-full h-screen '>
    <h1 className='text-5xl text-black p-10 text-center mb-10'>Select a vehicle</h1>
      {pickup && dropOff && distance && (
        <>
        <div className='flex justify-between px-20'>
        <div className='text-center'>
             <p className='font-semibold'>Pickup Location: </p>
          <p className='max-w-sm h-[40px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center '>{pickup}</p>
        </div>
           <div className=''>
             <p className='font-semibold'>Total Distance: </p>
            <p className='max-w-[1800px] h-[40px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center text-center'>{distance.toFixed(2)}</p>
        </div>
         <div className='text-center'>
             <p className='font-semibold'>Drop Off Location: </p>
          <p className='max-w-sm h-[40px] border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-center justify-center '>{dropOff}</p>
        </div>
          
        </div>
        
        </>
      )}
    <div className="flex flex-wrap justify-center gap-4 mt-10">
    
      {vehicles.map((vehicle, index) => (
  <VehicleCard 
    key={index} 
    id={index} 
    vehicleSize={vehicle.vehicleType} 
    name={vehicle.driver?.fullName || 'Unknown Driver'}  // Safely access driver's name
    distance={distance}
  />
))}

    </div>
    </div>
  );
};

export default AllVehicles;
