import { useEffect, useState } from "react"
import { MainLayout } from "../layouts/MainLayout"
import { RecentTask } from "../componenets/RecentTask"
import { LoaderRing } from "../componenets/Loader"
import { getTodos } from "../utils/api"
import CenterContainer from "../layouts/CenterContainer"
import { ButtonAdd } from "../componenets/ButtonAdd"

export const Todos = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searc, setSearc] = useState('')

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
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <div className="w-[90%] flex flex-col items-start my-2 gap-2 rounded-2xl justify-between">
                    <h1 className="text-2xl font-bold">All your to-dos</h1>
                    <input type="text" className="w-full p-2 border-2 rounded-xl border-b-6" placeholder="Search To-dos"/>
                </div>
                <div>
                    <RecentTask dataTodos={todos} />
                    Card Todos
                </div>
            </div>
            <ButtonAdd />
        </MainLayout>
    )
}