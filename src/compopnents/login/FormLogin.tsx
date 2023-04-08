import { FC } from 'react'
import { Pressable, StyleSheet, Text } from 'react-native';
import { Formik } from 'formik';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Input } from '../../ui/Index'
import { keyboardTypes } from '../../ui/Input';

import { loginValidationSchema } from '../../validations/AuthValidation';

import { ILoginValues, useAuth } from '../../hooks/useAuth';
import { INavigator } from '../../Interfaces/NavigatorInterface';

const initialValues: ILoginValues = {
    email: '',
    password: '',
}

const FormLogin = ({ navigation }: { navigation: INavigator }) => {

    const { startSignIn } = useAuth(navigation);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => startSignIn(values)}
            validationSchema={loginValidationSchema}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <>
                    <Input
                        placeholder='Correo electronico'
                        Icon={<Ionicons name="mail" size={20} color="#fff" />}
                        isPassword={false}
                        name="email"
                        containerInputStyle={{}}
                        inputStyle={{}}
                        onChange={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        keyboard={keyboardTypes.emailAddress}
                        errors={errors || {}}
                    />
                    <Input
                        placeholder='Contraseña'
                        Icon={<MaterialIcons name="lock" size={20} color="#fff" />}
                        isPassword={true}
                        name="password"
                        containerInputStyle={{}}
                        inputStyle={{}}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        keyboard={keyboardTypes.default}
                        errors={errors || {}}
                    />
                    <Pressable style={styles.buttons} onPress={handleSubmit}>
                        <Text style={{ color: 'white', fontWeight: 'bold', borderColor: 'white' }}>Iniciar Sesión</Text>
                    </Pressable>
                </>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 60,
        marginVertical: 10,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#666',
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttons: {
        backgroundColor: '#1548a1',
        paddingVertical: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop: 10,
        maxWidth: '100%'
    }
});

export default FormLogin;