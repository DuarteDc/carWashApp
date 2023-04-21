import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

import { Layout } from '../../compopnents/ui';

import FormVerifyPhoneCode from '../../compopnents/verifyPhoneCode/FormVerifyPhoneCode';
import { INavigator } from '../../Interfaces/NavigatorInterface';

const VerifyPhoneCode = ({ navigation }: { navigation: INavigator }) => {

    return (
        <Layout>
            <>
                <View style={{ height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Image source={require('../../assets/sms.png')} alt="logo" style={{
                        width: '80%',
                        height: '80%',
                        resizeMode: 'contain'
                    }} />
                    <Text style={{ color: 'white' }}>Ingresa el código de verificación para continuar</Text>
                </View>
                <View style={{ display: 'flex', height: '70%' }}>
                    <FormVerifyPhoneCode
                        navigation={navigation}
                    />
                </View>
            </>
        </Layout>
    )
}

export default VerifyPhoneCode;