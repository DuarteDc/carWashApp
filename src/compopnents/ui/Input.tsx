import { useState, FC, useCallback } from 'react';

import { View, TextInput, StyleSheet, Text, Pressable } from 'react-native';

import { FormikErrors } from 'formik';

import Ionicons from 'react-native-vector-icons/Ionicons';

export enum keyboardTypes {
  default       = 'default',
  numeric       = 'numeric',
  emailAddress  = 'email-address'
}

interface InputTypes {
  placeholder           : string;
  Icon                  : JSX.Element,
  isPassword            : boolean;
  name                  : string;
  containerInputStyle   : object | StyleSheet.AbsoluteFillStyle;
  inputStyle            : object | StyleSheet.AbsoluteFillStyle;
  keyboard              : keyboardTypes;
  onChange              : Function;
  onBlur                : Function | void;
  value                 : string;
  errors                : FormikErrors<string | any>;
  editable             ?: boolean;
}

const Input: FC<InputTypes> = ({ placeholder, Icon, isPassword, name, containerInputStyle, inputStyle, keyboard, onChange, onBlur, value, errors = {}, editable = true }) => {

  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(isPassword);

  const handleShowPassword = useCallback( () => { setShow(!show); }, [show]);

  return (
    <>
    <View style={[{ ...styles.input_container, ...containerInputStyle }, focus && { borderWidth: 1.2, borderColor: "#fff" }]}>
      {Icon}
      <TextInput
        onChangeText={(e)=> onChange(e)}
        placeholder={placeholder}
        secureTextEntry={show}
        onFocus={() => setFocus(true)}
        onBlur={() => {setFocus(false); onBlur}}
        style={{ ...styles.input, ...inputStyle }}
        value={value}
        cursorColor="#97DECE"
        editable={editable}
        keyboardType={keyboard}
        placeholderTextColor="#fff"
      />
    <Pressable onPress={handleShowPassword}>
      {isPassword && (
        show ? <Ionicons name="eye" size={20} color="#fff" /> : <Ionicons name="eye-off" size={20} color="#fff" />
      ) }
    </Pressable>
    </View>
    {errors[name] &&
           <Text style={{ fontSize: 12, color: 'white' }}>{ errors[name] }</Text>
       }
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
    flex: 1,
    marginHorizontal: 5,
    color: '#fff'
  }

});

export default Input;