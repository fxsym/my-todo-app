import { Link } from "react-router-dom"

export const ButtonCreate = () => {
    return (
        <button to="create" className="fixed w-14 h-14 bg-sky-500 bottom-5 right-5 rounded-2xl">     
            <div className="flex h-full w-full items-center justify-center">
                <p className="font-light text-5xl">+</p>
            </div>
        </button>
    )
}