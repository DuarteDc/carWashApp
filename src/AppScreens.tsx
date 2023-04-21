import { NavigationContainer } from "@react-navigation/native"
import Navigator from "./navigator/Navigator"

const AppScreens = () => {
    return (
        <NavigationContainer>
            <Navigator />
        </NavigationContainer>
    )
}

export default AppScreens