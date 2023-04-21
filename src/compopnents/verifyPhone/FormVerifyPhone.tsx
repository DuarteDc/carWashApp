import { Pressable, Text, View } from 'react-native';
import { Formik } from 'formik';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { phoneNumberValidations } from '../../validations/AuthValidation';
import { useAuth } from '../../hooks/useAuth';
import { INavigator } from '../../Interfaces/NavigatorInterface';
import { PhoneInput } from '../ui';

const initialValues = {
    prefix: 'MX',
    phone_number: '',
}

const FormVerifyPhone = ({ navigation }: { navigation: INavigator }) => {

    const { startVerifyAccount } = useAuth(navigation);

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => startVerifyAccount(values)}
            validationSchema={phoneNumberValidations}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                <View style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    <PhoneInput
                        onChangePrefix={handleChange('prefix')}
                        onBlurPrefix={handleBlur('prefix')}
                        onChange={handleChange('phone_number')}
                        onBlur={handleBlur('phone_number')}
                        prefixValue={values.prefix}
                        phoneValue={values.phone_number}
                        errors={errors}
                        name="phone_number"
                    />
                    <View style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable style={{ padding: 20, backgroundColor: '#1548a1', borderRadius: 100, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                            onPress={handleSubmit}
                        >
                            <MaterialIcons name="chevron-right" size={40} color="#fff" />
                        </Pressable>
                    </View>

                    <Text style={{ color: 'white', textAlign: 'center' }}>Terminos y condiciones</Text>
                </View>
            )}
        </Formik>
    )
}

export default FormVerifyPhone