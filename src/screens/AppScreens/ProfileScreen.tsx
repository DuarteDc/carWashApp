import { FC } from 'react'
import { Image, View, Text, Pressable, StyleSheet } from 'react-native'
import { useAuth } from '../../hooks/useAuth'
import { ICustomer } from '../../Interfaces/LoginInterface'
import { INavigator } from '../../Interfaces/NavigatorInterface'
import Layout from '../../ui/Layout'

import { Formik } from 'formik';
import Input from '../../ui/Input'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PhoneInput from '../../ui/PhoneInput'

const initialValues = {
    name: '',
    email: '',
}
const ProfileScreen = ({ navigation }: { navigation: INavigator }) => {

    const { user } = useAuth(navigation) as { user: ICustomer };

    return (
        <Layout>
            <>
                <View style={{ display: 'flex', justifyContent: 'center', width: '100%', flexDirection: 'column', alignItems: 'center', marginTop: 20, marginBottom: 40 }}>
                    <View style={{
                        width: 200,
                        height: 200,
                        borderRadius: 200 / 2,
                        overflow: 'hidden',
                        marginBottom: 25,
                    }}>
                        <Image source={require('../../assets/logo-color.png')} alt="logo" style={{
                            width: '100%',
                            height: '100%',
                            resizeMode: 'cover',
                        }} />
                    </View>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{user.fullname}</Text>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>{user.email}</Text>

                    <View>
                        <Pressable onPress={() => console.log('edit profile')} style={{ backgroundColor: '#0d2b6b', paddingVertical: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20, maxWidth: '100%', paddingHorizontal: 40 }}>
                            <Text style={{ color: '#fff', fontWeight: '600', marginHorizontal: 5 }}>Editar Perfil</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={{ height: 1, backgroundColor: '#ccc', opacity: 0.4, marginBottom: 40 }} />
                <View style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 30,
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <View style={{ backgroundColor: '#135dc2', padding: 5, borderRadius: 10 }}>
                            <Ionicons name="person" size={25} color="#fff" />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>Mi perfil</Text>
                        <View style={{ backgroundColor: '#135dc2', padding: 5, borderRadius: 20 }}>
                            <Ionicons name="chevron-forward" size={25} color="#fff" />
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 10 }}>
                            <Ionicons name="location-sharp" size={25} color="#fff" />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>Mis direcciones</Text>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 100 }}>
                            <Ionicons name="chevron-forward" size={25} color="#fff" />
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 10 }}>
                            <Ionicons name="file-tray-sharp" size={25} color="#fff" />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>Historial</Text>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 100 }}>
                            <Ionicons name="chevron-forward" size={25} color="#fff" />
                        </View>
                    </View>
                </View>
                <View style={{ height: 1, backgroundColor: '#ccc', opacity: 0.4, marginBottom: 40 }} />
                <View style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 10 }}>
                            <MaterialIcons name="groups
                            " size={25} color="#fff" />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>Convertirme en socio</Text>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 100 }}>
                            <Ionicons name="chevron-forward" size={25} color="#fff" />
                        </View>
                    </View>
                </View>
                <View style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 10 }}>
                            <Ionicons name="log-out" size={25} color="#fff" />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>Cerrar Sesión</Text>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 100 }}>
                            <Ionicons name="chevron-forward" size={25} color="#fff" />
                        </View>
                    </View>
                </View>
            </>
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginVertical: 10,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#666',
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttons: {
        backgroundColor: '#1548a1',
        paddingVertical: 20,
        display: 'flex',
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        maxWidth: '100%'
    }
});

export default ProfileScreen