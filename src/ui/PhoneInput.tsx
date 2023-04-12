import { FC, useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

import { FormikErrors } from 'formik';
import { Picker } from '@react-native-picker/picker';


import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';
import CountryFlag from "react-native-country-flag";


interface InputTypes {
    name                : string;
    onChange            : Function;
    onBlur              : Function | void;
    prefixValue         : string;
    phoneValue          : string;
    errors              : FormikErrors<string | any>
    onChangePrefix      : Function;
    onBlurPrefix        : Function;
  }

const PhoneInput:FC<InputTypes> = ({onChange, onBlur, errors, name, phoneValue, prefixValue, onChangePrefix, onBlurPrefix}) => {

    const [focus, setFocus] = useState<boolean>(false);
    const [value, setValue] = useState<string>(prefixValue);

    return (
        <>
            <View style={[styles.input_container, focus && { borderWidth: 1.2, borderColor: "#fff" }]}>
                <CountryFlag isoCode={value} size={15} />
                <Picker
                    selectedValue={value}
                    mode='dropdown'
                    onValueChange={(itemValue) => {
                        setValue(itemValue);
                        onChangePrefix(`+${getCountryCallingCode(itemValue)}`)
                        }
                    }
                    style={{ backgroundColor: '#1548a1', flex: 1, color: '#fff', width: '100%' }}
                >
                    {getCountries().map((country) => (
                        <Picker.Item
                            style={{ backgroundColor: '#1548a1', color: '#fff' }}
                            key={country} value={country} label={`${en[country]} + ${getCountryCallingCode(country)}`}
                        />
                    ))}
                </Picker>
                <TextInput
                    placeholder='(000)  000 0000'
                    onFocus={() => setFocus(true)}
                    onBlur={() => { setFocus(false); onBlur }}
                    value={phoneValue}
                    onChangeText={(e)=> onChange(e)}
                    cursorColor="#fff"
                    keyboardType="numeric"
                    placeholderTextColor="#fff"
                    style={styles.input}
                />
            </View>
            { errors[name] && <Text style={{ fontSize: 12, color: 'white' }}>{ errors[name] }</Text> }
        </>
    )
}


const styles = StyleSheet.create({
    input_container: {
        height: 60,
        marginVertical: 10,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#1548a1',
        paddingHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    input: {
        flex: 2,
        color: '#fff',
    },
});

export default PhoneInput