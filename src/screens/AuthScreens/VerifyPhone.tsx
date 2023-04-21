import React, { FC } from 'react';
import { Pressable, Text, View, Image, Dimensions } from 'react-native';
import FormVerifyPhone from '../../compopnents/verifyPhone/FormVerifyPhone';
import { INavigator } from '../../Interfaces/NavigatorInterface';
import { Layout } from '../../compopnents/ui';

const VerifyPhone = ({ navigation }: { navigation: INavigator }) => {

    return (
        <Layout>
            <>
                <View style={{ height: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../assets/sms.png')} alt="logo" style={{
                        width: '50%',
                        height: '50%',
                        resizeMode: 'contain'
                    }} />
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 'bold' }}>Bienvenido</Text>
                    <Text style={{ fontSize: 12, color: 'white' }}>Ingresa tu número telefonico para continuar</Text>
                </View>
                <View style={{ display: 'flex', height: '40%' }}>
                    <FormVerifyPhone
                        navigation={navigation}
                    />
                </View>
            </>
        </Layout>
    )
}

export default VerifyPhone;