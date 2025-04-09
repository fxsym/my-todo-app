import { Link } from 'react-router-dom'
import RightArr from '../assets/images/RightArr.png'
import NotStarted from '../assets/icon/Not-Started.png'
import InProgress from '../assets/icon/In-Progress.png'
import Completed from '../assets/icon/Completed.png'
import { useEffect, useState } from 'react'

export const TodoStatus = ({dataTodos}) => {
    // const [status, setStatus] = useState([])
    // const [notStarted, setNotStarted] = useState()
    // const [inProgress, setInProgress] = useState()
    // const [completed, setCompleted] = useState()

    // useEffect(() => {
    //     const allStatus = dataTodos.map(todo => todo.status);
    //     setStatus(allStatus);
    //     setNotStarted(allStatus.filter(x => x==="Not started").length)
    //     setInProgress(allStatus.filter(x => x==="In progress").length)
    //     setCompleted(allStatus.filter(x => x==="Completed").length)
    //   }, []);

    const [statusCounts, setStatusCounts] = useState({
        notStarted: 0,
        inProgress: 0,
        completed: 0
      });
    
      useEffect(() => {
        const counts = dataTodos.reduce((acc, todo) => {
          if (todo.status === "Not started") acc.notStarted++;
          else if (todo.status === "In progress") acc.inProgress++;
          else if (todo.status === "Completed") acc.completed++;
          return acc;
        }, { notStarted: 0, inProgress: 0, completed: 0 });
    
        setStatusCounts(counts);
      }, [dataTodos]);

    return (
        <div className="flex flex-col justify-center items-center gap-2 p-2">
            <Link to="/" className="w-[90%] bg-red-400 flex items-center p-4 rounded-2xl justify-between">
                <div className="flex gap-4 items-center basis-5/6">
                    <div className="w-[20%] aspect-square rounded-full overflow-hidden">
                        <img src={NotStarted} alt="" />
                    </div>
                    <div>
                        <h2 className="text-black text-2xl font-bold">Not Started</h2>
                        <p className="text-gray-800 text-lg">{statusCounts.notStarted} To-dos</p>
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
                        <p className="text-gray-800 text-lg">{statusCounts.inProgress} To-dos</p>
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
                        <h2 className="text-black text-2xl font-bold">Completed</h2>
                        <p className="text-gray-800 text-lg">{statusCounts.completed} To-dos</p>
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