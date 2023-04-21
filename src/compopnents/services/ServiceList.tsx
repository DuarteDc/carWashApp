import { FC } from 'react';
import { View } from 'react-native';
import { SimpleGrid } from 'react-native-super-grid'

import ServiceItem from './ServiceItem';

import { MapsFunctions } from '../../Interfaces/ServiceInterface';
import { useServices } from '../../hooks/useServices';

const ServiceList: FC<MapsFunctions> = ({ openMaps }): JSX.Element => {

    const { services } = useServices();

    return (
        <View style={{ flex: 1,marginBottom: 40 }}>
            <SimpleGrid
                listKey={"1"}
                itemDimension={130}
                data={services}
                renderItem={({item}) => (
                    <ServiceItem
                        openMaps={openMaps}
                        service={item}
                    />
                )}
            />
        </View>
    )
}

export default ServiceList