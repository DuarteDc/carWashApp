import { FC } from 'react';
import { View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';


const LoadingScreen: FC = () => {
    return (
        <View style={{ width: '100%', height: '100%', position: 'absolute', zIndex: 999 }}>
            <View style={{ position: 'absolute', height: '100%', width: '100%', zIndex: 20, backgroundColor: '#111', opacity: 0.8 }}>
            </View>
            <View style={{ position: 'absolute', zIndex: 20, width: '100%', height: '100%' }}>
                <SkypeIndicator color='white' interaction={true} size={100} />
            </View>
        </View>
    )
}

export default LoadingScreen