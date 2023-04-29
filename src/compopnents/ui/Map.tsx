import { useEffect,useRef } from 'react';
import { Dimensions } from 'react-native';
import MapView,{ Marker,PROVIDER_GOOGLE,Polyline } from 'react-native-maps';

import { useLocation } from '../../hooks/useLocation';
import Fab from '../maps/Fab';

const Map = () => {

    const { initialPosition,getCurrentLocation,followUserLocation,userLocation,stopFollowUserPosition,routeLines } = useLocation();
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    const centerPosition = async () => {
        const { latitude,longitude } = await getCurrentLocation();
        following.current = true;
        mapViewRef.current?.animateCamera({
            center: { latitude,longitude }
        })
    }
    const ScreenHeight = Dimensions.get("window").height - 20;

    useEffect(() => {
        followUserLocation();
        return () => {
            stopFollowUserPosition();
        }
    },[]);

    useEffect(() => {
        if (!following.current) return;
        const { latitude,longitude } = userLocation;
        mapViewRef.current?.animateCamera({
            center: { latitude,longitude }
        })
    },[userLocation])



    return (
        <>
            <MapView
                ref={(map) => mapViewRef.current = map!}
                provider={PROVIDER_GOOGLE}
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={() => following.current = false}
                style={{ width: '100%',minHeight: ScreenHeight,}}>
                <Polyline
                    coordinates={routeLines}
                    strokeColor="black"
                    strokeWidth={4}

                />
            </MapView>

            <Fab
                iconName="compass-outline"
                onPress={centerPosition}
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: 20
                }}
            />
        </>
    )
}

export default Map