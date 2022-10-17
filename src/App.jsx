import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Spinner } from './components/Spinner';
import { ErrorComponent } from './components/ErrorComponent';
import { MyMapComponent } from './components/MyMapComponent';


export default function App() {

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <Spinner />;
      case Status.FAILURE:
        return <ErrorComponent />;
    }
  };

  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

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
  }

  useEffect(() => {

    getLocation();

  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>HTML Geolocation API</h1>

      <p>Latitude: {coord.latitude} </p>  <p>Longitude: {coord.longitude} </p>

      {/* <Wrapper apiKey={import.meta.env.VITE_REACT_APP_API_KEY} render={render} /> */}

      <Wrapper apiKey={import.meta.env.VITE_REACT_APP_API_KEY} render={render}>
        <MyMapComponent center={center} zoom={zoom} />
      </Wrapper>

    </div>
  )
}

