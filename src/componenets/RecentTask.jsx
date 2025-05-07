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

    const truncateText = (text, limit) => {
        const words = text.split(' '); // Memisahkan teks ke dalam array kata
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + ' ...'; // Gabungkan kembali dan tambahkan elipsis
        }
        return text;
      };

    return (
        <div className="flex flex-col justify-center items-center px-6 sm:px-8 lg:px-14 gap-3 lg:flex-row flex-wrap">
            {dataTodos.map((dataTodo =>
                <Link key={dataTodo.id} to={`/todo/${dataTodo.id}`} className="border-2 border-b-6 flex items-center p-4 rounded-2xl justify-between lg:justify-evenly lg:w-[45%] lg:h-55 xl:h-60 xl:w-[32%]">
                    <div className="flex gap-4 items-center basis-5/6">
                        <div className='flex flex-col gap-1'>
                            <h2 className="text-black text-2xl font-bold sm:text-3xl lg:text-2xl">{dataTodo.title}</h2>
                            <p className="text-gray-900 text-md sm:text-lg lg:text-md">{truncateText(dataTodo.description, 8)}</p>
                            <p className="text-gray-500 text-xs sm:text-sm lg:text-xs">Created At : {dataTodo.created_at}</p>
                            <div className="flex my-2 gap-1">
                                {dataTodo.categories?.map((category) => (
                                    <div key={category.id} className="bg-sky-400 text-white text-xs px-2 py-1 rounded-full sm:text-sm sm:py-2 sm:px-2">
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