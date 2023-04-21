import { useRef } from 'react';
import { Image,View,Text,Pressable } from 'react-native';

import { Modalize } from 'react-native-modalize';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { Layout } from '../../../compopnents/ui';
import FormEditProfile from '../../../compopnents/profile/FormEditProfile';
import { CameraOptions } from '../../../compopnents/ui/'

import { useAuth } from '../../../hooks/useAuth';
import { ICustomer } from '../../../Interfaces/LoginInterface';
import { INavigator } from '../../../Interfaces/NavigatorInterface';


const EditProfile = ({ navigation }: { navigation: INavigator }) => {
    const modalizeRef = useRef<Modalize>(null);

    const { user } = useAuth(navigation) as { user: ICustomer };
    const { startUploadImage } = useAuth(navigation);

    const onOpen = () => modalizeRef.current?.open();

    return (
            <Layout JSXModalize={<CameraOptions useCameraCallback={startUploadImage} />} modalizeRef={modalizeRef}>
                <>
                    <View style={{ display: 'flex',flexDirection: 'column',justifyContent: 'space-between' }}>

                        <View style={{ display: 'flex',alignContent: 'center',alignItems: 'center',justifyContent: 'center',width: '100%',marginVertical: 40,}}>
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
                            <View style={{ position: 'absolute',bottom: 50,right: 120,backgroundColor: '#135dc2',padding: 5,borderRadius: 50,zIndex: 20 }}>
                                <Pressable onPress={onOpen}>
                                    <Ionicons name="camera-outline" size={25} color="#fff" />
                                </Pressable>
                            </View>
                            <Text style={{ marginTop: 20,fontSize: 25,color: 'white' }}>{user.fullname}</Text>
                        </View>
                        <FormEditProfile
                            navigation={navigation}
                            user={user}
                        />

                    </View>
                </>
            </Layout>
    )
}

export default EditProfile