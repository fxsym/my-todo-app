import { useRouteError } from "react-router-dom";
import CenterContainer from "../layouts/CenterContainer";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <CenterContainer>
            <div className="flex flex-col items-center">
                <h1>Ooops!!</h1>
                <p>Sorry, an expected error has occured</p>
                <p>{error.statusText || error.message}</p>
            </div>
        </CenterContainer>
    )
}

export default ErrorPage