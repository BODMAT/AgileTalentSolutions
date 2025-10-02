import { useNavigate } from "react-router-dom";
import { TagCloudChaotic } from "./TagCloudChaotic";
import { BthSearch } from "../Reusable/BtnSearch";

export function Home() {
    const navigate = useNavigate();
    return (
        <section className="myContainer">
            <div className="min-h-[calc(100vh-100px)] flex gap-0 items-center justify-center max-lg:flex-col">
                <div className="flex-3/5 flex flex-col gap-7 items-start mb-50 max-lg:mb-0 max-lg:items-center max-lg:flex-1">
                    <h1 className="font-bold text-7xl montseratt max-lg:text-center max-lg:mt-6 max-lg:text-5xl lg:max-w-120">Welcome to the Platform</h1>
                    <BthSearch text="Go to search" handler={() => { navigate("/search") }} />
                </div>
                <div className="flex-2/5 mt-10 max-lg:flex-1">
                    <TagCloudChaotic />
                </div>
            </div>
        </section>
    )
}