import { Navbar } from "../componenets/Navbar"

export const MainLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
}