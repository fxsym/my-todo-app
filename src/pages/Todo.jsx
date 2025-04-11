import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getTodo } from "../utils/api"
import CenterContainer from "../layouts/CenterContainer"
import { LoaderRing } from "../componenets/Loader"
import { MainLayout } from "../layouts/MainLayout"
import TodoCard from "../componenets/TodoCard"

export const Todo = () => {
    const { todoId } = useParams()
    const [todo, setTodo] = useState({})
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchTodo = async () => {
            setLoading(true)
            try {
                const response = await getTodo(todoId)
                if (!response.data || Object.keys(response.data).length === 0) {
                    navigate('/todos')
                    return
                }
                setTodo(response.data)
            } catch (err) {
                setError('Gagal mengambil data');
                navigate('/todos')
            } finally {
                setLoading(false)
            }
        }
        fetchTodo()
    }, [])

    if (!loading && todo.length === 0) {
        navigate('/todos')
        return null
    }
    if (loading) return <CenterContainer><LoaderRing /></CenterContainer>;

    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <TodoCard todo={todo} />
                <div>
                </div>
            </div>
        </MainLayout>
    )
}