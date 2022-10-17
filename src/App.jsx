import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
// import { Wrapper, Status } from "@googlemaps/react-wrapper";
// import { MyMapComponent } from './MyMapComponent';



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


  // const YourComponent = () => <h1>Hello World</h1>

  // const ref = useRef(null);
  // const [map, setMap] = useState();

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

    getLocation();
    // Maps
    // if (ref.current && !map) {
    //   setMap(new window.google.maps.Map(ref.current, {}));
    // }


  }, [])
  // [ref, map])

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

  // const center = {
  //   lat: -34.397, lng: 150.644
  // };

  // const zoom = 4;

  // const render = (status) => {
  //   switch (status) {
  //     case Status.LOADING:
  //       return <h1>Loading...</h1>;
  //     case Status.FAILURE:
  //       return <h1>Error!</h1>;
  //     case Status.SUCCESS:
  //       return <MyMapComponent center={center} zoom={zoom} />;
  //   };
  // }


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
      <h1>Google Maps Geolocation API</h1>


      <p>Latitude: {coords?.location?.lat}</p>
      <p>Longitude: {coords?.location?.lng}</p>
      <p>Accurrancy: {coords?.accurancy}</p>

      {/* <Wrapper apiKey={apiKey} render={render}/> */}


      <h1>HTML Geolocation API</h1>

      {/* <button
        onClick={getLocation}
      >Get Coords</button> */}

      <p>Latitude: {coord.latitude} </p>  <p>Longitude: {coord.longitude} </p>



    </div>
  )
}

export default App
