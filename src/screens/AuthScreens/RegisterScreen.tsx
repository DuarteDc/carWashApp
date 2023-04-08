
import { Text, View, Pressable, StyleSheet, Image, Dimensions } from 'react-native';
import Input from '../../ui/Input';
import Layout from '../../ui/Layout';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { keyboardTypes } from '../../ui/Input';
import FormRegister from '../../compopnents/register/FormRegister';

const RegisterScreen = ({ navigation }) => {

  return (
    <Layout>
      <>
        <View style={{ flex: 1, display: 'flex', alignContent: 'center', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <Image source={require('../../assets/logo2.png')} alt="logo" style={{
            width: '100%',
            height: '100%',
            aspectRatio: 1 * 1.5,
            resizeMode: 'center'
          }} />
        </View>
        <View>
          <FormRegister />
          <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginVertical: 20 }}>
            <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
              <Text style={{ color: '#fff', fontWeight: '600' }}>Continuar con</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }}>
              <View
                style={{
                  borderRadius: 20,
                  borderColor: '#fff',
                  padding: 10,
                  borderWidth: 2,
                  marginHorizontal: 10
                }}
              >
                <Ionicons name='logo-apple' size={30} color="#fff" />
              </View>
              <View
                style={{
                  borderRadius: 20,
                  borderColor: '#fff',
                  padding: 10,
                  borderWidth: 2,
                  marginHorizontal: 10
                }}
              >
                <Ionicons name='logo-google' size={30} color="#fff" />
              </View>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ color: '#ccc' }}>¿Ya tienes cuenta?</Text>
              <Pressable onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{ color: '#fff', fontWeight: '600', marginHorizontal: 5 }}>Iniciar Sesión</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </>
    </Layout>
  )
}

export default RegisterScreen