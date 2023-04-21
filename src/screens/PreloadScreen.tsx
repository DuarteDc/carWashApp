import React,{ useEffect } from 'react';
import { View,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CommonActions,} from '@react-navigation/native';

import { useAppDispatch,useAppSelector } from '../hooks/useRedux';

import { revalidateToken } from '../actions/authActions';
import { Layout } from '../compopnents/ui';
import { useAuth } from '../hooks/useAuth';

export default () => {

    const { startRevalidateToken } = useAuth();

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const { logged } = useAppSelector(state => state.auth);

    const getSessionUser = async () => {
        if (logged) {
            return CommonActions.reset({
                index: 0,
                routes: [{ name: "Home" }]
            });
        }
        navigation.navigate('LoginScreen');

    }
    useEffect(() => {
        getSessionUser();
    },[logged]);

    return (
        <Layout>
            <View style={{ flex: 1,display: 'flex',justifyContent: 'center',alignItems: 'center' }}>
                <Image source={require('../assets/logo2.png')} alt="logo" style={{
                    resizeMode: 'center'
                }} />
            </View>
        </Layout>
    )
}