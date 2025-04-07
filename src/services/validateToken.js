import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL

export const validateToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const response = await axios.get(`${API_URL}user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};
