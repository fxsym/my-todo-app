export const TodoStatusSkeleton = ({dataTodos}) => {

    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2 lg:flex-row lg:px-12">
            <div to="/" className="w-[90%] bg-gray-900 flex items-center p-4 rounded-2xl justify-between animate-pulse">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <div className="w-20 h-20 bg-gray-500"></div>
                    </div>
                    <div>
                        <div className="w-16 h-4 bg-gray-500 mb-4 rounded-2xl"></div>
                        <div className="w-20 h-2 bg-gray-500 rounded-2xl"></div>
                    </div>
                </div>
            </div>
            <div to="/" className="w-[90%] bg-gray-900 flex items-center p-4 rounded-2xl justify-between animate-pulse">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <div className="w-20 h-20 bg-gray-500"></div>
                    </div>
                    <div>
                        <div className="w-16 h-4 bg-gray-500 mb-4 rounded-2xl"></div>
                        <div className="w-20 h-2 bg-gray-500 rounded-2xl"></div>
                    </div>
                </div>
            </div>
            <div to="/" className="w-[90%] bg-gray-900 flex items-center p-4 rounded-2xl justify-between animate-pulse">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <div className="w-20 h-20 bg-gray-500"></div>
                    </div>
                    <div>
                        <div className="w-16 h-4 bg-gray-500 mb-4 rounded-2xl"></div>
                        <div className="w-20 h-2 bg-gray-500 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}