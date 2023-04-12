import { FC } from 'react';
import { View, Text, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { INavigator } from '../../Interfaces/NavigatorInterface';

interface IOptionProfile {
    icon        : string;
    route       : string;
    name        : string;
    navigation  : INavigator;
}

const OptionProfile: FC<IOptionProfile> = ({ icon, route, name, navigation }): JSX.Element => {
    return (
        <Pressable onPress={()=> navigation.navigate('ProfileScreens', { screen: route }) }>
            <View style={{
                backgroundColor: 'transparent',
                borderColor: 'white',
                paddingHorizontal: 10,
                marginBottom: 30
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                    <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 10 }}>
                        <Ionicons name={icon} size={25} color="#fff" />
                    </View>
                    <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>{name}</Text>
                    <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 100 }}>
                        <Ionicons name="chevron-forward" size={25} color="#fff" />
                    </View>
                </View>
            </View>
        </Pressable>
    )
}

export default OptionProfile;