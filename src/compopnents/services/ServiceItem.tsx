import { FC } from 'react';
import { GestureResponderEvent, Image,Pressable,StyleSheet,Text } from 'react-native';
import { IService } from '../../Interfaces/ServiceInterface';

interface ItemServices {
    openMaps       : (event: GestureResponderEvent) => void;
    service       : IService;
}

const ServiceItem: FC<ItemServices> = ({ openMaps, service }) => {
    return (
        <Pressable style={[styles.itemContainer]} onPress={openMaps}>
            <Image source={require('../../assets/carIndex.png')} alt="logo" style={{
                resizeMode: 'center',
                width: '100%',
                height: '100%',
            }} />
            <Text numberOfLines={1} style={styles.itemName}>{service.name}</Text>
            <Text numberOfLines={1} style={styles.itemCode}>{service.description}</Text>
        </Pressable>
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

export default ServiceItem