import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Ooops!!</h1>
            <p>Sorry, an expected error has occured</p>
            <p>{error.statusText || error.message}</p>
        </div>
    )
}

export default ErrorPage