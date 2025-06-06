import { API_URL } from "../utils/api";
import { getToken } from "./userService";

export interface Objective {
    _id?: string;
    userId?: string;
    text: string;
  }
  
  export const getObjective = async (): Promise<Objective | null> => {
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/objectives`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error('Failed to fetch objective');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching objective:', error);
      throw error;
    }
  };
  
  export const createOrUpdateObjective = async (text: string): Promise<Objective> => {
    try {
      const token = await getToken();
      const response = await fetch(`${API_URL}/objectives`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to create/update objectives');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error creating/updating objectives:', error);
      throw error;
    }
  };