export const TodoSkeleton = () => {
    return (
        <div className="flex flex-col justify-center items-center px-6 sm:px-8 lg:px-14 gap-3 lg:flex-row flex-wrap ">
            <div className="border-2 border-b-6 flex items-center p-4 rounded-2xl justify-between lg:justify-evenly lg:w-[45%] lg:h-55 xl:h-60 xl:w-[32%] animate-pulse">
                <div className="flex gap-4 items-center basis-5/6 ">
                    <div className='flex flex-col gap-1'>
                        <h2 className="bg-black text-2xl font-bold w-60 h-6 rounded-2xl sm:text-3xl lg:text-2xl"></h2>
                        <p className="bg-black text-md w-60 h-6 rounded-2xl sm:text-lg lg:text-md"></p>
                        <p className="bg-gray-500 text-xs w-40 h-4 rounded-2xl sm:text-sm lg:text-xs"></p>
                        <div className="flex my-2 gap-1 ">
                            <div className="bg-sky-400 text-white w-20 h-6 px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2"></div>
                            <div className="bg-sky-400 text-white w-20 h-6 px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2"></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse basis-1/6'>
                    <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                        <div className='w-16 h-16 bg-black' />
                    </div>
                </div>
            </div>
            <div className="border-2 border-b-6 flex items-center p-4 rounded-2xl justify-between lg:justify-evenly lg:w-[45%] lg:h-55 xl:h-60 xl:w-[32%] animate-pulse">
                <div className="flex gap-4 items-center basis-5/6 ">
                    <div className='flex flex-col gap-1'>
                        <h2 className="bg-black text-2xl font-bold w-60 h-6 rounded-2xl sm:text-3xl lg:text-2xl"></h2>
                        <p className="bg-black text-md w-60 h-6 rounded-2xl sm:text-lg lg:text-md"></p>
                        <p className="bg-gray-500 text-xs w-40 h-4 rounded-2xl sm:text-sm lg:text-xs"></p>
                        <div className="flex my-2 gap-1 ">
                            <div className="bg-sky-400 text-white w-20 h-6 px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2"></div>
                            <div className="bg-sky-400 text-white w-20 h-6 px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2"></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse basis-1/6'>
                    <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                        <div className='w-16 h-16 bg-black' />
                    </div>
                </div>
            </div>
            <div className="border-2 border-b-6 flex items-center p-4 rounded-2xl justify-between lg:justify-evenly lg:w-[45%] lg:h-55 xl:h-60 xl:w-[32%] animate-pulse">
                <div className="flex gap-4 items-center basis-5/6 ">
                    <div className='flex flex-col gap-1'>
                        <h2 className="bg-black text-2xl font-bold w-60 h-6 rounded-2xl sm:text-3xl lg:text-2xl"></h2>
                        <p className="bg-black text-md w-60 h-6 rounded-2xl sm:text-lg lg:text-md"></p>
                        <p className="bg-gray-500 text-xs w-40 h-4 rounded-2xl sm:text-sm lg:text-xs"></p>
                        <div className="flex my-2 gap-1 ">
                            <div className="bg-sky-400 text-white w-20 h-6 px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2"></div>
                            <div className="bg-sky-400 text-white w-20 h-6 px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2"></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row-reverse basis-1/6'>
                    <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                        <div className='w-16 h-16 bg-black' />
                    </div>
                </div>
            </div>
        </div>
    )
}