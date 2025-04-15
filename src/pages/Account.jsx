import { MainLayout } from "../layouts/MainLayout"
import Avatar from "../assets/images/avatar.jpg"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { updateUser } from "../utils/userApi"
import { LoaderRing } from "../componenets/Loader"

export const Account = () => {
    const { user } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        setName(user.name)
        setUsername(user.username)
        setEmail(user.email)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError(null)
        try {
            const response = await updateUser(user.id, name, username, email)
            return response.data
        } catch (err) {
            setError(err.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-4 p-2">
                <div className="w-[90%] flex flex-col items-center gap-4">
                    <div className="w-40 rounded-full overflow-hidden">
                        <img src={Avatar} alt="" />
                    </div>
                    <p className="text-3xl font-bold">{user.name}</p>
                </div>
                <div className="w-[90%] flex flex-col gap-1">
                    <p className="text-lg text-black font-bold"> Personal info</p>
                    <p className="text-gray-500"> Update your account details.</p>
                </div>
                <div className="w-full">
                    <form action="" className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                        <input type="text" placeholder="| Name" className="input-form" name="name" onChange={(e) => setName(e.target.value)} value={name} required />
                        <input type="text" placeholder="| Username" className="input-form" name="username" onChange={(e) => setUsername(e.target.value)} value={username} required />
                        <input type="email" placeholder="| Email" className="input-form" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required />
                        {loading ? <LoaderRing /> : ""}
                        <button className="bg-sky-500 py-4 w-[90%] rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Save your account</button>
                        {error && <p className="text-red-500">{error}</p>}
                    </form>
                </div>
            </div>
        </MainLayout>
    )
}