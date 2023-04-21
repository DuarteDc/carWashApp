import { GestureResponderEvent } from "react-native";

export interface MapsFunctions {
    openMaps: (event: GestureResponderEvent) => void;
}

export interface IService {
    _id         :   string;
    name        :   string;
    description :   string;
    status      :   boolean;
    createdAt   :   Date;
    updatedAt   :   Date;
}