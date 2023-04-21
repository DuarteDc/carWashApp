import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { INavigator } from '../Interfaces/NavigatorInterface';
import AppScreens from "../screens/AppScreens/Index";
import AuthScreens from "../screens/AuthScreens/Index";
import ProfileNavigator from '../screens/AppScreens/Porfile/ProfileNavigator';
import VerifyPhoneCode from '../screens/AuthScreens/VerifyPhoneCode';
import VerifyPhone from '../screens/AuthScreens/VerifyPhone';

const Stack = createNativeStackNavigator();

const Navigator = (): JSX.Element => {

    const navigation = useNavigation();
    const { startRevalidateToken, logged, phoneVerified } = useAuth(navigation);

    useEffect(() => {
        startRevalidateToken();
    }, []);


    return (
        <>
            {
                logged ? (
                    <Stack.Navigator>
                        {
                            !phoneVerified  && (
                                <>
                                <Stack.Screen name="VerifyPhoneScreen" component={VerifyPhone} options={{ headerShown: false }} />
                                <Stack.Screen name="VerifyPhoneCodeScreen" component={VerifyPhoneCode} options={{ headerShown: false }} />
                                </>
                            )
                        }
                        <Stack.Screen name="App" component={AppScreens} options={{headerShown: false}}/>
                        <Stack.Screen name="ProfileScreens" component={ProfileNavigator} options={{headerShown: false}} />
                    </Stack.Navigator>
                ) : (
                    <AuthScreens />
                )
            }
        </>
    )
}

export default Navigator;