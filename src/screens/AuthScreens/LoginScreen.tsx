import { FC, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Layout } from '../../compopnents/ui';

import FormLogin from '../../compopnents/login/FormLogin';
import { useAuth } from '../../hooks/useAuth';
import { INavigator } from '../../Interfaces/NavigatorInterface';

const LoginScreen = ({ navigation }: { navigation: INavigator }) => {
    
    useEffect(() => {
        GoogleSignin.configure({
            webClientId: "31469844821-jbunp9ilg10vvla8ojd6ihr79ogu12ve.apps.googleusercontent.com",
            iosClientId: "31469844821-hgl1alsjkb64r8gjdgjavqemj8rske1u.apps.googleusercontent.com"
        });
    }, [])
    
    const { startGoogleSignIn } = useAuth(navigation);

    return (
        <Layout>
            <>
                <View style={{ flex: 1, display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                    <Image source={require('../../assets/logo2.png')} alt="logo" style={{
                        width: '100%',
                        height: '100%',
                        aspectRatio: 1 * 1.5,
                        resizeMode: 'center',
                        
                    }} />
                </View>
                <View>
                    <FormLogin 
                        navigation={navigation}
                    />
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginVertical: 20 }}>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
                            <Text style={{ color: '#fff', fontWeight: '600' }}>Continuar con</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
                            <View
                                style={{
                                    borderRadius: 20,
                                    borderColor: '#fff',
                                    padding: 10,
                                    borderWidth: 2,
                                    marginHorizontal: 10
                                }}
                            >
                                <Ionicons name='logo-apple' size={30} color="#fff" />
                            </View>
                            <View
                                style={{
                                    borderRadius: 20,
                                    borderColor: '#fff',
                                    padding: 10,
                                    borderWidth: 2,
                                    marginHorizontal: 10
                                }}
                            >
                                <Pressable onPress={startGoogleSignIn}>
                                    <Ionicons name='logo-google' size={30} color="#fff" />
                                </Pressable>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ color: '#ccc' }}>¿No tienes cuenta?</Text>
                            <Pressable onPress={() => navigation.navigate('RegisterScreen')}>
                                <Text style={{ color: '#fff', fontWeight: '600', marginHorizontal: 5 }}>Registrarme</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </>
        </Layout >
    )
}


export default LoginScreen;