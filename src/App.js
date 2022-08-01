import './App.css';
import Navbar from './containers/Navbar/Navbar';
import TripForm from './containers/TripForm/TripForm';
import Trips from "./containers/Trips/Trips";
import { getTrips } from './api/TripsAPI';

import { useState, useEffect } from 'react';

function App() {
  
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const getTripsFromAPI = async () => {
      console.log("Fetching trips");

      const serverTrips = await getTrips();
      setTrips(serverTrips);
    }

    getTripsFromAPI();
  }, []); 

  return (
    <div className="App">
      <Navbar />
      <TripForm trips={trips} setTrips={setTrips}/>
      <Trips trips={trips}/>
    </div>
  );
}

export default App;
