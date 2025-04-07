import axios from 'axios';

export const validateToken = async () => {
  const token = localStorage.getItem('token');
  if (!token) return false;

  try {
    const response = await axios.get('http://todo-list-app.test/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    return false;
  }
};
