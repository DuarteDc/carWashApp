import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Por favor ingresa un correo valido")
        .required('El correo es requerido'),
    password: yup
        .string()
        .min(8, ({ min }) => `La contraseña debe contener ${min} characteres`)
        .required('La contraseña es requerida'),
})

export const registerValidationSchema = yup.object().shape({
    fullname: yup
        .string()
        .min(8, ({ min }) => `El nombre debe contener al menos ${min} caracteres`)
        .required('El nombre completo es requerido'),
    email: yup
        .string()
        .email("Por favor ingresa un correo valido")
        .required('El correo es requerido'),
    password: yup
        .string()
        .min(8, ({ min }) => `La contraseña debe contener ${min} caracteres`)
        .required('La contraseña es requerida'),
})

export const phoneNumberValidations = yup.object().shape({
    prefix: yup
        .string()
        .required('El código es requerido'),
    phone_number: yup
        .string()
        .required('El número telefonico es requerido')
        .min(10, ({ min }) => `El número telefonico debe contener mínimo ${min} caracteres`)
})