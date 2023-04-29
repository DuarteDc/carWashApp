import { useEffect,useState, useRef } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { ILocation } from '../Interfaces/ServiceInterface';

export const useLocation = () => {

    const [hasLocation,setHasLocation] = useState<Boolean>(false);
    const [initialPosition,setInitialPosition] = useState<ILocation>({
        latitude: 0,
        longitude: 0,
    });
    const [userLocation ,setUserLocation] = useState<ILocation>({
        latitude: 0,
        longitude: 0,
    });

    const [routeLines, setRouteLines] = useState<ILocation[]>([]);

    const watchId = useRef<number>();
    const isMounted = useRef(true);


    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        }
    },[]);

    useEffect(() => {
        getCurrentLocation().then((location) => {

            if(!isMounted.current) return;
            setInitialPosition(location);
            setRouteLines(routes => [...routes, location]);
            setUserLocation(location);
            setHasLocation(true);
        })
    },[]);


    const getCurrentLocation = (): Promise<ILocation> => {
        return new Promise((resolve,reject) => {
            Geolocation.getCurrentPosition(
                ({ coords }) => {
                    resolve({
                        latitude: coords.latitude,
                        longitude: coords.longitude
                    });
                    setHasLocation(true);
                },
                (error) => reject({ error }),{
                enableHighAccuracy: true
            })
        })
    }

    const followUserLocation = () => {
        watchId.current = Geolocation.watchPosition(
            ({ coords }) => {
                if(!isMounted.current) return;
                const location : ILocation = {
                    latitude: coords.latitude,
                    longitude: coords.longitude,
                }

                setUserLocation(location);
                setRouteLines(routes => [...routes, location]);
                setHasLocation(true);
            },
            (error) => console.log({ error }),{
            enableHighAccuracy: true,  distanceFilter: 10
        })
    }

    const stopFollowUserPosition = () => watchId.current && Geolocation.clearWatch(watchId.current);
    

    return { hasLocation,initialPosition,getCurrentLocation, followUserLocation, userLocation, stopFollowUserPosition, routeLines }

}
