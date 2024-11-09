import {StatusBar} from 'expo-status-bar';
import {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native';
import IntroScreen from './views/IntroScreen';
import MainScreen from "./views/MainScreen";

export default function App() {
    const [isLoading, setIsLoading] = useState(false);
    setTimeout(() => {
        setIsLoading(true);
    }, 2000);
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            {isLoading ? <MainScreen/> : <IntroScreen/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

        marginTop: StatusBar.currentHeight,
    },
});
