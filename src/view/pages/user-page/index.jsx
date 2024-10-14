import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const UserPage = () => {
  const navigate = useNavigate();
  const [pickup, setPickup] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropOffSuggestions, setDropOffSuggestions] = useState([]);
  const [pickupCoords, setPickupCoords] = useState(null);
  const [dropOffCoords, setDropOffCoords] = useState(null);

  const fetchPickupSuggestions = async (input) => {
    if (input.length < 3) return;
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=5`
    );
    setPickupSuggestions(response.data);
  };

  const fetchDropOffSuggestions = async (input) => {
    if (input.length < 3) return;
    const response = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${input}&format=json&addressdetails=1&limit=5`
    );
    setDropOffSuggestions(response.data);
  };

  const handlePickupSelect = (suggestion) => {
    setPickup(suggestion.display_name);
    setPickupSuggestions([]);
    setPickupCoords([parseFloat(suggestion.lat), parseFloat(suggestion.lon)]);
  };

  const handleDropOffSelect = (suggestion) => {
    setDropOff(suggestion.display_name);
    setDropOffSuggestions([]);
    setDropOffCoords([parseFloat(suggestion.lat), parseFloat(suggestion.lon)]);
  };

  // Calculate the center of the map based on pickup and drop-off coordinates
  const getMapCenter = () => {
    if (!pickupCoords || !dropOffCoords) return null;
    const lat = (pickupCoords[0] + dropOffCoords[0]) / 2;
    const lon = (pickupCoords[1] + dropOffCoords[1]) / 2;
    return [lat, lon];
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[#28a99e] text-white'>
      <p className='text-3xl mb-5'>Hello User</p>
      {/* Pickup Location */}
      <div className='w-1/2 mb-4'>
        <p>Pickup Location</p>
        <input
          type='text'
          value={pickup}
          onChange={(e) => {
            setPickup(e.target.value);
            fetchPickupSuggestions(e.target.value);
          }}
          className='w-full p-2 text-black'
        />
        <ul className='bg-white text-black'>
          {pickupSuggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className='cursor-pointer p-2 hover:bg-gray-200'
              onClick={() => handlePickupSelect(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      </div>

      {/* DropOff Location */}
      <div className='w-1/2 mb-4'>
        <p>DropOff Location</p>
        <input
          type='text'
          value={dropOff}
          onChange={(e) => {
            setDropOff(e.target.value);
            fetchDropOffSuggestions(e.target.value);
          }}
          className='w-full p-2 text-black'
        />
        <ul className='bg-white text-black'>
          {dropOffSuggestions.map((suggestion) => (
            <li
              key={suggestion.place_id}
              className='cursor-pointer p-2 hover:bg-gray-200'
              onClick={() => handleDropOffSelect(suggestion)}
            >
              {suggestion.display_name}
            </li>
          ))}
        </ul>
      </div>

      {/* Map Display */}
      {(pickupCoords && dropOffCoords) && (
        <MapContainer center={getMapCenter()} zoom={10} className="w-1/2 h-1/2 mb-4">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={pickupCoords}>
            <Popup>Pickup: {pickup}</Popup>
          </Marker>
          <Marker position={dropOffCoords}>
            <Popup>Drop Off: {dropOff}</Popup>
          </Marker>
        </MapContainer>
      )}

      {/* Book Now Button */}
      <button
        className={`px-4 py-2 rounded transition-colors ${(!pickup || !dropOff) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-white text-[#28a99e]'}`}
        disabled={!pickup || !dropOff}
        onClick={() => navigate('/allVehicles')}
      >
        Book Now
      </button>
    </div>
  );
};

export default UserPage;
