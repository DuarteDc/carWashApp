import AsyncStorage from '@react-native-async-storage/async-storage';

import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { login, register, loginWithGoogle, revalidateToken, verifyAccount, sendCodeVerification, updateImageProfile, updateUserInfo  } from '../actions/authActions';
import { useAppDispatch, useAppSelector } from './useRedux';

import { startLoading, stopLoading } from '../reducers/uiReducer';

import { ICustomer } from '../Interfaces/LoginInterface';
import { INavigator } from '../Interfaces/NavigatorInterface';
import { Asset } from 'react-native-image-picker';
import { startLogout, startValidatePhone } from '../reducers/authReducer';

export interface ILoginValues {
    email: string;
    password: string;
}

export interface IRegisterValues extends ILoginValues {
    fullname: string;
}

export interface ILoginGoogleValues {
    idToken: string | null;
}

export interface IPhoneNumber {
    prefix: string;
    phone_number: string;
}

export interface IVerifyCode {
    code: number;
}

interface ISuccessFunction {
    success: boolean;
    user: ICustomer
}
export interface IProfile {
    fullname    : string;
    email       : string;
}

export const useAuth = (navigation: INavigator) => {

    const dispatch = useAppDispatch();

    const { user, logged, phoneVerified } = useAppSelector((state) => state.auth);

    const startSignIn = async (data: ILoginValues) => {
        dispatch(startLoading())
        await dispatch(login(data)) as ISuccessFunction;
        dispatch(stopLoading());
    }

    const startSignUp = async (data: IRegisterValues) => await dispatch(register(data));

    const startRevalidateToken = async () => await dispatch(revalidateToken());

    const startGoogleSignIn = async () => {
        await GoogleSignin.hasPlayServices()
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken)
        await dispatch(loginWithGoogle({ idToken }));
    }

    const startVerifyAccount = async (data: IPhoneNumber) => {
        const { success } = await dispatch(verifyAccount(data)) as ISuccessFunction;
        if (!success) return;
        navigation.navigate('VerifyPhoneCodeScreen');
    }

    const sendCodeToVerifyPhone = async (data: IVerifyCode) => {
        dispatch(startLoading())
        const { success } = await dispatch(sendCodeVerification(data)) as ISuccessFunction;
        if (!success) return dispatch(stopLoading());
        dispatch(startValidatePhone())
    }

    const startUploadImage = async (data: Asset) => {

        dispatch(startLoading());
        const formData = new FormData();
        formData.append("photo", { 
            uri: data.uri,
            type: data.type,
            name: data.fileName,
        });        
        await dispatch(updateImageProfile(formData));
        dispatch(stopLoading());

    }

    const startLogoutUser = async () => {
        await AsyncStorage.removeItem('token');
        dispatch(startLogout())
    }

    const startUpdateUserInfo = async (data: IProfile) => {
        dispatch(startLoading())
        await dispatch(updateUserInfo(data)) as ISuccessFunction;
        dispatch(stopLoading()); 
    }

    return { startSignIn, startSignUp, startGoogleSignIn, phoneVerified, user, logged, startRevalidateToken, startVerifyAccount, sendCodeToVerifyPhone, startUploadImage, startLogoutUser, startUpdateUserInfo }


}
