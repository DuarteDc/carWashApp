import { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

const useLocation = () => {
    
    const [ hasLocatin, setHasLocation ] = useState(false);
    const [ initialPosition, setInitialPosition ] = useState({
        latitude  : 0,
        longitude : 0,
    });



    useEffect(() =>{
        Geolocation.getCurrentPosition(({ coords }) =>{

        }, (error) => console.log(error), {enableHighAccuracy: true});
    }, [])

    return{ }

}
