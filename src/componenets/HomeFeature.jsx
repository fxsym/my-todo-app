import CloudImage from "../assets/images/CloudImage.png"
import MultiDeviceImage from "../assets/images/MultiDeviceImage.png"
import SearchImage from "../assets/images/SearchImage.png"

export const HomeFeature = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-8 py-2 px-8 lg:px-28">
                <div className="flex flex-col items-center gap-1 lg:flex-row lg:items-center lg:justify-evenly">
                    <div className="flex flex-col items-start lg:w-4/10 lg:gap-8">
                        <h1 className="text-xl text-sky-400 font-bold sm:text-2xl lg:text-4xl">Cloud Sync</h1>
                        <p className="text-sm sm:text-lg lg:text-xl">SkyList is built on a cloud-first infrastructure, enabling seamless synchronization of your to-do lists across all devices. Whether you're using a laptop at work, a tablet at home, or a phone on the go, your tasks stay consistently updated in real-time.</p>
                    </div>
                    <img src={CloudImage} alt="" className="rounded-lg w-80 lg:w-5/10" />
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-evenly">
                    <div className="flex flex-col items-start lg:w-4/10 lg:gap-8 lg:order-2">
                        <h1 className="text-xl text-sky-400 font-bold sm:text-2xl lg:text-4xl">Multi-Device Access</h1>
                        <p className="text-sm sm:text-lg lg:text-xl">SkyList is designed to be fully responsive and accessible from any device with a web browser—no installation required. Whether you're using a laptop, tablet, or smartphone, SkyList adapts to your screen size and platform, ensuring a smooth and consistent user experience everywhere.</p>
                    </div>
                    <img src={MultiDeviceImage} alt="" className="rounded-lg w-80 lg:w-5/10 lg:order-1" />
                </div>
                <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-evenly">
                    <div className="flex flex-col items-start lg:w-4/10 lg:gap-8">
                        <h1 className="text-xl text-sky-400 font-bold sm:text-2xl lg:text-4xl">Search & Filter</h1>
                        <p className="text-sm sm:text-lg lg:text-xl">SkyList helps you stay on top of your tasks with powerful search and filtering tools. Whether you're looking for a specific task or organizing your list by category, priority, or due date, the Search & Filter feature makes it easy to find exactly what you need in seconds.</p>
                    </div>
                    <img src={SearchImage} alt="" className="rounded-lg w-80 lg:w-5/10" />
                </div>
            </div>
        </>
    )
}