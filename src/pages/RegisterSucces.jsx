import { Link } from "react-router-dom"
import CenterContainer from "../layouts/CenterContainer"
import AccountCreated from '../assets/images/AccountCreated.jpg'

export const RegisterSucces = () => {
    return (
        <>
            <CenterContainer >
                <div className="w-[90%] flex flex-col lg:flex-row items-center justify-center gap-4">
                    <div className="lg:w-1/2 bg-amber-50 ">
                        <img src={AccountCreated} alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 lg:w-1/2">
                        <h1 className="text-3xl text-center lg:text-4xl">Your account has been succesfully active</h1>
                        <h1 className="text-sm text-center text-gray-500 md:text-lg lg:text-xl">Congratulations! Your account has been actived now and your ready to acces your todo list from anywhere and everywhere</h1>
                        <Link to="/login" className="cursor-pointer text-white transition-all bg-sky-500 p-3 rounded-xl hover:bg-sky-800 cursor-pointer w-full text-center">Login Now</Link>
                    </div>
                </div>
            </CenterContainer>
        </>
    )
}