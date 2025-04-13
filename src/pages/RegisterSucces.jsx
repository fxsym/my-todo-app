import { Link } from "react-router-dom"
import CenterContainer from "../layouts/CenterContainer"
import AccountCreated from '../assets/images/AccountCreated.jpg'

export const RegisterSucces = () => {
    return (
        <>
            <CenterContainer >
                <div className="w-[90%] flex flex-col items-center justify-center gap-4">
                    <img src={AccountCreated} alt="" className="w-65"/>
                    <h1 className="text-3xl text-center">Your account has been created</h1>
                    <h1 className="text-sm text-center text-gray-500">Congratulations! Your account has been created now and your ready to acces your todo list from anywhere and everywhere</h1>
                    <Link to="/login" className="cursor-pointer text-white transition-all bg-sky-500 p-3 rounded-xl hover:bg-sky-800 cursor-pointer w-full text-center">Login Now</Link>
                </div>
            </CenterContainer>
        </>
    )
}