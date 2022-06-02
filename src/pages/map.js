import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react'


const Map = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBg1xpeAYF-u3ItsTUkXjiz4UVy-w3yoTk"
    })

    const position = {
        lat: -27.598824,
        lng: -48.551262,

    }
    return (
        <div style={{
            height: "50vh",
        }}>
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{ width: "100%", height: "100%" }}
                        center={position}
                        zoom={15}
                    >
                        <Marker position={position} />
                    </GoogleMap>
                ) : (<></>
                )}


        </div>
    )
}

export default Map