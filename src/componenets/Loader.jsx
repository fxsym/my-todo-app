import RingLoader from "react-spinners/RingLoader";

export const LoaderRing = () => {
    return (
        <div>
            <div className="flex items-center justify-center">
                <RingLoader color="#0f8fbc" size={20}/>
                <p className="text-black text-xs ml-2">Processing</p>
            </div>
        </div>
    )
}