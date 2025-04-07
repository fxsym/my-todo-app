import axios from 'axios';

const API_URL = 'http://todo-list-app.test/api/';

export const getTodos = async () => {
    try {
        const token =localStorage.getItem('token')
        const response = await axios.get(`${API_URL}todos`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response
    } catch (error) {
        throw error.response?.data || { message: 'Login gagal' };
    }
}