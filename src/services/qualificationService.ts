import { API_URL } from "../utils/api";
import { getToken } from "./userService";

export interface Qualification {
    _id?: string;
    userId?: string;
    degree?: string;
    institution?: string;
    duration?: string;
    description?: string;
  }
  export const getQualifications = async (): Promise<Qualification[]> => {
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/qualifications`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch qualifications');
      return await response.json();
    } catch (error) {
      console.error('Error fetching qualifications:', error);
      throw error;
    }
  };

  export const createQualification = async (qualification: Omit<Qualification, '_id' | 'userId'>): Promise<Qualification> => {
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/qualifications`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(qualification),
      });
      if (!response.ok) throw new Error('Failed to create qualification');
      return await response.json();
    } catch (error) {
      console.error('Error creating qualification:', error);
      throw error;
    }
  };

  export const updateQualification = async (id: string, updates: Partial<Qualification>): Promise<Qualification> => {
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/qualifications/${id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updates),
      });
      if (!response.ok) throw new Error('Failed to update qualification');
      return await response.json();
    } catch (error) {
      console.error('Error updating qualification:', error);
      throw error;
    }
  };
  export const deleteQualification = async (id: string): Promise<void> => {
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/qualifications/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Failed to delete qualification');
    } catch (error) {
      console.error('Error deleting qualification:', error);
      throw error;
    }
  };