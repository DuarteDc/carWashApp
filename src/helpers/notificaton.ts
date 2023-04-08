import { ALERT_TYPE, Toast, Dialog } from 'react-native-alert-notification';

export const successToastNotification = () => {
    Toast.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: 'Congrats! this is toast notification success',
    });
}

export const errorToastNotification = (message: string) =>{
    Toast.show({
        type: ALERT_TYPE.DANGER,
        title: 'Oops',
        textBody: message,
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