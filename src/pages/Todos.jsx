import { useEffect, useState, useRef } from "react"
import { MainLayout } from "../layouts/MainLayout"
import { RecentTask } from "../componenets/RecentTask"
import { LoaderRing } from "../componenets/Loader"
import { getTodosSearch } from "../utils/api"
import { ButtonAdd } from "../componenets/ButtonAdd"
import { Link } from "react-router-dom"
import LeftArrow from "../assets/icon/leftarrow.png"

export const Todos = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true) // Initial loading for first fetch
    const [searchLoading, setSearchLoading] = useState(false) // Loading for search
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState('')
    const timeoutRef = useRef()

    const fetchData = async (searchKeyword = '') => {
        const isLoadingSearch = searchKeyword !== ''
        try {
            isLoadingSearch ? setSearchLoading(true) : setLoading(true)
            const data = await getTodosSearch(searchKeyword)
            setTodos(data)
            setError(null)
        } catch (err) {
            setError('Gagal mengambil data')
        } finally {
            isLoadingSearch ? setSearchLoading(false) : setLoading(false)
        }
    }

    useEffect(() => {
        fetchData() // Initial data fetch
    }, [])

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        // Only search if keyword is not empty
        if (keyword.trim()) {
            timeoutRef.current = setTimeout(() => {
                fetchData(keyword)
            }, 500)
        } else {
            // If keyword is empty, show all todos
            fetchData()
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [keyword])

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    if (error) return <p style={{ color: 'red' }}>{error}</p>
    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <div className="w-[90%] flex flex-col items-start my-2 gap-2 rounded-2xl justify-between">
                    <div className="flex p-2 bg-sky-400 rounded-lg text-white items-center">
                        <img src={LeftArrow} alt="" className="w-6 aspect-square"/>
                        <Link to='/dashboard' className="">Back to dashboard</Link>
                    </div>
                    <h1 className="text-2xl font-bold">All your to-dos</h1>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full p-2 border-2 rounded-xl border-b-6 border-sky"
                            placeholder="Search To-dos"
                            value={keyword}
                            onChange={handleChange}
                        />
                        {searchLoading ? (
                            <div className="mt-4"><LoaderRing /></div>
                        ) : loading ? (
                            <div className="mt-4"><LoaderRing /></div>
                        ) : null}
                    </div>
                </div>
                <div>
                    <RecentTask dataTodos={todos} />
                </div>
            </div>
            <ButtonAdd />
        </MainLayout>
    )
}