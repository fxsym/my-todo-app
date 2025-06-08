import { useContext, useState } from "react";
import CenterContainer from "../layouts/CenterContainer";
import { deviceInfo } from "../utils/loginUtils";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { LoaderRing } from "../componenets/Loader";
import LoginAnimation from "../assets/animations/LoginAnimation.webm"

import AccountCreated from "../assets/images/AccountCreated.jpg"

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        const device = deviceInfo();
        setLoading(true)

        try {
            await login(username, password, device);
            navigate('/dashboard');
        } catch (err) {
            setErrorMsg(err.message || 'Terjadi kesalahan');
        } finally {
            setLoading(false)
        }
    };

    return (
        <>
            <CenterContainer>
                <div className="flex items-center lg:justify-evenly lg:px-26 overflow-hidden">
                    <div className="font-[Poppins] w-120 flex flex-col gap-6 sm:w-160 lg:w-2/3 p-14 ">
                            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Login to your account </h1>
                            <p className="text-sm text-gray-500 sm:text-lg lg:text-xl">You must have an account first to be able to log in. Log in and save the activities you will do, access from anywhere and anytime.</p>
                        <div className="">
                            <form action="" className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                                <input type="text" placeholder="Insert your username" className="input-form" name="username" onChange={(e) => setUsername(e.target.value)} required />
                                <input type="password" placeholder="Insert your password" className="input-form" name="password" onChange={(e) => setPassword(e.target.value)} required />
                                <button className={`bg-sky-500 py-4 w-full rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-md sm:text-lg lg:text-xl ${loading ? "disabled:" : ""}`}>{loading ? <LoaderRing/> : "Login"}</button>
                                {errorMsg && <p>{errorMsg}</p>}
                            </form>
                            <div className="flex justify-center items-center mt-8">
                                <div className="w-[40%] h-[2px] bg-gray-500"></div>
                                <p className="px-2 text-sm text-gray-500">Or</p>
                                <div className="w-[40%] h-[2px] bg-gray-500"></div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <p className="sm:text-md *:lg:text-lg">Don't have account ? <Link to="/register" className=" underline cursor-pointer text-sky-500 hover:text-sky-800 transition-all sm:text-md lg:text-lg">Create Account</Link></p>
                            </div>
                        </div>
                    </div>
                    <img src={AccountCreated} alt="" className="hidden lg:block w-65 sm:w-100 lg:w-1/2" />
                    {/* <video src={LoginAnimation} alt="" className="hidden lg:block w-65 sm:w-100 lg:w-1/2" /> */}
                </div>
            </CenterContainer>
        </>
    )
}