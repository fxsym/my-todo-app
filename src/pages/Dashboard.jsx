import { useContext, useEffect, useState } from "react"
import { getTodos, getTodosLimit } from "../utils/api";
import { AuthContext } from "../context/AuthContext";
import { MainLayout } from "../layouts/MainLayout";
import CenterContainer from "../layouts/CenterContainer";
import { LoaderRing } from "../componenets/Loader";
import { TodoStatus } from "../componenets/TodoStatus";
import { RecentTask } from "../componenets/RecentTask";
import { Link } from "react-router-dom";

export default function Dashboard() {
    const [todos, setTodos] = useState([]);
    const [countTodos, setCountTodos] = useState(0)
    const [todosLimit, setTodosLimit] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos()
                setTodos(data)
                setCountTodos(data.length)
            } catch (err) {
                setError('Gagal mengambil data');
            } finally {
                setLoading(false);
            }
        }

        fetchTodos()
    }, [])

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodosLimit(5)
                setTodosLimit(data)
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
                <div className="flex flex-col py-2 px-8 sm:px-12">
                    <h1 className="text-2xl font-bold sm:text-3xl">Hi, {user.name}&#128075;</h1>
                    <p className="text-md text-gray-500 sm:text-lg">Your now have {countTodos} todos</p>
                </div>
                <TodoStatus dataTodos={todos} />
                <div className="flex flex-col justify-center items-center gap-2 p-2">
                    <div className="w-[90%] flex items-start my-2 rounded-2xl justify-between">
                        <h1 className="text-2xl font-bold sm:text-3xl">Recent To-dos</h1>
                        <Link to="/todos" className="p-2 underline rounded-xl text-gray-500 hover:text-black sm:text-lg">See all to-dos</Link>
                    </div>
                    <div>
                        <RecentTask dataTodos={todosLimit} />
                    </div>
                </div>
            </MainLayout>

        </>
    )
}