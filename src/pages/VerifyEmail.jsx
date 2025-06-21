import { Link } from "react-router-dom"
import CenterContainer from "../layouts/CenterContainer"
import AccountCreated from '../assets/images/AccountCreated.jpg'
import { resendEmailVerification } from "../utils/userApi"
import { useState } from "react"
import { LoaderRing } from "../componenets/Loader"

export const VerifyEmail = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleClick = async () => {
        console.log('click Resend')
        setLoading(true)
        try {
            const response = await resendEmailVerification()
            if (response.status = 200) {
                setError(null)
            }
            console.log(response)
        } catch (error) {
            setError(error)
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <CenterContainer >
                <div className="w-[90%] flex flex-col lg:flex-row items-center justify-center gap-4">
                    <div className="lg:w-1/2 bg-amber-50 ">
                        <img src={AccountCreated} alt="" className="w-full" />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-4 lg:gap-6 lg:w-1/2">
                        <h1 className="text-3xl text-center lg:text-4xl">Your account is not active</h1>
                        <h1 className="text-sm text-center text-gray-500 md:text-lg lg:text-xl">We sent you verification email. Please check your email and activate your account!</h1>
                        <button onClick={handleClick} className="cursor-pointer text-white transition-all bg-sky-500 p-3 rounded-xl hover:bg-sky-800 w-full text-center">{loading ? <LoaderRing /> : 'Resend'}</button>
                    </div>
                </div>
            </CenterContainer>
        </>
    )
}