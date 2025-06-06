import { API_URL } from "../utils/api";
import { getToken } from "../utils/storage";

export interface PersonalDetails {
    _id?: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    avatar?: string;
    title: string;
}
export const getPersonalDetails = async (): Promise<PersonalDetails | null> => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/personal-details`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Failed to fetch personal details');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching personal details:', error);
        throw error;
    }
};

export const createOrUpdatePersonalDetails = async (details: Omit<PersonalDetails, '_id' | 'userId'>): Promise<PersonalDetails> => {
    try {
        const token = await getToken();
        const response = await fetch(`${API_URL}/personal-details`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });

        if (!response.ok) {
            throw new Error('Failed to create/update personal details');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error creating/updating personal details:', error);
        throw error;
    }
};
export const uploadAvatar = async (imageUri: string): Promise<PersonalDetails> => {
    try {
        const token = await getToken();
        const formData = new FormData();
        formData.append('avatar', {
            uri: imageUri,
            type: 'image/jpeg',
            name: 'avatar.jpg',
        } as any);

        const response = await fetch(`${API_URL}/personal-details/avatar`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });

        if (!response.ok) {
            throw new Error('Failed to upload avatar');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error uploading avatar:', error);
        throw error;
    }
};
