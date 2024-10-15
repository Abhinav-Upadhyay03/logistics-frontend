import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VehiclesViewModel = () => {
  const [vehicles, setVehicles] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  const getAllVehicles = async () => {
    try {
      const response = await axios.get('/api/drivers');
      console.log(response.data);
        
      setVehicles(response.data);
    } catch (err) {
      setError(err.message); 
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllVehicles(); 
  }, []);

  return { vehicles, isLoading, error }; 
};

export default VehiclesViewModel;
