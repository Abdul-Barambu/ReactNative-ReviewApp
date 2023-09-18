import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Review from '../screens/Review';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const StackRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Review" component={Review} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackRoute