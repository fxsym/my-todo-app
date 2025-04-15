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
        throw error.response?.data || { message: 'Cant resgister' }
    }
}

export const updateUser = async (idUser, name, username, email) => {
    const token = localStorage.getItem('token')
    const data = {
        "name": name,
        "username": username,
        "email": email,
    }
    const endpoint = `${API_URL}user/${idUser}`;
    console.log(data, idUser, endpoint)
    try {
        const response = await axios.patch(`${API_URL}user/${idUser}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response
    } catch (error) {
        throw error.response?.data || { message: 'Cant update your account' }
    }
}

export const changePassword = async (idUser, oldPassword, password) => {
    const token = localStorage.getItem('token')
    const data = {
        "old_password": oldPassword,
        "password": password
    }
    try {
        const response = await axios.patch(`${API_URL}user/changepass/${idUser}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
        return response
    } catch (error) {
        throw error.response?.data || { message: 'Cant update your account' }
    }
} 