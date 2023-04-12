import { Image, View, Text, Pressable } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Layout from '../../ui/Layout';
import { useAuth } from '../../hooks/useAuth';

import { ICustomer } from '../../Interfaces/LoginInterface';
import { INavigator } from '../../Interfaces/NavigatorInterface';

import ProfileRoutes from '../../routes/ProfileRoutes.json';
import OptionProfile from '../../compopnents/profile/OptionProfile';

const ProfileScreen = ({ navigation }: { navigation: INavigator }) => {

    const { user, startLogoutUser } = useAuth(navigation) as { user: ICustomer };

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
                        {
                            user.profile_image ? (
                                <Image source={{ uri: user.profile_image }} alt="logo" style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'cover',
                                }} />
                            ):(
                                <Image source={require('../../assets/logo-color.png')} alt="logo" style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'cover',
                                }} /> 
                            )
                        }

                    </View>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>{user.fullname}</Text>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', marginTop: 5 }}>{user.email}</Text>

                    <View>
                        <Pressable onPress={() => navigation.navigate('ProfileScreens', { screen: 'EditProfile' })} style={{ backgroundColor: '#0d2b6b', paddingVertical: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 20, marginTop: 20, maxWidth: '100%', paddingHorizontal: 40 }}>
                            <Text style={{ color: '#fff', fontWeight: '600', marginHorizontal: 5 }}>Editar Perfil</Text>
                        </Pressable>
                    </View>

                </View>
                <View style={{ height: 1, backgroundColor: '#ccc', opacity: 0.4, marginBottom: 40 }} />
                {
                    ProfileRoutes.map(({ name, icon, route }) => (
                        <OptionProfile
                            key={name}
                            name={name}
                            icon={icon}
                            route={route}
                            navigation={navigation}
                        />

                    ))
                }
                <View style={{ height: 1, backgroundColor: '#ccc', opacity: 0.4, marginBottom: 40 }} />
                <View style={{
                    backgroundColor: 'transparent',
                    borderColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 30
                }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', }}>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 10 }}>
                            <Ionicons name="people" size={25} color="#fff" />
                        </View>
                        <Text style={{ flex: 1, marginLeft: 20, color: 'white', fontWeight: 'bold', fontSize: 15 }}>Convertirme en socio</Text>
                        <View style={{ backgroundColor: '#135dc2', padding: 4, borderRadius: 100 }}>
                            <Ionicons name="chevron-forward" size={25} color="#fff" />
                        </View>
                    </View>
                </View>
                <Pressable onPress={startLogoutUser}>
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
                </Pressable>
            </>
        </Layout>
    )
}

export default ProfileScreen