import CloudImage from "../assets/images/CloudImage.png"
import MultiDeviceImage from "../assets/images/MultiDeviceImage.png"
import SearchImage from "../assets/images/SearchImage.png"

export const HomeFeature = () => {
    return (
        <>
            <div className="flex flex-col items-center gap-8 py-2 px-8 ">
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-xl text-sky-400">Cloud Sync</h1>
                    <p className="text-sm">SkyList is built on a cloud-first infrastructure, enabling seamless synchronization of your to-do lists across all devices. Whether you're using a laptop at work, a tablet at home, or a phone on the go, your tasks stay consistently updated in real-time.</p>
                    <img src={CloudImage} alt="" className="rounded-lg"/>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-xl text-sky-400">Multi-Device Access</h1>
                    <p className="text-sm">SkyList is designed to be fully responsive and accessible from any device with a web browser—no installation required. Whether you're using a laptop, tablet, or smartphone, SkyList adapts to your screen size and platform, ensuring a smooth and consistent user experience everywhere.</p>
                    <img src={MultiDeviceImage} alt="" className="rounded-lg"/>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <h1 className="text-xl text-sky-400">Search & Filter</h1>
                    <p className="text-sm">SkyList helps you stay on top of your tasks with powerful search and filtering tools. Whether you're looking for a specific task or organizing your list by category, priority, or due date, the Search & Filter feature makes it easy to find exactly what you need in seconds.</p>
                    <img src={SearchImage} alt="" className="rounded-lg"/>
                </div>
            </div>
        </>
    )
}