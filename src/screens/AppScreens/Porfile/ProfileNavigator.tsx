import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfile from './EditProfile';

const Stack = createNativeStackNavigator();

const ProfileNavigator = (): JSX.Element => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default ProfileNavigator;