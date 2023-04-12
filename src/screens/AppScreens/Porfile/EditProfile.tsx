import { Image, View, Text, Pressable, StyleSheet } from 'react-native'
import { useAuth } from '../../../hooks/useAuth'
import { ICustomer } from '../../../Interfaces/LoginInterface'
import { INavigator } from '../../../Interfaces/NavigatorInterface'
import Layout from '../../../ui/Layout'

import Ionicons from 'react-native-vector-icons/Ionicons';
import FormEditProfile from '../../../compopnents/profile/FormEditProfile'
import { launchCamera } from 'react-native-image-picker'

const EditProfile = ({ navigation }: { navigation: INavigator }) => {

    const { user } = useAuth(navigation) as { user: ICustomer };
    const { startUploadImage } = useAuth(navigation);

    const takePhoto = async () => {
        await launchCamera({
            mediaType: 'photo',
            quality: 0.5
        }, ({ assets }) => {
            if (!assets?.length) return;
            startUploadImage(assets[0])
        });
    }

    return (
        <Layout>
            <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <View style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 40, }}>
                    <View style={{
                        width: 200,
                        height: 200,
                        borderRadius: 200 / 2,
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        {
                            user?.profile_image ? (
                                <Image source={{ uri: user.profile_image }} alt="logo" style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'cover',
                                }} />
                            ) : (
                                <Image source={require('../../../assets/logo-color.png')} alt="logo" style={{
                                    width: '100%',
                                    height: '100%',
                                    resizeMode: 'cover',
                                }} />
                            )
                        }
                    </View>
                    <View style={{ position: 'absolute', bottom: 50, right: 120, backgroundColor: '#135dc2', padding: 5, borderRadius: 50, zIndex: 20 }}>
                        <Pressable onPress={takePhoto}>
                            <Ionicons name="camera-outline" size={25} color="#fff" />
                        </Pressable>
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 25, color: 'white' }}>{user.fullname}</Text>
                </View>
                <FormEditProfile user={user} />
            </View>
        </Layout>
    )
}

export default EditProfile