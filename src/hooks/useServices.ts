import AsyncStorage from '@react-native-async-storage/async-storage';
import { startLoading, stopLoading } from '../reducers/uiReducer';

import { useAppDispatch, useAppSelector } from './useRedux';
import { getServices } from '../actions/servicesActions';


export const useServices = () => {

    const dispatch = useAppDispatch();

    const { services } = useAppSelector((state) => state.services);

    const startLoadServices = async () => {
        dispatch(startLoading())
        await dispatch(getServices());
        return dispatch(stopLoading()); 
    }

    return { startLoadServices, services }


}
