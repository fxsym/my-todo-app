import axios from 'axios';
const API_URL = import.meta.env.VITE_API_AUTH_URL

export const login = async (username, password, device) => {
    const data = {
        "username": username,
        "password": password,
        "device_name": device
    }
    try {
        const response = await axios.post(`${API_URL}login`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
};

export const logout = async () => {
    const token = localStorage.getItem('token')
    const data = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(data);
    try {
        const response = await axios.get(`${API_URL}logout`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
};
