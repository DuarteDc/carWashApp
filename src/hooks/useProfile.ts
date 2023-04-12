import { Asset } from 'react-native-image-picker';
import { useAppDispatch } from './useRedux';
import { updateImageProfile } from '../actions/profileActions';

export const useProfile = () => {

    const dispatch = useAppDispatch();

    const startUploadImage = async (data: Asset) => {

        let a = { 
            uri: data.uri,
            type: data.type,
            name: data.fileName,
        }
        const formData = new FormData();
        formData.append("photo", a);

        
        await dispatch(updateImageProfile(formData));


    }

    return { startUploadImage }

}