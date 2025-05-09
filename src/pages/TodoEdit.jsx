import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { MainLayout } from "../layouts/MainLayout"
import { LoaderRing } from "../componenets/Loader"
import { createTodo, getTodo, updateTodo } from "../utils/api"
import { useNavigate } from 'react-router-dom';
import CenterContainer from "../layouts/CenterContainer"
import LeftArrow from "../assets/icon/leftarrow.png"


export const TodoEdit = () => {
    const { todoId } = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [categories, setCategories] = useState([])
    const [todo, setTodo] = useState({})
    const [nullCategories, setNullCategories] = useState(false)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const [errFetch, setErrFetch] = useState()
    const [loadingFetch, setLoadingFetch] = useState(false)
    const navigate = useNavigate();

    const dataCategories = [
        { label: "Task", value: 1 },
        { label: "Work", value: 2 },
        { label: "Study", value: 3 },
        { label: "Personal", value: 4 },
        { label: "Money", value: 5 },
        { label: "Sosial", value: 6 },
        { label: "Health", value: 7 },
        { label: "Hoby", value: 8 },
        { label: "Productifity", value: 9 },
    ]

    useEffect(() => {
        const fetchTodo = async () => {
            setLoadingFetch(true)
            try {
                const response = await getTodo(todoId)
                const data = response.data;
                setTodo(data)
                setTitle(data.title)
                setDescription(data.description)
                setStatus(data.status)
                const categoryIds = data.categories.map((cat) => cat.id);
                setCategories(categoryIds);
            } catch (err) {
                setErrFetch(err)
            } finally {
                setLoadingFetch(false)
            }
        }
        fetchTodo()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)

        if (categories.length === 0) {
            setNullCategories(true)
        } else {
            setNullCategories(false)
        }

        try {
            await updateTodo(todoId, title, description, status, categories)
            navigate(`/todo/${todoId}`);
        } catch (err) {
            console.log(err)
            setError(err)
        } finally {
            setLoading(false)
        }
    }

    if (loadingFetch) return <CenterContainer><LoaderRing /></CenterContainer>;

    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-2 p-2 px-6">
                <div className="flex flex-col items-start my-2 gap-2 rounded-2xl justify-between">
                    <div className="flex p-2 bg-sky-400 rounded-lg text-white items-center">
                        <img src={LeftArrow} alt="" className="w-6 aspect-square" />
                        <Link to='/todos' className="">Back ..</Link>
                    </div>
                    <h1 className="text-2xl font-bold">Update to-do</h1>
                    <form action="" className="w-full flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-md mb-4">
                                {error.message || 'Terjadi kesalahan saat menyimpan data'}
                            </div>
                        )}
                        <input
                            type="text"
                            className="w-full p-2 border-2 rounded-xl border-b-6 border-sky"
                            placeholder="Title"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                        <textarea
                            type=""
                            className="w-full p-2 border-2 rounded-xl border-b-6 border-sky h-50 resize-none"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            required
                        />
                        <div className="flex flex-col gap-3 w-full">
                            <p>Status</p>
                            <div className="flex justify-between gap-2">
                                <select name="" id="" value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="p-2 border rounded-lg w-full">
                                    <option value="Not started">Not started</option>
                                    <option value="In progress">In progress</option>
                                    <option value="Completed">Completed</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <p>Categories</p>
                            {nullCategories ? <p className=" text-red-500">U must choose at least 1 category</p> : ""}
                            {/* {error ? <p style={{ color: 'red' }}>{error?.message || "An error occurred"}</p> : ""} */}
                            <div className="flex flex-wrap gap-2">
                                {dataCategories.map((category) => {
                                    const isChecked = categories.includes(category.value);

                                    return (
                                        <label
                                            key={category.value}
                                            className={`items-center gap-2 py-2 p-2 rounded-full flex justify-center cursor-pointer transition-colors duration-200 ${isChecked ? 'bg-sky-800 text-white hover:bg-sky-500' : 'bg-sky-400 hover:bg-sky-800'
                                                }`}
                                        >
                                            <input
                                                type="checkbox"
                                                value={category.value}
                                                onChange={(e) => {
                                                    const checked = e.target.checked;
                                                    const value = parseInt(e.target.value);

                                                    if (checked) {
                                                        setCategories([...categories, value]);
                                                    } else {
                                                        setCategories(categories.filter((cat) => cat !== value));
                                                    }
                                                }}
                                                className="w-5 h-5 hidden"
                                            />
                                            {category.label}
                                        </label>
                                    );
                                })}
                            </div>
                        </div>
                        {loading ? <LoaderRing /> : ""}
                        <button className="bg-sky-400 py-4 w-[90%] rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Save</button>
                    </form>

                </div>
                <div>

                </div>
            </div>
        </MainLayout>
    )
}