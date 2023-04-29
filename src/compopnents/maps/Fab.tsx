import { FC } from "react"
import { StyleProp,ViewStyle,View,TouchableOpacity,StyleSheet } from 'react-native';

import IonIcon from 'react-native-vector-icons/Ionicons';

interface IFabProps {
    iconName: string;
    onPress: () => void;
    style: StyleProp<ViewStyle>
}

const Fab: FC<IFabProps> = ({ iconName,onPress,style }): JSX.Element => {
    return (
        <View style={{ ...style as any }}>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.blackButton}
            >
                <IonIcon
                    name={iconName}
                    color="white"
                    size={35}

                />

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    blackButton: {
        zIndex: 999,
        height: 50,
        width: 50,
        backgroundColor: "#135dc2",
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.45,
        elevation: 6
    }
})

export default Fab