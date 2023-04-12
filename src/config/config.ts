import { BACKEND_URL } from '@env';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiInstance = axios.create({
    baseURL: 'http://192.168.100.60:3000/api',
    responseType: 'json',
});

apiInstance.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem('token')
        if (token) {
            config.headers.token = token
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default apiInstance;