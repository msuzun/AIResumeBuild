import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './src/context/AppContext';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      setIsAuthenticated(!!token);
    };
    checkToken();
  }, []);
  if (isAuthenticated === null) return null;
  return (
    <AppProvider>
      <NavigationContainer>
        {isAuthenticated
          ? <RootNavigator setIsAuthenticated={setIsAuthenticated} />
          : <AuthStackNavigator setIsAuthenticated={setIsAuthenticated} />}
      </NavigationContainer>
    </AppProvider>
  );
}

