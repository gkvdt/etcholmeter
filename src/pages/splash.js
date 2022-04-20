import { View ,Text} from "react-native";

export default function SplashScreen({navigation }){
    setInterval(() => {
        navigation.navigate('main')
    }, 3000);
    return (
        <View>
            <Text>Splash</Text>
        </View>
    )
}