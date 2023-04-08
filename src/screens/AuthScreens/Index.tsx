import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ICustomer } from '../../Interfaces/LoginInterface';

import PreloadScreen from '../PreloadScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import VerifyPhone from './VerifyPhone';
import VerifyPhoneCode from './VerifyPhoneCode';

const Stack = createNativeStackNavigator();

const AuthScreens: FC = () => {

  return (
    <>
      <Stack.Navigator initialRouteName="Preload">

        <Stack.Screen name="VerifyPhoneScreen" component={VerifyPhone} options={{ headerShown: false }} />

        <Stack.Screen name="Preload" component={PreloadScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  )
}

export default AuthScreens;