import * as yup from 'yup';

export const userInfoVlidationSchema = yup.object().shape({
    fullname: yup
    .string()
    .min(8, ({ min }) => `El nombre debe contener al menos ${min} caracteres`)
    .required('El nombre completo es requerido'),
    email: yup
        .string()
        .email("Por favor ingresa un correo valido")
        .required('El correo es requerido'),
})