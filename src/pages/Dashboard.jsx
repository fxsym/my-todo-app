import { useContext, useEffect, useState } from "react"
import { getTodos } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { MainLayout } from "../layouts/MainLayout";

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos()
                setTodos(data)
            } catch (err) {
                setError('Gagal mengambil data');
            } finally {
                setLoading(false);
            }
        }

        fetchTodos()
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <>
            <MainLayout>
            <h1>Dashboard</h1>
            <h1>Your todo</h1>
            <h2>Halo, {user?.name}</h2>
            <ul>
                {todos.map((todo =>
                <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            </MainLayout>
            
        </>
    )
}