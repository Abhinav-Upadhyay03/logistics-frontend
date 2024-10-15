import React, { useEffect, useState } from 'react';
import JobCard from '../../components/driver/Card';
import axios from 'axios';

const DriverPage = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [availableJobs, setAvailableJobs] = useState([]);
  const [ongoingJobs, setOngoingJobs] = useState([]);
  const [flag, setFlag] = useState(0)

  useEffect(() => {
    // Fetch the user from localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setName(user.fullName);
      setId(user._id);
    }

    // Fetch available jobs for the driver
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`/api/bookings?driverId=${user._id}`);
        setAvailableJobs(response.data.bookings); 
        // console.log(response.data.bookings);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []); 

  // Handle job acceptance
  const handleAcceptJob = (jobID) => {
    const acceptedJob = availableJobs.find((job) => job._id === jobID);
    setOngoingJobs([...ongoingJobs, { ...acceptedJob, status: 'On the way' }]);
    setAvailableJobs(availableJobs.filter((job) => job._id !== jobID));
  };

  // Handle job decline
  const handleDeclineJob = (jobID) => {
    setAvailableJobs(availableJobs.filter((job) => job._id !== jobID));
  };

  // Handle status change
  const handleStatusChange = (jobID, newStatus) => {
    const updatedJobs = ongoingJobs.map((job) =>
      job._id === jobID ? { ...job, status: newStatus } : job
    );
    setOngoingJobs(updatedJobs);

    if (newStatus === 'Delivered') {
      setOngoingJobs(ongoingJobs.filter((job) => job._id !== jobID));
    }
  };

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    alert("Location updated successfully");
  }

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setFlag(flag+1)
    console.log("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
  }
  
  useEffect(() => {
  if (id && flag>0) {
    axios.put(`/api/driver?driverId=${id}`, { latitude, longitude })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error updating location:', error);
      });
  }
}, [id, flag]); 
  

  return (
    <div className='m-14'>
    <div className='flex justify-between'>
      <p className='text-3xl'>Hello {name},</p>
      <button onClick={getLocation} className='bg-blue-500 text-white px-5 rounded-xl font-medium'>Update My Location</button>
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
                key={job._id} // Use _id as the key
                jobID={job._id} // Pass _id as jobID
                pickupLocation={job.pickupLocation}
                dropOffLocation={job.dropOffLocation}
                status={job.status}
                onUpdateStatus={(newStatus) => handleStatusChange(job._id, newStatus)}
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
                key={job._id} // Use _id as the key
                jobID={job._id} // Pass _id as jobID
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
