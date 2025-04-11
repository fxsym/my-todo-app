export const TodoConfirmDelete = ({show, onConfirm}) => {

    return (
        <>
            <div className={`fixed inset-0 bg-black opacity-70 transition-all duration-300 ${show ? '' : 'hidden'}`}></div>
            <div className={`flex flex-col gap-2 fixed w-[90%] bg-white shadow-black shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg p-4 transition-all duration-300 ${show ? 'scale-100' : 'scale-0'} `}>
                <p className="text-black">Are you sure want to deleted this todo?</p>
                <button className="text-white bg-red-400 p-2 rounded-xl hover:" onClick={() => onConfirm(true)}>Yes</button>
                <button className="text-white bg-sky-400 p-2 rounded-xl hover:" onClick={() => onConfirm(false)}>No</button>
            </div>
        </>
    )
}