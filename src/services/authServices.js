import axios from 'axios';
const API_URL = import.meta.env.VITE_API_AUTH_URL

export const login = async (username, password, device) => {
    const data = {
        "username": username,
        "password": password,
        "device_name": device
    }

    console.log(data);
    try {
        const response = await axios.post(`${API_URL}login`, data);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
};
