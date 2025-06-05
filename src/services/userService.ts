import { API_URL } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface RegisterResponse {
  token?: string;
  error?: string;
  [key: string]: any;
}

export interface LoginResponse {
  token?: string;
  error?: string;
  [key: string]: any;
}

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  try {
    const res = await fetch(`${API_URL}/users/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    return await res.json();
  } catch (err) {
    return { error: (err as Error).message };
  }
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    console.log(email, password);
    console.log(API_URL);
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data: LoginResponse = await res.json();
    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
    }
    return data;
  } catch (err) {
    return { error: (err as Error).message };
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (err) {
    return null;
  }
};

export const logout = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('token');
  } catch {
    // Hata durumunda sessizce geç
  }
};