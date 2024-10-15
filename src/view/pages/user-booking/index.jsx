import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const UserBooking = () => {
  // Access the state passed from the previous page
  const location = useLocation();
  const {
    vehicleType,
    driverName,
    price,
    distance,
    status,
    pickupLocation,
    dropOffLocation,
    driverId,
  } = location.state || {};
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const getLatLngFromDriverId = async (driverId) => {
    try {
      const response = await axios.get(`/api/driver?driverId=${driverId}`);
      console.log(
        response.data.driver.latitude,
        response.data.driver.longitude
      );
      setLatitude(response.data.driver.latitude);
      setLongitude(response.data.driver.longitude);
    } catch (error) {
      console.error("Error fetching driver location:", error);
      return null;
    }
  };
  getLatLngFromDriverId(driverId);

  return (
    <div className="p-5">
      <h1 className="text-3xl font-semibold mb-5">Booking Details</h1>
      <div className="flex flex-between gap-20">
        {/* Display the booking details */}
        <div className="grid gap-4 max-w-lg border border-gray-200 rounded-lg shadow-lg p-5 bg-white w-1/2">
          <div>
            <p className="font-medium">Driver Id:</p>
            <p className="text-gray-700">{driverId || "N/A"}</p>
          </div>
          <div>
            <p className="font-medium">Driver Name:</p>
            <p className="text-gray-700">{driverName || "Unknown"}</p>
          </div>
          <div>
            <p className="font-medium">Vehicle Type:</p>
            <p className="text-gray-700">{vehicleType || "N/A"}</p>
          </div>

          <div>
            <p className="font-medium">Price:</p>
            <p className="text-gray-700">${price?.toFixed(2) || "N/A"}</p>
          </div>
          <div>
            <p className="font-medium">Distance:</p>
            <p className="text-gray-700">{distance?.toFixed(2)} km</p>
          </div>
          <div>
            <p className="font-medium">Status:</p>
            <p className="text-gray-700">{status || "Pending"}</p>
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

        {/* Display the driver's location on a map */}
        <div className="w-1/2">
        { latitude && longitude && (
            <MapContainer
            center={[latitude, longitude]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-[400px] w-[100%]"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
            />
            <Marker position={[latitude, longitude]}>
              <Popup>Driver's Location</Popup>
            </Marker>
          </MapContainer>
        )}
          
        </div>
      </div>
    </div>
  );
};

export default UserBooking;
