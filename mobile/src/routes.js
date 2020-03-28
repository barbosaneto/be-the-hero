import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const AppStack = createStackNavigator();
import Casos from './pages/Casos';
import Detalhes from './pages/Detalhes'

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={ {headerShown: false}}>
                <AppStack.Screen name="Casos" component={Casos}/>
                <AppStack.Screen name="Detalhes" component={Detalhes}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}