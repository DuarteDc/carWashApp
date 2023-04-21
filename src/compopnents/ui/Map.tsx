import { Dimensions } from 'react-native';
import MapView,{ Marker,PROVIDER_GOOGLE } from 'react-native-maps';

const Map = () => {

    const ScreenHeight = Dimensions.get("window").height - 80;

    return (
        <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            style={{ width: '100%',minHeight: ScreenHeight,}}>
            <Marker
                coordinate={{ latitude: 37.78825,longitude: -122.4324 }}
                title={'Hola'}
                description={'xD'}
            />
        </MapView>
    )
}

export default Map