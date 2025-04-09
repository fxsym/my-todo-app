import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async () => {
    try {
        const token =localStorage.getItem('token')
        const response = await axios.get(`${API_URL}todos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
}

export const getTodosLimit = async (limit) => {
    try {
        const token =localStorage.getItem('token')
        const response = await axios.get(`${API_URL}todos?limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
}