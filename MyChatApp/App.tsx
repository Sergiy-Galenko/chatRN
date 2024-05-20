import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/pages/WelcomeScreen';
import LoadingScreen from './src/pages/LoadingScreen';
import DashboardScreen from './src/pages/DashboardScreen';
import MusicPlayerScreen from './src/pages/MusicPlayerScreen';
// import SettingsScreen from './src/pages/SettingsScreen';
// import ChatScreen from './src/pages/ChatScreen';

type RootStackParamList = {
    LoadingScreen: undefined;
    WelcomeScreen: undefined;
    Dashboard: undefined;
    MusicPlayer: undefined;
    Settings: undefined;
    Chat: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoadingScreen">
                <Stack.Screen 
                    name="LoadingScreen" 
                    component={LoadingScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="WelcomeScreen" 
                    component={WelcomeScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Dashboard" 
                    component={DashboardScreen} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="MusicPlayer" 
                    component={MusicPlayerScreen} 
                    options={{ headerShown: false }} 
                />
                {/* <Stack.Screen 
                    name="Settings" 
                    component={SettingsScreen} 
                /> */}
                {/* <Stack.Screen 
                    name="Chat" 
                    component={ChatScreen} 
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
