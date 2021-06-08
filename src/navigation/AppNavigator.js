
import React, { Component } from "react";
import Welcome from '../screens/Welcome/Welcome';
import Home from '../screens/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppNavigator = ({ navigation }) => {

    React.useEffect(() => {
       
    }, []);

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
           <Stack.Navigator
                initialRouteName={"Welcome"}
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
      );

};



export default AppNavigator;