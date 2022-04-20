import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './splash';
import MainScreen from './main';
import OgFgCalcutingScreen from './ogFgCalcuting';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='ogfg' component={OgFgCalcutingScreen} />
                <Stack.Screen name='main' component={MainScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}