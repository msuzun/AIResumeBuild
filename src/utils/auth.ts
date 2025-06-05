import { API_URL } from './api';

interface RegisterResponse {
  // Buraya dönen response'un tipini ekleyebilirsiniz
  // ör: success: boolean; message?: string; user?: any;
  [key: string]: any;
}

export const register = async (
  name: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password })
  });
  return res.json();
};