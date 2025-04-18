import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getTodos = async () => {
    try {
        const token = localStorage.getItem('token')
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
        const token = localStorage.getItem('token')
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

export const getTodosSearch = async (keyword) => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${API_URL}todos?keyword=${keyword}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.data
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
}

export const createTodo = async (title, description, status, categories) => {
    const token = localStorage.getItem('token')
    const data = {
        "title": title,
        "description": description,
        "status": status,
        "categories": categories,
    }
    console.log(data)
    try {
        const response = await axios.post(`${API_URL}todo/create`, data, {
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

export const getTodo = async ($todoId) => {
    const token = localStorage.getItem('token')
    try {
        const response = await axios.get(`${API_URL}todo/${$todoId}`, {
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

export const updateTodo = async (todoId, title, description, status, categories) => {
    const token = localStorage.getItem('token')
    const data = {
        "title": title,
        "description": description,
        "status": status,
        "categories": categories,
    }
    try {
        const response = await axios.patch(`${API_URL}todo/${todoId}`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              }
        })
        return response.data
    } catch (error) {
        throw error.response?.data || { message: 'Cant update todo' };
    }
}

export const deleteTodo = async (todoId) => {
    const token = localStorage.getItem('token')
    try {
        const request = await axios.delete(`${API_URL}todo/${todoId}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
        console.log("Data deleted")
        return response.data
    } catch (error) {
        throw error.response?.data || {message: 'Cant delete todo'}
    }
}