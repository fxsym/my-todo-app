import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getUsers = async () => {
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get(`${API_URL}users`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Cant create todo' };
    }
}

export const checkUsername = async (reqUsername) => {
    const data = {
        "reqUsername": reqUsername,
    }

    try {
        const response = await axios.post(`${API_URL}checkUsername`, data)
        return response
    } catch (error) {
        throw error.response?.data || { message: 'Cant create todo' };
    }
}

export const registerUser = async (name, username, email, password) => {
    const data = {
        "name": name,
        "username": username,
        "email": email,
        "password": password
    }
    console.log(data)
    try {
        const response = await axios.post(`${API_URL}user`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response
    } catch (error) {
        throw error.response?.data || {message: 'Cant resgister'}
    }
}