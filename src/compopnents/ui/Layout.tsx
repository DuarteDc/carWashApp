import { FC, RefObject } from 'react';
import { StyleSheet, ScrollView, SafeAreaView, StatusBar, Dimensions, View } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { AlertNotificationRoot } from 'react-native-alert-notification';
import { LoadingScreen } from '.';

import { useAppSelector } from '../../hooks/useRedux';

import ModalizeUI from './ModalizeUI';
import { IHandles } from 'react-native-modalize/lib/options';
interface ILayout { 
    children     :  JSX.Element;
    JSXModalize ?: JSX.Element;
    modalizeRef ?: RefObject<IHandles>
}

const Layout: FC<ILayout> = ({ children, JSXModalize, modalizeRef }): JSX.Element => {

    const ScreenHeight = Dimensions.get("window").height;

    const { loading } = useAppSelector((state) => state.ui);

    return (
        <LinearGradient
            colors={['#0d2b6b', '#135dc2', '#89C2FF']}
            start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
            style={{ ...styles.lieneal, width: '100%' }}
        >
            <StatusBar translucent={true} backgroundColor="transparent"  />
            {
                loading && <LoadingScreen />
            }
            <SafeAreaView style={styles.container}>
                <ModalizeUI modalizeRef={modalizeRef}>
                    { JSXModalize }
                </ModalizeUI>
                <ScrollView style={{ width: '100%', minHeight: ScreenHeight }}>
                    <AlertNotificationRoot>
                        <View style={{ width: '100%', minHeight: ScreenHeight, marginVertical: 30, }}>
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
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',               
    },
    lieneal: {
        flexWrap: 'wrap',
        overflow: 'hidden'
    }
});

export default Layout;