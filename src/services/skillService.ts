import { API_URL, authFetch } from "../utils/api";
import { getToken } from "../utils/storage";

export interface Skill {
    _id: string;
    skillName: string;
    proficiency: string;
  }
  
  export const addSkill = async (
    skillName: string,
    proficiency: string
  ): Promise<Skill> => {
    try {
    const token = await getToken();
      const res = await authFetch(`${API_URL}/skills`, {
        method: "POST",
        body: JSON.stringify({ skillName, proficiency }),
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Skill eklenemedi');
      }
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  };
  
  export const getSkills = async (): Promise<Skill[]> => {
    try {
      const token = await getToken();
      const res = await authFetch(`${API_URL}/skills`, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Skill listesi alınamadı');
      }
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  };
  
  export const deleteSkill = async (
    id: string,
  ): Promise<{ success?: boolean; message?: string }> => {
    try {
      const token = await getToken();
      const res = await authFetch(`${API_URL}/skills/${id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || 'Skill silinemedi');
      }
      const data = await res.json();
      return data;
    } catch (err) {
      throw err;
    }
  };