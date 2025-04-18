import { Link } from "react-router-dom"
import InstagramIcon from "../assets/images/InstagramIcon.png"
import GithubIcon from "../assets/images/GithubIcon.png"
import EmailIcon from "../assets/images/EmailIcon.png"

export const HomeFooter = () => {
    return (
        <>
            <div className="bg-sky-400 flex flex-col w-full lg:px-28 pb-10">
                <div className="flex flex-col items-center my-2">
                    <p className="text-sm text-white sm:text-lg">Access your lists anytime, anywhere</p>
                    <h1 className="text-4xl text-white font-bold mt-4 sm:text-6xl">CONTACT</h1>
                    <div className="w-24 h-2 bg-white sm:w-72 sm:mt-2"></div>
                </div>
                <div className="flex flex-col items-center lg:flex-row">
                    <Link to='https://www.instagram.com/fxsym31' className="flex flex-col items-center border-y-1 border-white w-full py-6 gap-2 lg:border-y-0 lg:border-x-1">
                        <img src={InstagramIcon} alt="" className="w-12 sm:w-20"/>
                        <p className="text-sm text-white sm:text-lg">INSTAGRAM</p>
                    </Link>
                    <Link to='https://github.com/fxsym' className="flex flex-col items-center border-y-1 border-white w-full py-6 gap-2 lg:border-y-0 lg:border-x-1">
                        <img src={GithubIcon} alt="" className="w-12 sm:w-20"/>
                        <p className="text-sm text-white sm:text-lg">GITHUB</p>
                    </Link>
                    <Link to='mailto:fsyamsudin24@gmail.com' className="flex flex-col items-center border-y-1 border-white w-full py-6 gap-2 lg:border-y-0 lg:border-x-1">
                        <img src={EmailIcon} alt="" className="w-12 sm:w-20"/>
                        <p className="text-sm text-white sm:text-lg">EMAIL</p>
                    </Link>
                </div>
                {/* <div className="flex justify-center">
                    <h1 className="text-lg p-4 text-white sm:text-2xl">COPYRIGHT</h1>
                </div> */}
            </div>
        </>
    )
}