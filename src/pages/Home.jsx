import { Link } from "react-router-dom";
import CenterContainer from "../layouts/CenterContainer";
import GetStarted from '../assets/images/GetStarted.jpg'

export default function Home() {
    return (
        <>
            <CenterContainer>
            <div className="w-[90%] flex flex-col items-center justify-center gap-4">
                    <img src={GetStarted} alt="" className="w-65"/>
                    <h1 className="text-3xl text-center">Let's Get Started</h1>
                    <h1 className="text-sm text-center text-gray-500">Easy way to manage all your todo list from anywhere and everwhere</h1>
                    <Link to="/login" className="cursor-pointer text-white transition-all bg-sky-500 p-3 rounded-xl hover:bg-sky-800 cursor-pointer w-full text-center">Get Started</Link>
                </div>
            </CenterContainer>
        </>
    )
}