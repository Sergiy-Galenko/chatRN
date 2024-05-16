import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image, Alert } from "react-native";
import { styles } from "../styles/styles";
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        if (email === "test@text.com" && password === "test") {
            navigation.navigate('Dashboard'); // Navigate to DashboardScreen
        } else {
            Alert.alert("Invalid Credentials", "The email or password you entered is incorrect.");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require("../../assets/icon.png")}
                    style={styles.logo}
                />
                <Text style={styles.title}>MyChatApp</Text>
            </View>
            <Text style={styles.subtitle}>Account Login</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email Address"
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#a2a2a2"
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default WelcomeScreen;
