import { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import VirtualKeyboard from 'react-native-virtual-keyboard';
import { useAuth } from '../../hooks/useAuth';
import { INavigator } from '../../Interfaces/NavigatorInterface';

const CELL_COUNT = 4;

const FormVerifyPhoneCode = ({ navigation }: { navigation: INavigator }) => {

    const { sendCodeToVerifyPhone } = useAuth(navigation);


    const sendCode = async (event: string) => {
        if (event.length === 4) await sendCodeToVerifyPhone({ code: +event });
    }


    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });


    return (
        <>
            <View>
                <CodeField
                    ref={ref}
                    {...props}
                    caretHidden={false}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    maxLength={4}
                    textContentType="oneTimeCode"
                    keyboardType="number-pad"
                    showSoftInputOnFocus={false}
                    renderCell={({ index, symbol, isFocused }) => (
                        <View key={index} style={[styles.cell, isFocused && styles.focusCell]} >
                            <Text
                                style={styles.textCell}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                        </View>
                    )}
                />
            </View>
            <View style={{ flex: 1, overflow: 'hidden' }}>
                <VirtualKeyboard
                    color='white'
                    pressMode='string'
                    onPress={(e: string) => { setValue(e); sendCode(e)}}
                    rowStyle={styles.keyboradRowStyle}
                    cellStyle={styles.keyboradCellStyle}
                />
            </View>
            <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <Text>No recibi mi código</Text>
                <Text style={{ fontWeight: 'bold', color: '#0d2b6b', fontSize: 15 }}>Reenviar</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    root: { color: 'white', },
    cell: {
        lineHeight: 70,
        display: 'flex',
        flex: 1,
        height: 70,
        overflow: 'hidden',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        marginHorizontal: 10,
        borderColor: '#ffff',
        textAlign: 'center',
        color: '#fff',
        borderRadius: 10,
    },
    textCell: {
        fontSize: 50,
        color: 'white'
    },
    focusCell: {
        borderColor: '#fff',
    },
    keyboradRowStyle: {
        width: '100%',
        height: '20%'
    },
    keyboradCellStyle: {
        width: '100%',
    }
});

export default FormVerifyPhoneCode