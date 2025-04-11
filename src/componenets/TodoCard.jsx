import NotStarted from '../assets/icon/Not-Started.png'
import InProgress from '../assets/icon/In-Progress.png'
import Completed from '../assets/icon/Completed.png'
import { Link, useNavigate } from 'react-router-dom';
import { use, useEffect, useState } from 'react';
import { TodoConfirmDelete } from './TodoConfirmDelete';
import { deleteTodo } from '../utils/api';

export default function TodoCard({ todo }) {
    const [showConfirmDelete, setShowConfirmDelete] = useState(false)
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();


    const statusIcons = {
        "Not started": NotStarted,
        "In progress": InProgress,
        "Completed": Completed
    };

    const handleClickDelete = () => {
        setShowConfirmDelete(true)
    }

    const handleConfirm = async (confirmed) => {
        if (!confirmed) {
            setShowConfirmDelete(false)
            return
        }

        if (confirmed) {
            try {
                setLoading(true);
                setError(null);
                await deleteTodo(todo.id);
            } catch (err) {
                setError("Failed to delete. Please try again.");
                setShowConfirmDelete(false);
            } finally {
                setLoading(false)
                setShowConfirmDelete(false);
                navigate('/todos', {replace: true});
            }

        }
    }

    return (
        <>
            <TodoConfirmDelete show={showConfirmDelete} onConfirm={handleConfirm} loading={loading} />
            <div className="w-[90%] flex flex-col my-2 gap-2 items-center">
                <div className="w-full border-b-2 border-black">
                    <h1 className="text-2xl font-bold pb-1">{todo.title}</h1>
                    <div className=" ">
                        <p className="text-gray-500 text-xs">Created At : {todo.created_at}</p>
                    </div>
                    <div className="flex my-2 gap-1">
                        {todo.categories?.map((category) => (
                            <div key={category.id} className="bg-sky-400 text-sky-800 text-xs px-2 py-1 rounded-full">
                                {category.categories_name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`${todo.status === "Not started"
                    ? "bg-red-400"
                    : todo.status === "In progress"
                        ? "bg-sky-400"
                        : "bg-emerald-400"
                    } p-2 rounded-md flex items-center justify-between`}>
                    <div className="flex gap-4 items-center basis-5/6">
                        <div className='flex flex-col gap-1'>
                            <p className="text-black text-md font-bold">{todo.status}</p>
                        </div>
                    </div>
                    <div className='flex flex-row-reverse basis-1/6'>
                        <div className="w-[80%] aspect-square rounded-full overflow-hidden ">
                            <img src={statusIcons[todo.status]} alt="" className='' />
                        </div>
                    </div>
                </div>

                <div className=" border-2 border-b-8 border-black w-full p-4 rounded-lg min-h-80">
                    <p className='text-md font-bold'>Description :</p>
                    <p className="text-sm py-2 text-gray-500">{todo.description}</p>
                </div>

                <div className='my-2 w-full justify-center flex gap-4'>
                    <Link to={`/todo/edit/${todo.id}`} className='p-2 bg-sky-400 w-[30%] rounded-lg flex justify-center cursor-pointer hover:bg-sky-800'>
                        Edit
                    </Link>
                    <button className='p-2 bg-red-400 w-[30%] rounded-lg flex justify-center cursor-pointer hover:bg-red-800' onClick={handleClickDelete}>Delete</button>
                </div>

            </div>
        </>
    )
}