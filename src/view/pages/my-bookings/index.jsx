import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MyBookings = () => {
  const location = useLocation();
  const { bookings } = location.state || { bookings: [] };
  const navigate = useNavigate();

  const viewDetailsClicked = (booking) => {
    navigate("/userBooking", {
      state: {
        vehicleType: booking.vehicleType,
        price: booking.price,
        status: booking.status,
        pickupLocation: booking.pickupLocation,
        dropOffLocation: booking.dropOffLocation,
        driverId: booking.driverId,
      },
    });
  };

  return (
    <div className="mx-5">
      <h1 className="text-center text-2xl font-medium mt-10">My Bookings</h1>
      {bookings.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-5">
          {bookings.map((booking, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 text-black"
            >
              <h3 className="text-xl font-semibold mb-2">
                Booking ID: {booking._id}
              </h3>
              <p className="text-sm mb-2">
                <strong>Pickup:</strong> {booking.pickupLocation}
              </p>
              <p className="text-sm mb-2">
                <strong>DropOff:</strong> {booking.dropOffLocation}
              </p>
              <p className="text-sm mb-2">
                <strong>Status:</strong> {booking.status}
              </p>
              <div className="flex justify-end flex-1">
                <button
                  className="mt-4 px-4 py-2 bg-[#28a99e] text-white rounded-md hover:bg-[#227c76] transition-colors"
                  onClick={() => viewDetailsClicked(booking)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default MyBookings;
