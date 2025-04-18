import { Link } from "react-router-dom"
import InstagramIcon from "../assets/images/InstagramIcon.png"
import GithubIcon from "../assets/images/GithubIcon.png"
import EmailIcon from "../assets/images/EmailIcon.png"

export const HomeFooter = () => {
    return (
        <>
            <div className="bg-sky-400 flex flex-col w-full">
                <div className="flex flex-col items-center my-2">
                    <p className="text-sm text-white">Access your lists anytime, anywhere</p>
                    <h1 className="text-4xl text-white font-bold mt-4">OUR CONTACT</h1>
                    <div className="w-24 h-2 bg-white"></div>
                </div>
                <div className="flex flex-col items-center">
                    <Link to='https://www.instagram.com/fxsym31' className="flex flex-col items-center border-y-1 border-white w-full py-6 gap-2">
                        <img src={InstagramIcon} alt="" className="w-12"/>
                        <p className="text-sm text-white">INSTAGRAM</p>
                    </Link>
                    <Link to='https://github.com/fxsym' className="flex flex-col items-center border-b-1 border-white w-full py-6 gap-2">
                        <img src={GithubIcon} alt="" className="w-12"/>
                        <p className="text-sm text-white">GITHUB</p>
                    </Link>
                    <Link to='mailto:fsyamsudin24@gmail.com' className="flex flex-col items-center border-b-1 border-white w-full py-6 gap-2">
                        <img src={EmailIcon} alt="" className="w-12"/>
                        <p className="text-sm text-white">EMAIL</p>
                    </Link>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-lg p-4 text-white">COPYRIGHT</h1>
                </div>
            </div>
        </>
    )
}