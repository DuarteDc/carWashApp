import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Dimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import LoadingScreen from '../compopnents/ui/LoadingScreen';
import { useAppSelector } from '../hooks/useRedux';

const Layout = ({ children }: { children: JSX.Element }) => {

    let ScreenHeight = Dimensions.get("window").height;

    const { loading } = useAppSelector((state) => state.ui);

    return (
        <LinearGradient
            colors={['#0d2b6b', '#135dc2', '#89C2FF']}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={{ ...styles.lieneal, width: '100%' }}
        >
            <StatusBar translucent={true} backgroundColor="transparent" />
            {
                loading && <LoadingScreen />
            }
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ width: '100%', paddingHorizontal: 10, minHeight: ScreenHeight }}>
                    <AlertNotificationRoot>
                        <View style={{ width: '100%', minHeight: ScreenHeight, marginVertical: 30 }}>
                            {children}
                        </View>
                    </AlertNotificationRoot>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        overflow: 'hidden',
    },
    lieneal: {
        flexWrap: 'wrap',
        overflow: 'hidden'
    }
});

export default Layout;