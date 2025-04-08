import { Link } from 'react-router-dom'
import RightArr from '../assets/images/RightArr.png'
import NotStarted from '../assets/icon/Not-Started.png'
import InProgress from '../assets/icon/In-Progress.png'
import Completed from '../assets/icon/Completed.png'

export const TodoStatus = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2">
            <Link to="/" className="w-[90%] bg-red-400 flex items-center p-4 rounded-2xl justify-between">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <img src={NotStarted} alt="" />
                    </div>
                    <div>
                        <h2 className="text-black text-2xl font-bold">Not Started</h2>
                        <p className="text-gray-800 text-lg">12 Tasks</p>
                    </div>
                </div>
                <div className='flex flex-row-reverse basis-1/6'>
                    <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                        <img src={RightArr} alt="" className=''/>
                    </div>
                </div>
            </Link>
            <Link to="/" className="w-[90%] bg-sky-400 flex items-center p-4 rounded-2xl justify-between">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <img src={InProgress} alt="" />
                    </div>
                    <div>
                        <h2 className="text-black text-2xl font-bold">In Progress</h2>
                        <p className="text-gray-800 text-lg">12 Tasks</p>
                    </div>
                </div>
                <div className='flex flex-row-reverse basis-1/6'>
                    <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                        <img src={RightArr} alt="" className=''/>
                    </div>
                </div>
            </Link>
            <Link to="/" className="w-[90%] bg-emerald-400 flex items-center p-4 rounded-2xl justify-between">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <img src={Completed} alt="" />
                    </div>
                    <div>
                        <h2 className="text-black text-2xl font-bold">Done</h2>
                        <p className="text-gray-800 text-lg">12 Tasks</p>
                    </div>
                </div>
                <div className='flex flex-row-reverse basis-1/6'>
                    <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                        <img src={RightArr} alt="" className=''/>
                    </div>
                </div>
            </Link>
        </div>
    )
}