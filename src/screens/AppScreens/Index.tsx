import { FC } from 'react';
import { Text, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ServicesScreen from '../ServicesScreen';
import ProfileScreen from './ProfileScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppScreens: FC = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            display: 'flex',
            position: 'absolute',
            elevation: 0,
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            left: 10, 
            right: 10
          },
          tabBarShowLabel: false,
          headerShown: false,
        })}>
        <Tab.Screen name="Home" component={ServicesScreen} options={{
          headerShown: false,
          title: 'Inicio',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: '#0d2b6b',
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{

              }}>
              <Ionicons name="home" size={25} color={focused ? '#135dc2' : '#ccc'} />
              <Text style={{ color: `${focused ? '#135dc2' : '#ccc'}`, fontSize: 12 }}>Inicio</Text>
            </View>
          ),
        }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          headerShown: false,
          title: 'Mi perfil',
          headerTintColor: 'white',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0d2b6b',
          },
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
              <Ionicons name="person" size={25} color={focused ? '#135dc2' : '#ccc'} />
              <Text style={{ color: `${focused ? '#135dc2' : '#ccc'}`, fontSize: 12 }}>Perfil</Text>
            </View>
          ),
        }} />
      </Tab.Navigator>
    </>
  )
}

export default AppScreens;