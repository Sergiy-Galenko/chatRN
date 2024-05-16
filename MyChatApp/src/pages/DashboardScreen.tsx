import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleLogout = () => {
        // Here, we would clear any stored tokens or states indicating a user session
        navigation.navigate('Welcome'); // Navigate back to the Welcome/Login screen
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Your Dashboard</Text>
            <Text style={styles.subtitle}>This is a simple dashboard screen of the app.</Text>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});

export default DashboardScreen;
