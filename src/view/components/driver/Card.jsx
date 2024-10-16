const JobCard = ({ jobID, pickupLocation, dropOffLocation, status, onUpdateStatus, onAccept, onDecline }) => {
  return (
    <div className="flex justify-between items-center bg-white shadow-lg rounded-lg p-6 mb-6 max-w-5xl mx-auto">
      {/* Job Details Section */}
      <div className="w-3/4">
        <h2 className="text-xl font-bold mb-4">Job Details</h2>
        <div className="flex gap-3 mb-2">
          <p className="font-medium text-base">Job ID:</p>
          <p className="text-base">{jobID}</p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="font-medium text-base">Pickup Location:</p>
            <p className="text-base">{pickupLocation}</p>
          </div>
          <div>
            <p className="font-medium text-base">Dropoff Location:</p>
            <p className="text-base">{dropOffLocation}</p>
          </div>
        </div>
      </div>
      
      {/* Status Update / Accept-Decline Section */}
      <div className="w-auto flex flex-col items-center">
        {status ? (
          <>
            <p className="text-base font-medium mb-4 w-full">Status: {status}</p>
            {status !== 'Delivered' && (
              <select
                className="bg-gray-100 p-2 rounded-md me-5 text-base"
                value={status}
                onChange={(e) => onUpdateStatus(e.target.value)}
              >
                <option value="On the way to pickup">On the way to pickup</option>
                <option value="Goods Collected">Goods Collected</option>
                <option value="Delivered">Delivered</option>
              </select>
            )}
          </>
        ) : (
          <>
            <button
              className="bg-green-500 text-white py-2 px-6 rounded-lg mb-3 w-full hover:bg-green-600"
              onClick={onAccept}
            >
              Accept
            </button>
            <button
              className="bg-red-500 text-white py-2 px-6 rounded-lg w-full hover:bg-red-600"
              onClick={onDecline}
            >
              Decline
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default JobCard;
