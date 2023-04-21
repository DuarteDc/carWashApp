import { ALERT_TYPE, Toast, Dialog } from 'react-native-alert-notification';

export const successToastNotification = (message: string) => {
    Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Excelente',
        textBody: message,
        autoClose: true,
    });
}

export const errorToastNotification = (message: string = 'Parece que hubo un error - Intenta más tarde') =>{
    Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Oops',
        textBody: message,
        autoClose: true,
    });
}

export const errorDialogNotification = (message: string) => {
    Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Oops',
        textBody: message,
        button: 'close',
      })
}