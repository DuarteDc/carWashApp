import { ImageBackground,StyleSheet,Text,TouchableOpacity,View } from "react-native"
import { Layout } from "../../../compopnents/ui"

const BecomePartner = ({ navigation }) => {
    return (
        <Layout>
            <>
                <View style={{ height: 300,width: '100%',paddingHorizontal: -10,top: -30,display: 'flex',justifyContent: 'center',overflow: 'hidden' }}>
                    {/* <View style={{ height: '100%',position: 'absolute',zIndex: 10,width: '100%', backgroundColor: '#111', opacity: .2 }}></View> */}
                    <ImageBackground source={require('../../../assets/logo-color.png')} alt="logo" style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                        resizeMode="stretch"
                    />
                    {/* <Text style={{ color: "white",fontSize: 25,fontWeight: 'bold',paddingHorizontal: 20,zIndex: 20 }} numberOfLines={2}>Registrate y genera ingresos con nosotros</Text> */}
                </View>
                <View style={{ marginHorizontal: 10,top: -55 }}>
                    <View style={[styles.card,styles.shadowProp]}>
                        <Text style={styles.title}>Genera ingresos adicionales para ti y tu familia</Text>
                        <Text style={styles.cardBody}>Renta tu vehículo en la app de Uber cuando no lo estes utilizando para generar ganancias adicionales que te permitan a ti, y a tu familia, alcanzar sus sueños.</Text>
                    </View>
                    <View style={[styles.card,styles.shadowProp]}>
                        <Text style={styles.title}>Obtén soporte 24/7</Text>
                        <Text style={styles.cardBody}>Cuando eres parte de la comunidad de la app de Uber, nunca estás solo. La app de Uber te ofrece diferentes canales de soporte para contestar todas tus preguntas relacionadas a la administración de tu flotilla.</Text>
                    </View>
                    <View style={[styles.card,styles.shadowProp]}>
                        <Text style={styles.title}>Genera ingresos adicionales para ti y tu familia</Text>
                        <Text style={styles.cardBody}>Renta tu vehículo en la app de Uber cuando no lo estes utilizando para generar ganancias adicionales que te permitan a ti, y a tu familia, alcanzar sus sueños.</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FinishBecomePartner')}>
                        <Text style={styles.textButton}>Quiero ser socio</Text>
                    </TouchableOpacity>
                </View>
            </>
        </Layout>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        paddingHorizontal: 30,
        paddingVertical: 35,
        backgroundColor: '#135dc2',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 6
    },
    title: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    cardBody: {
        color: 'white',
        fontSize: 16.5,
        textAlign: 'justify',
    },
    button: {
        backgroundColor: '#135dc2',
        paddingVertical: 20,
        width: '100%',
        borderRadius: 40
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold'
    },
    shadowProp: {
        shadowOffset: { width: -2,height: 5 },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

})


export default BecomePartner