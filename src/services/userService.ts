import { API_URL } from '../utils/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createOrUpdatePersonalDetails, getPersonalDetails } from './personalDetailsService';
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
    const data = await res.json();
    console.log("data register",data);
    return data;
  } catch (err) {
    return { error: (err as Error).message };
  }
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data: LoginResponse = await res.json();
    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
      const details = await getPersonalDetails();
      console.log("details",details);
      console.log("data",data.user);
      if(!details){
        if(data.user.name && data.user.email){
          await createOrUpdatePersonalDetails({
            name: data.user.name,
            email: data.user.email,
            phone: "",
            address: "",
            avatar: "",
            title: ""
          })
        }
        else{
          return { error: "User not found" };
        }
      }
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