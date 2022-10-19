import { useEffect, useState } from 'react'
import './App.css'



export default function App() {

  const [startTrip, setStartTrip] = useState(false)

  const [displayText, setDisplayText] = useState('')

  const [coord, setCoord] = useState({ latitude: null, longitude: null })
  const [newCoords, setNewCoords] = useState({ latitude: null, longitude: null });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const showPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // setCoord({
    //   latitude,
    //   longitude
    // })
    console.log(`recibiendo coordenadas...`);
    setDisplayText(`recibiendo coordenadas...`)

    // Primer registro de coordenadas por primera vez
    if (coord.latitude === null || coord.longitude === null) {
      setCoord({
        latitude,
        longitude
      })
      console.log(`primer registro`);
      setDisplayText(`primer registro`)
    } else {
      // segundo registro, por primera vez
      if (newCoords.latitude === null || newCoords.longitude === null) {
        setNewCoords({
          latitude,
          longitude
        })
        console.log(`segundo registro`);
        setDisplayText(`segundo registro`)
      } else {
        // Nuevo registro (actualizacion)
        setNewCoords({
          latitude,
          longitude
        });
        // intercambio de coordenadas entre el primer y segundo registro
        // Si las coordenadas son iguales. No hay movimiento
        if (coord.latitude === newCoords.latitude && coord.longitude === newCoords.longitude) {
          console.log('quieto');
          setDisplayText(`quieto`)
          // si esta quieto. hay que saber cuanto tiempo lleva detenido. Si lleva mas de 1 min detenido
          // se envia una alerta para saber si esta bien el conductor
          // Algun mecanismo de validacion rapido para identificar que es el conductor y no otra persona 
          setCoord(newCoords)
          // setNewCoords({
          //   ...newCoords
          // })
        } else {
          console.log('en movimiento');
          setDisplayText(`en movimiento`)
          // intercambio de coordenadas entre el primer y segundo registro
          setCoord(newCoords)
          // setNewCoords({
          //   ...newCoords
          // })
        }
      }
    }
  }

  const handleStart = () => {
    setStartTrip(true);
    getLocation();
  }

  if(startTrip){
    setTimeout(() => {
      getLocation()
    }, 3000);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>HTML Geolocation API</h1>

      <button
        onClick={handleStart}
      >
        Iniciar
      </button>

      <h2>Primer Registro</h2>
      <p>Latitude: {coord.latitude} </p>  <p>Longitude: {coord.longitude} </p>

      <h2>Segundo Registro</h2>
      <p>Latitude: {newCoords.latitude} </p>  <p>Longitude: {newCoords.longitude} </p>

      <h3><b>{ displayText.toUpperCase() }</b></h3>
    </div>
  )
}

