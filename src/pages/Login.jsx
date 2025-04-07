import { useState } from "react";
import CenterContainer from "../layouts/CenterContainer";
import { login } from "../services/authServices";
import { deviceInfo } from "../utils/loginUtils";
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        const device = deviceInfo();

        try {
          const data = await login(username, password, device);
          localStorage.setItem('token', data.token);
          // Masukan token ke db
          
          console.log('Token dari API:', data.token);
          navigate('/dashboard');
        } catch (err) {
          setErrorMsg(err.message || 'Terjadi kesalahan');
        }
      };

    return (
        <>
            <CenterContainer>
                <div className="font-[Poppins] w-[80%] flex flex-col gap-6">
                    <h1 className="text-3xl">Login to your account </h1>
                    <p className="text-xs text-gray-500">You must have an account first to be able to log in. Log in and save the activities you will do, access from anywhere and anytime.</p>
                    <div className="">
                        <form action="" className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Insert your username" className="input-form" name="username" onChange={(e) => setUsername(e.target.value)} required/>
                            <input type="password" placeholder="Insert your password" className="input-form" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                            <button className="bg-sky-500 py-4 w-[90%] rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Login</button>
                        </form>
                        <div className="flex justify-center items-center mt-8">
                            <div className="w-[40%] h-[2px] bg-gray-500"></div>
                            <p className="px-2 text-sm text-gray-500">Or</p>
                            <div className="w-[40%] h-[2px] bg-gray-500"></div>
                        </div>
                        <div className="flex justify-center mt-4">
                        <p className="">Don't have account ? <a href="/register" className=" underline cursor-pointer text-sky-500 hover:text-sky-800 transition-all">Create Account</a></p>
                        </div>
                    </div>
                </div>
            </CenterContainer>
        </>
    )
}