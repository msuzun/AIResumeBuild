// src/screens/LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { login } from '../services/userService';

const LoginScreen = ({ navigation, setIsAuthenticated }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please enter email and password');
            return;
        }
        const result = await login(email, password);
        if (result.token) {
            setIsAuthenticated(true);

        } else {
            Alert.alert('Login Failed', result.error || 'Invalid credentials');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Don't have an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', padding: 20
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center'
    },
    input: {
        borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 15
    }, 
    link: {
        color: '#007AFF', marginTop: 15, textAlign: 'center'
    }
});