import { getToken } from "./storage";

export const API_URL = "http://10.0.2.2:5000/api";

export const authFetch = async (
    url: string,
    options: RequestInit = {}
  ): Promise<Response> => {
    const token = await getToken();
    return fetch(url, {
      ...options,
      headers: {
        ...(options.headers || {}),
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  };