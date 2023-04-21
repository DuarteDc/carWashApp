import { useEffect,useRef } from 'react';
import { View,Text,StyleSheet,Image,Pressable } from 'react-native';

import { Modalize } from 'react-native-modalize';

import { useAppSelector } from '../hooks/useRedux';

import { ICustomer } from '../Interfaces/LoginInterface';
import { INavigator } from '../Interfaces/NavigatorInterface';
import { Input,Layout,Map } from '../compopnents/ui/';
import { keyboardTypes } from '../compopnents/ui/Input';
import { usePermissions } from '../hooks/usePermissions';
import { useServices } from '../hooks/useServices';
import ServiceList from '../compopnents/services/ServiceList';

const ServicesScreen = ({ navigation }: { navigation: INavigator }) => {

  const { user } = useAppSelector(state => state.auth) as { user: ICustomer }
  const { askLocationPermission } = usePermissions();
  const { startLoadServices,  } = useServices();

  const modalizeRef = useRef<Modalize>(null);
  const openMaps = () => modalizeRef.current?.open();

  useEffect(()=>{
    startLoadServices()
  },[]);

  useEffect(() => {
    askLocationPermission();
  },[]);

  return (
    <Layout JSXModalize={<Map />} modalizeRef={modalizeRef}>
      <>
        <View style={{ display: 'flex',justifyContent: 'flex-start',flexDirection: 'row',alignItems: 'center' }}>
          <Pressable onPress={() => navigation.navigate('Profile')} style={{ width: 40,height: 40,borderRadius: 40 / 2,overflow: 'hidden',marginRight: 10 }}>
            {
              user?.profile_image ? (
                <Image source={{ uri: user.profile_image }} alt="logo" style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }} />
              ) : (
                <Image source={require('../assets/logo-color.png')} alt="logo" style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                }} />
              )
            }
          </Pressable>
          <Text style={{ color: 'white',fontWeight: 'bold' }}>{user?.fullname}</Text>
        </View>
        <View style={{ display: 'flex',justifyContent: 'space-between',marginVertical: 10,flexDirection: 'row' }}>
          <Input
            placeholder="Buscar"
            // Icon={<MaterialIcons name="search" size={20} color="#fff" />}
            isPassword={false}
            containerInput={{}}
            input={{}}
            keyboard={keyboardTypes.default}
          />
        </View>
        <View style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-between',marginBottom: 20 }}>
          <Text style={{ fontSize: 18,fontWeight: 'bold',color: 'white' }}>Ofertas Especiales</Text>
          <Text style={{ fontSize: 15,color: 'white' }}>Ver todas</Text>
        </View>
        <View style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-between',borderRadius: 50,backgroundColor: '#0d2b6b',overflow: 'hidden',paddingHorizontal: 40,paddingVertical: 30,marginBottom: 20 }}>
          <View style={{ flex: 2,display: 'flex',justifyContent: 'center' }}>
            <Text style={{ fontSize: 50,color: 'white' }}>
              40%
            </Text>
            <Text style={{ fontSize: 20,color: 'white' }}>
              Lorem, ipsum dolor.
            </Text>
            <Text style={{ fontSize: 10,flexGrow: 1,color: 'white' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Image source={require('../assets/carIndex.png')} alt="logo" style={{
              resizeMode: 'center',
              width: 100,
              height: 100
            }} />
          </View>
        </View>
        <View style={{ display: 'flex',flexDirection: 'row',justifyContent: 'space-between',borderRadius: 50 }}>
          <Text style={{ fontSize: 20,color: 'white' }}>
            Servicos Top
          </Text>
        </View>
        <ServiceList
          openMaps={openMaps}
        />

      </>
    </Layout>
  )
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'center',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 30,
    height: 170,
    backgroundColor: '#135dc2',
  },
  itemName: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});

export default ServicesScreen