import { Link } from "react-router-dom";
import CenterContainer from "../layouts/CenterContainer";
import { MainLayout } from "../layouts/MainLayout"
import GetStarted from '../assets/images/GetStarted.jpg'
import { ReviewSlider } from "../componenets/ReviewSlider";

export default function Home() {
    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center gap-4 py-2 px-8">
                    <div className="flex flex-col items-center mt-10 gap-4">
                        <h1 className="text-2xl text-center font-bold">Your list in the cloud, ready when you are.</h1>
                        <p className="text-md text-gray-500 text-center">SkyList is a sleek, cloud-based to-do list app that helps users organize and access tasks anytime, anywhere.</p>
                        <div className="flex flex-col w-full gap-1">
                            <Link to="/register" className="cursor-pointer text-white transition-all bg-sky-400 p-3 rounded-xl hover:bg-sky-800 cursor-pointer w-full text-center">Lets get started!</Link>
                            <p className="text-sm text-gray-500 text-center">Start now, with a simple step!.</p>
                        </div>
                    </div>
                    <img src={GetStarted} alt="" className="w-65" />
                    <ReviewSlider />
                    <h1 className="text-3xl text-center">Let's Get Started</h1>
                    <h1 className="text-sm text-center text-gray-500">Easy way to manage all your todo list from anywhere and everwhere</h1>
                </div>
            </MainLayout>
        </>
    )
}