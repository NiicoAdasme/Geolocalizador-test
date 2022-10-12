import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import GoogleMapReact from 'google-map-react';



function App() {

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  const src = `https://www.googleapis.com/geolocation/v1/geolocate?key=${apiKey}`;

  const [coords, setCoords] = useState({
    location: {
      lat: 0,
      lng: 0
    },
    accurancy: 0
  });


  useEffect(() => {

    axios.post(src)
      .then(function (response) {
        // handle success
        // console.log(response.data);
        const { location, accurancy } = response.data;
        // console.log(location);
        if (location) {
          const { lat, lng } = location;

          setCoords({
            location: {
              lat,
              lng
            },
            accurancy
          })
        }
      })
      .catch(function (error) {
        // handle error
        throw new error;
      })


  }, [])

  // html geo api code
  const [coord, setCoord] = useState({ latitude: '', longitude: '' })

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setCoord({
      latitude,
      longitude
    })
    console.log(`Latitude: ${latitude} | Longitude: ${longitude}`);

  }
  //    end html geo api code

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 4
  };



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
      <h1>Google Maps Geolocation API</h1>


      <p>Latitude: {coords?.location?.lat}</p>
      <p>Longitude: {coords?.location?.lng}</p>
      <p>Accurrancy: {coords?.accurancy}</p>


      <h1>HTML Geolocation API</h1>

      <button
        onClick={getLocation}
      >Get Coords</button>

      <p>Latitude: {coord.latitude} </p>  <p>Longitude: {coord.longitude} </p>



    </div>
  )
}

export default App
