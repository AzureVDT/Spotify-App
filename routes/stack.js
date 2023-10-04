import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: "Welcome" }}
                />
                <Stack.Screen name="Login" component={SignInScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};