import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { getTodo } from "../utils/api"
import CenterContainer from "../layouts/CenterContainer"
import { LoaderRing } from "../componenets/Loader"
import { MainLayout } from "../layouts/MainLayout"
import TodoCard from "../componenets/TodoCard"
import LeftArrow from "../assets/icon/leftarrow.png"

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
            <div className="flex flex-col justify-center items-center px-6 py-4">
                <div className="flex items-start flex-col">
                    <div className="flex p-2 bg-sky-400 rounded-lg text-white">
                        <img src={LeftArrow} alt="" className="w-6 aspect-square" />
                        <Link to='/todos' className="">See all to-dos</Link>
                    </div>
                    <div className="flex flex-col items-center rounded-2xl justify-between">
                        <TodoCard todo={todo} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}