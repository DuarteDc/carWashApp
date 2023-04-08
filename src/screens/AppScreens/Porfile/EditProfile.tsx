import { FC } from 'react'
import { Image, View, Text, Pressable, StyleSheet } from 'react-native'
import { useAuth } from '../../../hooks/useAuth'
import { ICustomer } from '../../../Interfaces/LoginInterface'
import { INavigator } from '../../../Interfaces/NavigatorInterface'
import Layout from '../../../ui/Layout'

import { Formik } from 'formik';
import Input from '../../../ui/Input'
import Ionicons from 'react-native-vector-icons/Ionicons';
import PhoneInput from '../../../ui/PhoneInput'

const initialValues = {
    name: '',
    email: '',
}
const EditProfile = ({ navigation }: { navigation: INavigator }) => {

    const { user } = useAuth(navigation) as { user: ICustomer };

    return (
        <Layout>
            <>
                <View style={{ display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: '100%', marginVertical: 40, }}>
                    <View style={{
                        width: 200,
                        height: 200,
                        borderRadius: 200 / 2,
                        backgroundColor: 'red',
                        overflow: 'hidden',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        <Image source={require('../../assets/logo-color.png')} alt="logo" style={{
                            aspectRatio: 1 * 1.4,
                            height: '100%',
                            width: '100%',
                            resizeMode: 'cover'
                        }} />
                    </View>
                    <View style={{ position: 'absolute', bottom: 50, right: 120, backgroundColor: 'black', padding: 5, borderRadius: 50, zIndex: 20 }}>
                        <Ionicons name="pencil" size={20} color="#fff" />
                    </View>
                    <Text style={{ marginTop: 20, fontSize: 25, color: 'white' }}>{user.fullname}</Text>
                </View>
                <View>
                    <Input
                        placeholder='Nombre'
                        Icon={<Ionicons name="mail" size={20} color="#fff" />}
                        isPassword={false}
                        name="email"
                        containerInputStyle={{}}
                        inputStyle={{}}
                    // onChange={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={values.email}
                    // keyboard={keyboardTypes.emailAddress}
                    // errors={errors || {}}
                    />
                    <Input
                        placeholder='Correo electronico'
                        Icon={<Ionicons name="mail" size={20} color="#fff" />}
                        isPassword={false}
                        name="email"
                        containerInputStyle={{}}
                        inputStyle={{}}
                    // onChange={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={values.email}
                    // keyboard={keyboardTypes.emailAddress}
                    // errors={errors || {}}
                    />
                    <Input
                        placeholder='Correo electronico'
                        Icon={<Ionicons name="mail" size={20} color="#fff" />}
                        isPassword={false}
                        name="email"
                        containerInputStyle={{}}
                        inputStyle={{}}
                    // onChange={handleChange('email')}
                    // onBlur={handleBlur('email')}
                    // value={values.email}
                    // keyboard={keyboardTypes.emailAddress}
                    // errors={errors || {}}
                    />
                    {/* <PhoneInput
                        onChangePrefix={handleChange('prefix')}
                        onBlurPrefix={handleBlur('prefix')}
                        onChange={handleChange('phone_number')}
                        onBlur={handleBlur('phone_number')}
                        prefixValue={values.prefix}
                        phoneValue={values.phone_number}
                        // errors={errors}
                        name="phone_number"
                    /> */}
                    <Pressable style={styles.buttons}>
                        <Text style={{ color: 'white', fontWeight: 'bold', borderColor: 'white' }}>Editar Perfil</Text>
                    </Pressable>
                </View>
            </>
        </Layout>
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

export default EditProfile