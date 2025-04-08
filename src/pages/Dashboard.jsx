import { useContext, useEffect, useState } from "react"
import { getTodos } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { MainLayout } from "../layouts/MainLayout";
import CenterContainer from "../layouts/CenterContainer";
import { LoaderRing } from "../componenets/Loader";
import { TodoStatus } from "../componenets/TodoStatus";
import { RecentTask } from "../componenets/RecentTask";

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext);

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

    if (loading) return <CenterContainer><LoaderRing /></CenterContainer>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <>
            <MainLayout>
                <TodoStatus />
                <div className="flex flex-col justify-center items-center gap-2 p-2">
                    <div className="w-[90%] flex items-center my-2 rounded-2xl justify-between">
                        <h1>Recent Task</h1>
                    </div>
                    <div>
                        <RecentTask dataTodos={todos}/>
                    </div>
                </div>
            </MainLayout>

        </>
    )
}