import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveData = async (key:string,data:any) => {
    try{
        await AsyncStorage.setItem(key,JSON.stringify(data));
    }catch(error){
        console.error("Error saving data:",error);
    }
}

export const getData = async (key:string) => {
    try{
        const data = await AsyncStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }catch(error){
        console.error("Error getting data:",error);
        return null;
    }
}

export const deleteData = async (key:string) => {
    try{
        await AsyncStorage.removeItem(key);
    }catch(error){
        console.error("Error deleting data:",error);
    }
}

export const clearStorage = async () => {
    try{
        await AsyncStorage.clear();
    }catch(error){
        console.error("Error clearing storage:",error);
    }
}

export const getAllKeys = async () => {
    try{
        const keys = await AsyncStorage.getAllKeys();
        return keys;
    }catch(error){
        console.error("Error getting all keys:",error);
        return [];
    }
}

export const hasKey = async (key:string) => {
    try{
        const keys = await getAllKeys();
        return keys.includes(key);
    }catch(error){
        console.error("Error checking if key exists:",error);
        return false;
    }
}
export const saveToken = async (token: string): Promise<void> => {
    await AsyncStorage.setItem('token', token);
};
  
export const getToken = async (): Promise<string | null> => {
    return await AsyncStorage.getItem('token');
};