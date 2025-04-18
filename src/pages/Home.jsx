import { Link } from "react-router-dom";
import CenterContainer from "../layouts/CenterContainer";
import { MainLayout } from "../layouts/MainLayout"
import GetStarted from '../assets/images/GetStarted.jpg'
import { ReviewSlider } from "../componenets/ReviewSlider";
import { HomeFeature } from "../componenets/HomeFeature";
import { HomeFooter } from "../componenets/HomeFooter";

export default function Home() {
    return (
        <>
            <MainLayout>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center py-2 px-8 mt-10 lg:flex-row lg:justify-evenly lg:px-26">
                        <div className="flex flex-col items-center gap-4 lg:w-2/3 lg:gap-10">
                            <h1 className="text-2xl text-center font-bold sm:text-4xl lg:text-left lg:text-5xl">Your list in the cloud, ready when you are.</h1>
                            <p className="text-md text-gray-400 text-center sm:text-xl lg:text-left lg:text-xl">SkyList is a sleek, cloud-based to-do list app that helps users organize and access tasks anytime, anywhere. Perfect for students, professionals, and anyone striving to stay organized in the midst of a busy life.</p>
                            <div className="flex flex-col w-full gap-1">
                                <Link to="/register" className="cursor-pointer text-white transition-all bg-sky-400 p-3 rounded-xl hover:bg-sky-800 cursor-pointer w-full text-center text-lg sm:text-2xl">Lets get started!</Link>
                                <p className="text-sm text-gray-400 text-center sm:text-md">Start now, with a simple step!</p>
                            </div>
                        </div>
                        <img src={GetStarted} alt="" className="w-65 sm:w-100 lg:w-1/2" />
                    </div>
                    <ReviewSlider />
                    <HomeFeature />
                    <HomeFooter />
                </div>
            </MainLayout>
        </>
    )
}