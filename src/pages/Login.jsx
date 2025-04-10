import { useContext, useState } from "react";
import CenterContainer from "../layouts/CenterContainer";
import { deviceInfo } from "../utils/loginUtils";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import { LoaderRing } from "../componenets/Loader";

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
                <div className="font-[Poppins] w-[80%] flex flex-col gap-6">
                    <h1 className="text-3xl">Login to your account </h1>
                    <p className="text-xs text-gray-500">You must have an account first to be able to log in. Log in and save the activities you will do, access from anywhere and anytime.</p>
                    <div className="">
                        <form action="" className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Insert your username" className="input-form" name="username" onChange={(e) => setUsername(e.target.value)} required/>
                            <input type="password" placeholder="Insert your password" className="input-form" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                            {loading ? <LoaderRing/> : ""}
                            <button className="bg-sky-500 py-4 w-[90%] rounded-xl mt-4 text-white cursor-pointer hover:bg-sky-800 transition-all text-lg">Login</button>
                            {errorMsg && <p>{errorMsg}</p>}
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