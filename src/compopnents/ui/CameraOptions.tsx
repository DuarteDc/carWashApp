import { FC } from 'react';
import { Pressable,Text,View } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { useCamera } from '../../hooks/useCamera';

interface ICameraOptions {
    useCameraCallback: Function;
}

export const CameraOptions: FC<ICameraOptions> = ({ useCameraCallback }): JSX.Element => {

    const { openCamera,openGalery } = useCamera();

    return (
        <View style={{ display: 'flex',justifyContent: 'space-between',flexDirection: 'column',marginVertical: 15,paddingHorizontal: 10 }}>
            <Pressable
                style={{ borderRadius: 10,borderColor: "#ccc",borderWidth: 2,paddingVertical: 17,display: 'flex',flexDirection: 'row',alignItems: 'center',paddingHorizontal: 20,marginBottom: 10 }}
                onPress={() => openCamera(useCameraCallback)}
            >
                <Ionicons name="camera-outline" size={25} color="#000" />
                <Text style={{ color: 'black',fontSize: 15,marginLeft: 5 }}>Camara</Text>
            </Pressable>
            <Pressable style={{ borderRadius: 10,borderColor: "#ccc",borderWidth: 2,paddingVertical: 17,display: 'flex',flexDirection: 'row',alignItems: 'center',paddingHorizontal: 20 }}
                onPress={() => openGalery(useCameraCallback)}
            >
                <Ionicons name="ios-image-outline" size={25} color="#000" />
                <Text style={{ color: 'black',fontSize: 15,marginLeft: 5 }}>Galeria</Text>
            </Pressable>
        </View>
    )
}

export default CameraOptions