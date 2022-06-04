import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react'

import { useLocation  } from 'react-router-dom'


const containerStyle = {
    width: '400px',
    height: '400px'
};

const Map = () => {

    const location = useLocation();
    const data = location.state;

    const position = {
        lat: parseFloat(data.latitude),
        lng: parseFloat(data.longitude),
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBg1xpeAYF-u3ItsTUkXjiz4UVy-w3yoTk"
    })


    const [, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(position);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            <Marker position={position}/>
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    ) : <></>
}

export default Map