import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react'; 

function App() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get('/api/abhi')
    .then((response) => {
      setNames(response.data);
    })
    .catch((error) => {
      console.log({ error });
    });
  }, []);

  return (
    <>
      <h1>Testing</h1>
      <p>{names.length}</p>
      {names.map((name, index) => (
        <div key={name.id}>
          <h3>{name.name}</h3>
        </div>
      ))}
    </>
  );
}

export default App;
