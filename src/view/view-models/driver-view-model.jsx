import { useEffect, useState } from 'react';
import axios from 'axios';

const DriverViewModel = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [availableJobs, setAvailableJobs] = useState([]);
  const [ongoingJobs, setOngoingJobs] = useState([]);
  const [flag, setFlag] = useState(0);
  const [user, setUser] = useState({});
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    // Fetch the user from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
      setName(user.fullName);
      setId(user._id);
      setUser(user);
    }

    // Fetch available jobs for the driver
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`/api/bookings?driverId=${user._id}`);
        setAvailableJobs(response.data.bookings);
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

    axios.put(`/api/drivers?driverId=${id}`, { available: false })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error updating vehicle availability:', error);
      });
  };

  // Handle job decline
  const handleDeclineJob = (jobID) => {
    setAvailableJobs(availableJobs.filter((job) => job._id !== jobID));
    axios.put(`/api/booking?bookingId=${jobID}`, { status: 'Cancelled' })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error updating job status:', error);
      });
  };

  // Handle status change
  const handleStatusChange = (jobID, newStatus) => {
    const updatedJobs = ongoingJobs.map((job) =>
      job._id === jobID ? { ...job, status: newStatus } : job
    );
    setOngoingJobs(updatedJobs);

    if (newStatus === 'Delivered') {
      setOngoingJobs(ongoingJobs.filter((job) => job._id !== jobID));
      axios.put(`/api/drivers?driverId=${id}`, { available: true })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error updating vehicle availability:', error);
        });
    }

    axios.put(`/api/booking?bookingId=${jobID}`, { status: newStatus })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error updating job status:', error);
      });
  };

  // Get driver location
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
    alert('Location updated successfully');
  };

  const showPosition = (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setFlag(flag + 1);
    console.log(
      'Latitude: ' + position.coords.latitude + ' Longitude: ' + position.coords.longitude
    );
  };

  useEffect(() => {
    if (id && flag > 0) {
      axios.put(`/api/driver?driverId=${id}`, { latitude, longitude })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error updating location:', error);
        });
    }
  }, [id, flag]);

  return {
    name,
    ongoingJobs,
    availableJobs,
    handleAcceptJob,
    handleDeclineJob,
    handleStatusChange,
    getLocation
  };
};

export default DriverViewModel;
