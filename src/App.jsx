import axios from 'axios';

import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';

function App() {
   const navigate = useNavigate(); // Initialize useNavigate

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to the login page
  };

  const handleSignUpClick = () => {
    navigate('/signup'); // Navigate to the signup page
  };
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get('/api/abhi')
    .then((response) => {
      setNames(response.data);
    })
    .catch((error) => {
      console.log(`Error: ${ error }`);
    });
  }, []);

  return (
    <div className='flex flex-col justify-center items-center w-full h-screen bg-[#28a99e] text-white'>
      <div className="absolute top-4 right-4">
        <button 
          className="bg-white text-[#28a99e] px-4 py-2 rounded mr-2"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button 
          className="bg-white text-[#28a99e] px-4 py-2 rounded"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>
      </div>
      <h1 className='sm:text-8xl text-6xl font-bold'>PackNGo</h1>
      {/* <p>{names.length}</p>
      {names.map((name) => (
        <div key={name.id}>
          <h3 className='text-xl'>{name.name}</h3>
        </div>
      ))} */}
    </div>
  );
}

export default App;
