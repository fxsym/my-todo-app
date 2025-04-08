import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL

export const validateToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const response = await axios.get(`${API_URL}user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    return null;
  }
};
