import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    maxWidth: '100%',
    height: '100%',
    bjectFit: 'cover',
    borderRadius: '16px',
};

type Location = {
    latitude: number
    longitude: number
}

export default function Map({ locations = { latitude: -3.745, longitude: -38.523 } }: { locations?: Location }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDLcPYFhx1updcJR_on-7kJID9UmoIIUgg" //+ process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    })

    const [map, setMap] = React.useState();

    const center = React.useMemo(() => ({ lat: locations.latitude, lng: locations.longitude }), []);



    /*const onLoad = React.useCallback(function callback() {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback() {
        setMap(null)
    }, [])*/

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
        //onLoad={onLoad}
        //onUnmount={onUnmount}
        >
            <Marker position={center} />
            { /* Child components, such as markers, info windows, etc. */}

        </GoogleMap>
    ) : <></>
}
