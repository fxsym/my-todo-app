export default function CenterContainer({children}) {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen">
                {children}
            </div>
        </>
    )
}