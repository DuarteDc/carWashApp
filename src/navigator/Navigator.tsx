import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { INavigator } from '../Interfaces/NavigatorInterface';
import AppScreens from "../screens/AppScreens/Index";
import AuthScreens from "../screens/AuthScreens/Index";
import ProfileNavigator from '../screens/AppScreens/Porfile/ProfileNavigator';

const Stack = createNativeStackNavigator();

const Navigator = ({ navigation }: { navigation: INavigator }): JSX.Element => {

    const { startRevalidateToken, logged, phoneVerified } = useAuth(navigation);

    useEffect(() => {
        startRevalidateToken();
    }, []);


    return (
        <NavigationContainer>
            {
                logged  && phoneVerified ? (
                    <Stack.Navigator>
                        <Stack.Screen name="App" component={AppScreens} options={{headerShown: false}}/>
                        <Stack.Screen name="ProfileScreens" component={ProfileNavigator} options={{headerShown: false}} />
                    </Stack.Navigator>
                ) : (
                    <AuthScreens />
                )
            }
        </NavigationContainer>
    )
}

export default Navigator;