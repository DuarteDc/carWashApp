import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import VerifyPhone from './VerifyPhone';
import VerifyPhoneCode from './VerifyPhoneCode';

const Stack = createNativeStackNavigator();

const AuthScreens: FC = () => {

  return (
    <>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyPhoneScreen" component={VerifyPhone} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyPhoneCodeScreen" component={VerifyPhoneCode} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  )
}

export default AuthScreens;