import { Dimensions,Image,ImageBackground,SafeAreaView,Text,View } from "react-native"
import { Layout } from "../../../compopnents/ui"
import { StatusBar } from "react-native"
import { Platform,NativeModules } from 'react-native';
const { StatusBarManager } = NativeModules;

const screenWidth = Dimensions.get("window").width;

const BecomePartner = () => {
    return (
        <Layout>
            <>
                <View style={{ height: '40%',minWidth: screenWidth }}>
                    <ImageBackground source={require('../../../assets/logo-color.png')} alt="logo" style={{
                        minWidth: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                        resizeMode="cover"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text>dasdas</Text>
                </View>
            </>
        </Layout>
    )
}

export default BecomePartner