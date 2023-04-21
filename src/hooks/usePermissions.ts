import { Platform } from 'react-native';
import { PERMISSIONS,PermissionStatus,check, request } from 'react-native-permissions';

export const usePermissions = () => {

    const checkLocationPermission = async () => {
        if (Platform.OS === 'ios') return  await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    const askLocationPermission = async () => {
        if (Platform.OS === 'ios') return await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    }

    return { checkLocationPermission, askLocationPermission }

}
