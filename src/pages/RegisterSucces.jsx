import { Link } from "react-router-dom"
import CenterContainer from "../layouts/CenterContainer"

export const RegisterSucces = () => {
    return (
        <>
            <CenterContainer >
                <div className="flex flex-col items-center">
                    <h1>Your account has been created</h1>
                    <Link to="/login" className="underline cursor-pointer text-sky-500 hover:text-sky-800 transition-all">Login Now</Link>
                </div>
            </CenterContainer>
        </>
    )
}