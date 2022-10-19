import React, { useEffect, useRef, useState } from 'react'

export const MyMapComponent = ({center, zoom}) => {

    const ref = useRef();
    const [map, setMap] = useState()

    useEffect(() => {
        if(ref.current && !map){
            setMap(new window.google.maps.Map(ref.current, {
                center,
                zoom,
            }))
        }
        
    }, [ref, map]);

    return <div ref={ref} id="map" />;
}
