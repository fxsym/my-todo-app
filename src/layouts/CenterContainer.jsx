export default function CenterContainer({children}) {
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                {children}
            </div>
        </>
    )
}