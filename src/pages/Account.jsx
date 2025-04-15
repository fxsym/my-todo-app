import { MainLayout } from "../layouts/MainLayout"
import Avatar from "../assets/images/avatar.jpg"

export const Account = () => {
    return (
        <MainLayout>
            <div className="flex flex-col justify-center items-center gap-2 p-2">
                <div className="w-[90%] flex justify-center">
                    <div className="">
                        <img src={Avatar} alt="" className="w-40"/>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </MainLayout>
    )
}