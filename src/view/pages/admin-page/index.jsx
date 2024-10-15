import axios from "axios";
import React, { useEffect, useState } from "react";
import TripData from "../../components/admin/tripData";
import IncomeChart from "../../components/admin/incomeData";

const AdminPage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [tripsCompleted, setTripsCompleted] = useState();
  const [ongoingTrips, setOngoingTrips] = useState();
  const [cancelledTrips, setCancelledTrips] = useState();
  const [netIncome, setNetIncome] = useState();
  const [avgIncomePerTrip, setAvgIncomePerTrip] = useState();
  const [incomeFromOngoingTrips, setIncomeFromOngoingTrips] = useState();


  const getAllVehicles = async () => {
    try {
      const response = await axios.get("/api/drivers");
      console.log(response.data);

      setVehicles(response.data.drivers);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getAllBookings = async () => {
    try {
      const response = await axios.get("/api/allBookings");
      console.log(response.data);
      setTripsCompleted(response.data.bookings.filter((booking) => booking.status === "Delivered").length);
      setCancelledTrips(response.data.bookings.filter((booking) => booking.status === "Cancelled").length);
      setOngoingTrips(response.data.bookings.filter((booking) => booking.status === "On the way to pickup" || booking.status === "Goods Collected").length);
      setNetIncome(response.data.bookings.filter((booking) => booking.status === 'Delivered') .reduce((acc, booking) => acc + booking.price, 0));
      setIncomeFromOngoingTrips(response.data.bookings.filter((booking) => booking.status === 'On the way to pickup' || booking.status === 'Goods Collected').reduce((acc, booking) => acc + booking.price, 0));
      setAvgIncomePerTrip(response.data.bookings.reduce((acc, booking) => acc + booking.price, 0) / response.data.bookings.length);


    } catch (err) {
      console.log(err.message);
    }
  }



  useEffect(() => {
    getAllVehicles();
    getAllBookings();
  }, []);
  return (
    <div className="">
      <p className="text-center text-4xl mt-7 font-semibold">
        Admin Dashboard
      </p>
      <div className="flex justify-between">
        <div className="h-screen w-1/2 ">
          <TripData tripsCompleted={tripsCompleted} ongoingTrips={ongoingTrips} cancelledTrips={cancelledTrips} />
          <IncomeChart netIncome={netIncome} incomeFromOngoingTrips={incomeFromOngoingTrips} avgIncomePerTrip={avgIncomePerTrip} /> 
        </div>
        <div className="h-screen w-1/2 text-center ">
          <p className="text-center text-2xl pt-4 font-base">
            Available vehicles
          </p>
          <div className="p-10 max-h-[80%] overflow-y-scroll border border-gray-300 rounded-lg mx-10 mt-5">
            <div className="flex flex-col gap-6">
              {vehicles.map((vehicle, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg shadow-lg p-4 w-full flex flex-col sm:flex-row items-center justify-between"
                >
                  <p><span className="font-medium">Name:</span> {vehicle.fullName || "Unknown Driver"}</p>
                  <p><span className="font-medium">Vehicle Type:</span> {vehicle.vehicleType}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
