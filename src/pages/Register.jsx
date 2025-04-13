import { useEffect, useState } from "react";
import CenterContainer from "../layouts/CenterContainer";
import { LoaderRing } from "../componenets/Loader";
import { Link, useNavigate } from "react-router-dom";
import { checkUsername, getUsers, registerUser } from "../utils/userApi";

export default function Register() {
    const [name, setName] = useState()
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [newUser, setNewUser] = useState()
    const [takenUsername, setTakenUsername] = useState()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log(name, username, email, password)
        try {
            const response = await registerUser(name, username, email, password)
            setNewUser(response.data)
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false)
            navigate('/register/succes')
        }

    }

    const checkReqUsername = async () => {
        try {
            const response = await checkUsername(username)
            setTakenUsername(response.data.taken)
            console.log(response.data.taken)
        } catch {

        }
    }

    useEffect(() => {
        checkReqUsername()
    }, [username])

    return (
        <>
            <CenterContainer>
                <div className="font-[Poppins] w-[80%] flex flex-col gap-6">
                    <h1 className="text-3xl">Create account </h1>
                    <p className="text-xs text-gray-500">You must have an account first to be able to log in. Create your account and save the activities you will do, access from anywhere and anytime.</p>
                    <div className="">
                        <form action="" className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                            <input type="text" placeholder="| Name" className="input-form" name="name" onChange={(e) => setName(e.target.value)} required />
                            <input type="text" placeholder="| Username" className="input-form" name="username" onChange={(e) => setUsername(e.target.value) } required />
                            {username && (
                                <p className={`text-sm ${takenUsername ? 'text-red-500' : 'text-green-500'}`}>
                                    {takenUsername ? 'Username already exist' : ''}
                                </p>
                            )}
                            <input type="email" placeholder="| Email" className="input-form" name="email" onChange={(e) => setEmail(e.target.value)} required />
                            <input type="password" placeholder="| New password" className="input-form" name="password" onChange={(e) => setPassword(e.target.value)} required />
                            {loading ? <LoaderRing /> : ""}
                            <button className="bg-sky-500 py-4 w-[90%] rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Create Account</button>
                            {error && <p>{error}</p>}
                        </form>
                        <div className="flex justify-center items-center mt-8">
                            <div className="w-[40%] h-[2px] bg-gray-500"></div>
                            <p className="px-2 text-sm text-gray-500">Or</p>
                            <div className="w-[40%] h-[2px] bg-gray-500"></div>
                        </div>
                        <div className="flex justify-center mt-4">
                            <p className="">Already have account ? <Link to="/login" className=" underline cursor-pointer text-sky-500 hover:text-sky-800 transition-all">Login</Link></p>
                        </div>
                    </div>
                </div>
            </CenterContainer>
        </>
    )
}