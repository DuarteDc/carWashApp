import { Asset,launchCamera,launchImageLibrary } from 'react-native-image-picker';

export const useCamera = () => {

    const openCamera = async (callback: Function) => {
        await launchCamera({
            mediaType: 'photo',
            quality: 0.5
        },async ({ assets }) => {
            if (!assets?.length) return;
            await callback(assets[0])
        });
    }

    const openGalery = async (callback: Function) => {
        await launchImageLibrary({
            mediaType: 'photo',
            quality: 0.5
        },async ({ assets }) => {
            if (!assets?.length) return;
            await callback(assets[0])
        });
    }

    return { openCamera,openGalery }
}