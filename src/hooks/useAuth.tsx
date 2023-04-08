import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { login, register, loginWithGoogle, revalidateToken, verifyAccount, sendCodeVerification } from '../actions/authActions';
import { useAppDispatch, useAppSelector } from './useRedux';

import { startLoading, stopLoading } from '../reducers/uiReducer';

import { ICustomer } from '../Interfaces/LoginInterface'
import { useNavigation } from '@react-navigation/native';
import { INavigator } from '../Interfaces/NavigatorInterface';

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

export const useAuth = (navigation: INavigator) => {

    const dispatch = useAppDispatch();

    const { user, logged, phoneVerified } = useAppSelector((state) => state.auth);

    const startSignIn = async (data: ILoginValues) => {
        dispatch(startLoading())
        const { success, user } = await dispatch(login(data)) as ISuccessFunction;

        if (!success) return dispatch(stopLoading());

        if (user?.phone && !user.phone?.verified) {
            navigation.replace('VerifyPhoneScreen');
            return dispatch(stopLoading())
        }
        if (user?.phone && user.phone.verified) {
            navigation.replace('Home');
            return dispatch(stopLoading())
        }
    }

    const startSignUp = async (data: IRegisterValues) => await dispatch(register(data));

    const startRevalidateToken = async () => await dispatch(revalidateToken());

    const startGoogleSignIn = async () => {
        await GoogleSignin.hasPlayServices()
        const { idToken } = await GoogleSignin.signIn();
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
        navigation.replace('Home')
    }


    return { startSignIn, startSignUp, startGoogleSignIn, phoneVerified, user, logged, startRevalidateToken, startVerifyAccount, sendCodeToVerifyPhone }


}
