import React from 'react';
import VehiclesViewModel from '../../view-models/vehicles-view-model.jsx';
import VehicleCard from '../../components/allVehicles/card.jsx';

const AllVehicles = () => {
  const { vehicles, isLoading, error } = VehiclesViewModel();

  if (isLoading) return <p>Loading vehicles...</p>;
  if (error) return <p>Error fetching vehicles: {error}</p>;

  return (
    <div className="flex flex-wrap justify-center gap-4 p-5 w-full h-screen bg-[#28a99e]">
      {vehicles.map((vehicle,index) => (
        <VehicleCard key={index} id= {index} vehicleSize={vehicle.vehicleType} />
      ))}
    </div>
  );
};

export default AllVehicles;
