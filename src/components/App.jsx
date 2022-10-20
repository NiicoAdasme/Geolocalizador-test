import { useState } from 'react'
import '../assets/App.css';


export default function App() {

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const [startTrip, setStartTrip] = useState(false);

  const [watchID, setWatchID] = useState();

  const [reqCount, setReqCount] = useState(0);

  const [displayText, setDisplayText] = useState('');

  const [coord, setCoord] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    altitude: null,
    heading: null,
    speed: null
  })
  const [newCoords, setNewCoords] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    altitude: null,
    heading: null,
    speed: null
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser."); // ! Debe activar la geolocalizacion
    }
  }

  const watchPosition = () => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(showPosition, ErrorCallback, options)
      setWatchID(watchId);
    } else {
      alert(`Geolocation is not supported by this browser`); // ! You must activate the geolocation
    }
  }

  const ErrorCallback = (error) => {
    // Display error based on the error code.
    const { code } = error;
    switch (code) {
      case GeolocationPositionError.TIMEOUT:
        // Handle timeout.
        alert(`Timeout`)
        break;
      case GeolocationPositionError.PERMISSION_DENIED:
        // User denied the request.
        alert(`Permission denied`)
        break;
      case GeolocationPositionError.POSITION_UNAVAILABLE:
        // Position not available.
        alert(`Unavailable`)
        break;
    }
  }

  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximunAge: 0
  };

  const showPosition = (position) => {
    // console.log(position);
    const { latitude, longitude, altitude, accuracy, heading, speed } = position.coords;

    setReqCount(reqCount + 1);

    // ! Comienzo del monitoreo
    console.log(`recibiendo coordenadas...`);
    setDisplayText(`recibiendo coordenadas...`)

    // * Primer registro de coordenadas, por primera vez
    if (coord.latitude === null || coord.longitude === null) {
      setCoord({
        latitude,
        longitude,
        altitude,
        accuracy,
        heading,
        speed
      })
      console.log(`primer registro`);
      setDisplayText(`ingresando primer registro...`)
    } else {
      // * segundo registro, por primera vez
      if (newCoords.latitude === null || newCoords.longitude === null) {
        setNewCoords({
          latitude,
          longitude,
          altitude,
          accuracy,
          heading,
          speed
        })
        console.log(`segundo registro`);
        setDisplayText(`ingresando segundo registro...`)
      } else {
        // ? Nuevo registro (actualizacion del segundo registroy)
        setNewCoords({
          latitude,
          longitude,
          altitude,
          accuracy,
          heading,
          speed
        })

        //  intercambio de coordenadas entre el primer y segundo registro
        //  Si las coordenadas son iguales. No hay movimiento
        if (coord.latitude === newCoords.latitude && coord.longitude === newCoords.longitude) {
          console.log('quieto');
          setDisplayText(`quieto :(`)
          // si esta quieto. hay que saber cuanto tiempo lleva detenido. Si lleva mas de 1 min detenido
          // se envia una alerta para saber si esta bien el conductor
          // Algun mecanismo de validacion rapido para identificar que es el conductor y no otra persona 
          setCoord(newCoords)

        } else {
          console.log('en movimiento');
          setDisplayText(`en movimiento :D`)
          // intercambio de coordenadas entre el primer y segundo registro
          setCoord(newCoords)
        }
      }
    }
    // ! Fin del monitoreo
  }


  // Inicio del viaje 
  const handleStart = () => {
    setStartTrip(true);
    watchPosition();
  }

  // ? se necesita el id del timer para poder deterlo en el handleStop
  // if (startTrip) {
  //   const timerId = setTimeout(() => {
  //     getLocation();
  //   }, 3000);
  // }


  // Termino del viaje
  const handleStop = () => {
    setStartTrip(false);
    navigator.geolocation.clearWatch(watchID)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Geolocation API</h1>

      {
        (!startTrip) ?
          <button onClick={handleStart}>Iniciar</button>
          :
          <button onClick={handleStop}>Detener</button>
      }

      <h2>Primer Registro</h2>
      <p>Latitude: {coord.latitude} </p>
      <p>Longitude: {coord.longitude} </p>
      <p>Altitude: {coord.altitude} </p>
      <p>Accuracy: {coord.accuracy} </p>
      <p>Heading: {coord.heading} </p>
      <p>Speed: {coord.speed} </p>

      <iframe
        width="300"
        height="200"
        frameBorder="0"
        style={{border:0}}
        loading="lazy"
        allowFullscreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
          &q=${coord.latitude},${coord.longitude}`}>
      </iframe>

      <h2>Segundo Registro</h2>
      <p>Latitude: {newCoords.latitude} </p>
      <p>Longitude: {newCoords.longitude} </p>
      <p>Altitude: {newCoords.altitude} </p>
      <p>Accuracy: {newCoords.accuracy} </p>
      <p>Heading: {newCoords.heading} </p>
      <p>Speed: {newCoords.speed} </p>

      <iframe
        width="300"
        height="200"
        frameBorder="0"
        style={{border:0}}
        loading="lazy"
        allowFullscreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
          &q=${newCoords.latitude},${newCoords.longitude}`}>
      </iframe>

      <h3><b>{displayText.toUpperCase()}</b></h3>

      <h3>Request Count: {reqCount}</h3>
      
    </div >
  )
}

