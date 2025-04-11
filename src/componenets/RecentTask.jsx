import NotStarted from '../assets/icon/Not-Started.png'
import InProgress from '../assets/icon/In-Progress.png'
import Completed from '../assets/icon/Completed.png'
import { Link } from 'react-router-dom'

export const RecentTask = ({ dataTodos }) => {
    const statusIcons = {
        "Not started": NotStarted,
        "In progress": InProgress,
        "Completed": Completed
    };
    return (
        <div className="flex flex-col justify-center items-center gap-3">
            {dataTodos.map((dataTodo =>
                <Link key={dataTodo.id} to={`/todo/${dataTodo.id}`} className="w-[90%] border-4 border-b-12 flex items-center p-4 rounded-2xl justify-between">
                    <div className="flex gap-4 items-center basis-5/6">
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-black text-2xl font-bold">{dataTodo.title}</h2>
                            <p className="text-gray-900 text-md">{dataTodo.description}</p>
                            <p className="text-gray-500 text-xs">Created At : {dataTodo.created_at}</p>
                            <div className="flex my-2 gap-1">
                                {dataTodo.categories?.map((category) => (
                                    <div key={category.id} className="bg-sky-400 text-sky-800 text-xs px-2 py-1 rounded-full">
                                        {category.categories_name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse basis-1/6'>
                        <div className=" w-[80%] aspect-square rounded-full overflow-hidden ">
                            <img src={statusIcons[dataTodo.status]} alt="" className='' />
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}