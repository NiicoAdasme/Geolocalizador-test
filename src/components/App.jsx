import { useEffect, useState } from 'react'
import '../assets/App.css';
import { getAuth, signInAnonymously } from "firebase/auth";
import { messaging } from '../firebase';
import { getToken, onMessage } from 'firebase/messaging';

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"


export default function App() {

  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

  const [token, setToken] = useState();

  const [uid, setUid] = useState();

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
    speed: 0,
    reqCount: null,
    timestamp: null
  })

  const loguearse = () => {
    signInAnonymously(getAuth()).then(usuario => {
      console.log(usuario.user.uid)
      setUid(usuario.user.uid)
    })
  }

  const activarMensajes = async () => {
    const token = await getToken(messaging, {
      vapidKey: "BDcIaPcny0JGbEL0pq6OY4HIRMhiERhZ1NCT28qhntsyn9KdjU6yL3jVQsLdz9TM3xX6so_ET5KMj6z8QJ7UHhY"
    }).catch(e => console.error(`Error al generar el token :( ${e}`))

    if(token) console.log(`tu token es: ${token}`);
    setToken(token);
    if(!token) console.error(`no tienes token`);

  }

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
    enableHighAccuracy: true,
    timeout: 5000,
    maximunAge: 0
  };

  useEffect(() => {
    setReqCount(reqCount + 1);
    onMessage(messaging, message => {
      console.log(`tu mensaje:`, message);
      toast(message.notification.title)
    })
  }, [coord, messaging])


  const showPosition = (position) => {

    const { latitude, longitude, altitude, accuracy, heading, speed } = position.coords;

    const speedKmh = speed * 3.6;

    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth() + 1;
    const day = dateNow.getDate();
    const hours = dateNow.getHours();
    const minutes = dateNow.getMinutes();
    const seconds = dateNow.getSeconds();

    const fullDate = `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`

    console.log(`recibiendo coordenadas...`);
    setDisplayText(`recibiendo coordenadas...`)
    setCoord({
      latitude,
      longitude,
      altitude,
      accuracy,
      heading,
      speed: speedKmh,
      reqCount,
      timestamp: fullDate
    })

    if (speed === 0) {
      setDisplayText(`Detenido`)
    } else {
      setDisplayText(`En movimiento`)
    }

  }


  // Inicio del viaje 
  const handleStart = () => {
    setStartTrip(true);
    watchPosition();
  }

  // Termino del viaje
  const handleStop = () => {
    setStartTrip(false);
    navigator.geolocation.clearWatch(watchID)
  }

  return (
    <div className="App">
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Geolocalización API</h1>

      {
        (!startTrip) ?
          <button onClick={handleStart}>Iniciar</button>
          :
          <button onClick={handleStop}>Detener</button>
      }
      <br />
      <button onClick={loguearse}>Loguearse</button>
      <br />
      <button onClick={activarMensajes}>Obtener token</button>

      <h2>Primer Registro</h2>
      <p>Hora: {coord.timestamp} </p>
      <p>Latitud: {coord.latitude} </p>
      <p>Longitud: {coord.longitude} </p>
      <p>Altura: {coord.altitude} </p>
      <p>Precisión: {coord.accuracy} </p>
      <p>Grado: {coord.heading} </p>
      <p>Velocidad: {coord.speed} km/h</p>

      <iframe
        width="600"
        height="450"
        allow="geolocation"
        frameBorder="0"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}
          &q=${coord.latitude},${coord.longitude}`}>
      </iframe>

      <h3><b>{displayText.toUpperCase()}</b></h3>

      <h3>Request Count: {reqCount}</h3>

      <h3>Tu token es: {token} </h3>

      <h3>uid: {uid}</h3>

    </div >
  )
}

