import { MainLayout } from "../layouts/MainLayout"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { changePassword, updateUser } from "../utils/userApi"
import { LoaderRing } from "../componenets/Loader"
import AccountUpdated from "../assets/images/AccountUpdated.jpg"
import { getTodos } from "../utils/api"

export const Account = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [loadingPass, setLoadingPass] = useState(false)
    const [error, setError] = useState()
    const [show, setShow] = useState(false)
    const [errorPass, setErrorPass] = useState()
    const [countTodos, setCountTodos] = useState(null)

    useEffect(() => {
        setName(user.name)
        setUsername(user.username)
        setEmail(user.email)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError(null)
        try {
            const response = await updateUser(user.id, name, username, email)
            setShow(true)
            return response.data
        } catch (err) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    const handleChangePassword = async (e) => {
        e.preventDefault()
        setLoadingPass(true)
        setErrorPass(null)
        try {
            const response = await changePassword(user.id, oldPassword, password)
            setShow(true)
            return response.data
        } catch (err) {
            setErrorPass(err.message || "Something went wrong")
        } finally {
            setLoadingPass(false)
            console.log("Password succes cahnge")
        }
    }

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const data = await getTodos()
                setCountTodos(data.length)
            } catch (err) {
                setError('Gagal mengambil data');
            } 
        }
        fetchTodos()
    }, [])

    return (
        <MainLayout>
            <div className="flex flex-col items-center">
                <div className={`fixed inset-0 bg-black opacity-70 transition-all duration-300 ${show ? '' : 'hidden'}`}></div>
                <div className={`flex flex-col gap-2 fixed w-[90%] bg-white shadow-black shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 transition-all duration-300 items-center ${show ? 'scale-100' : 'scale-0'} `}>
                    <p className="text-black">Your account has been succesfully update</p>
                    <img src={AccountUpdated} alt="" className="w-15" />
                    <div className="absolute bg-sky-500 rounded-full w-10 h-10 flex justify-center items-center -top-3 -right-3" onClick={(e) => setShow(false)}>
                        X
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 p-2 mt-2 lg:mt-6">
                    <div className="w-full flex flex-col">
                        <p className="text-3xl font-bold text-start text-sky-500">My Account</p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex flex-col items-center">
                            <p className="text-2xl font-bold">{user.name}</p>
                            <p className="text-sm text-gray-500">{countTodos ? countTodos : "..."} Todos</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-start">
                        <div className="flex flex-col border-2 border-b-6 p-4 rounded-2xl">
                            <div className="w-full flex flex-col gap-1">
                                <p className="text-lg text-black font-bold"> Personal info</p>
                                <p className="text-gray-500"> Update your account details.</p>
                            </div>
                            <div className="w-full">
                                <form action="" className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                                    <input type="text" placeholder="| Name" className="input-form" name="name" onChange={(e) => setName(e.target.value)} value={name} required />
                                    <input type="text" placeholder="| Username" className="input-form" name="username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                                    <input type="email" placeholder="| Email" className="input-form" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                                    {loading ? <LoaderRing /> : ""}
                                    <button className="bg-sky-500 py-4 w-full rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Save your account</button>
                                    {error && <p className="text-red-500">{error}</p>}
                                </form>
                            </div>
                        </div>
                        <div className="flex flex-col border-2 border-b-6 p-4 rounded-2xl">
                            <div className="w-full flex flex-col gap-1">
                                <p className="text-lg text-black font-bold"> Change your password</p>
                                <p className="text-gray-500"> You can change your password here</p>
                            </div>
                            <div className="w-full">
                                <form action="" className="flex flex-col items-center gap-2" onSubmit={handleChangePassword}>
                                    <input type="password" placeholder="| Old Password" className="input-form" name="Old Password" onChange={(e) => setOldPassword(e.target.value)} required />
                                    <input type="password" placeholder="| New Password" className="input-form" name="New Password" onChange={(e) => setPassword(e.target.value)} required />
                                    {loadingPass ? <LoaderRing /> : ""}
                                    <button className="bg-sky-500 py-4 w-full rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Change password</button>
                                    {errorPass && <p className="text-red-500">{errorPass}</p>}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}