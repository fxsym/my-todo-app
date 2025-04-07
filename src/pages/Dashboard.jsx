import { useEffect, useState } from "react"
import { getTodos } from "../utils/api";

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos()
                setTodos(data.data.data)
                console.log(todos)
            } catch (err) {
                setError('Gagal mengambil data');
            } finally {
                setLoading(false);
            }
        }
        fetchTodos();
    }, [])

    return (
        <>
            <h1>Dashboard</h1>
            <h1>Your todo</h1>
            <ul>
                {todos.map((todo =>
                <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
            
        </>
    )
}