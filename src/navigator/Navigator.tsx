import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import { INavigator } from '../Interfaces/NavigatorInterface';
import AppScreens from "../screens/AppScreens/Index";
import AuthScreens from "../screens/AuthScreens/Index";
import VerifyPhone from '../screens/AuthScreens/VerifyPhone';
import VerifyPhoneCode from '../screens/AuthScreens/VerifyPhoneCode';

const Stack = createNativeStackNavigator();

const Navigator = ({ navigation }: { navigation: INavigator }): JSX.Element => {

    const { startRevalidateToken, logged } = useAuth(navigation);

    useEffect(() => {
        startRevalidateToken();
    }, [logged]);


    return (
        <NavigationContainer>
            {
                logged ? (
                    <AppScreens />
                ) : (
                    <AuthScreens />
                )
            }
        </NavigationContainer>
    )
}

export default Navigator;