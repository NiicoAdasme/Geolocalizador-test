import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';


function App() {

  // const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  // const src = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

  // const [coords, setCoords] = useState({
  //   location: {
  //     lat: 0,
  //     lng: 0
  //   },
  //   accurancy: 0
  // });

  // useEffect(() => {

  //   axios.post(src)
  //   .then(function (response) {
  //     // handle success
  //     // console.log(response.data);
  //     const { location, accurancy } = response.data;
  //     // console.log(location);
  //     if (location) {
  //       const { lat, lng } = location;

  //       setCoords({
  //         location: {
  //           lat,
  //           lng
  //         },
  //         accurancy
  //       })
  //     }
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     throw new error;
  //   })


  // }, [])
  
  const [coords, setCoords] = useState({latitude: '', longitude: ''})

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    // x.innerHTML = "Latitude: " + position.coords.latitude +
    //   "<br>Longitude: " + position.coords.longitude;
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCoords({
      latitude,
      longitude
    })
    console.log(`Latitude: ${latitude} | Longitude: ${longitude}`);

  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Geolocalizador</h1>


      {/* <p>Latitude: {coords?.location?.lat}</p>
      <p>Longitude: {coords?.location?.lng}</p>
      <p>Accurrancy: {coords?.accurancy}</p> */}

      <button
        onClick={getLocation}
      >Get Coords</button>

      <p>Latitude: {coords.latitude} </p>  <p>Longitude: {coords.longitude} </p>

    </div>
  )
}

export default App
