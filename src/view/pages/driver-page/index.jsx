import React from 'react';
import JobCard from '../../components/driver/Card';
import DriverViewModel from '../../view-models/driver-view-model.jsx';

const DriverPage = () => {
  const {
    name,
    ongoingJobs,
    availableJobs,
    handleAcceptJob,
    handleDeclineJob,
    handleStatusChange,
    getLocation
  } = DriverViewModel(); 

  return (
    <div className='m-14'>
      <div className='flex justify-between'>
        <p className='text-3xl'>Hello {name},</p>
        <button
          onClick={getLocation}
          className='bg-blue-500 text-white px-5 rounded-xl font-medium'>
          Update My Location
        </button>
      </div>

      <div className='flex h-screen'>
        {/* Ongoing Jobs Section */}
        <div className='text-xl px-10 pt-5 w-1/2'>
          <p className='mb-5'>Ongoing Jobs</p>
          {ongoingJobs.length === 0 ? (
            <p className='text-gray-500 mt-4'>No ongoing jobs</p>
          ) : (
            ongoingJobs.map((job) => (
              <JobCard
                key={job._id} 
                jobID={job._id} 
                pickupLocation={job.pickupLocation}
                dropOffLocation={job.dropOffLocation}
                status={job.status}
                onUpdateStatus={(newStatus) =>
                  handleStatusChange(job._id, newStatus)
                }
              />
            ))
          )}
        </div>

        {/* Available Jobs Section */}
        <div className='text-xl px-10 pt-5 w-1/2'>
          <p className='mb-5'>Here are a few jobs for you:</p>
          {availableJobs.length === 0 ? (
            <p className='text-gray-500'>No available jobs</p>
          ) : (
            availableJobs.map((job) => (
              <JobCard
                key={job._id} 
                jobID={job._id} 
                pickupLocation={job.pickupLocation}
                dropOffLocation={job.dropOffLocation}
                onAccept={() => handleAcceptJob(job._id)}
                onDecline={() => handleDeclineJob(job._id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DriverPage;
