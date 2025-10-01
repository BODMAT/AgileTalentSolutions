import { useNavigate, useLocation } from "react-router-dom";
export function Menu() {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <ul className='flex gap-10 items-center text-[var(--header-text)] max-[620px]:text-[#fff] max-[620px]:flex-col text-[18px] max-[620px]:text-4xl'>
            <li>
                <button
                    onClick={() => { navigate("/") }}
                    className={`relative fontOswald font-semibold uppercase cursor-pointer transitioned after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--border-color)] after:transition-all after:duration-200 hover:after:w-full ${location.pathname === "/" ? "after:w-full" : ""}`}
                >
                    Home
                </button>
            </li>

            <li>
                <button
                    onClick={() => { navigate("/search") }}
                    className={`relative fontOswald font-semibold uppercase cursor-pointer transitioned after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--border-color)] after:transition-all after:duration-200 hover:after:w-full ${location.pathname === "/search" ? "after:w-full" : ""}`}
                >
                    Search
                </button>
            </li>

            <li>
                <button
                    onClick={() => { navigate("/profile") }}
                    className={`relative fontOswald font-semibold uppercase cursor-pointer transitioned after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--border-color)] after:transition-all after:duration-200 hover:after:w-full ${location.pathname === "/profile" ? "after:w-full" : ""}`}
                >
                    Profile
                </button>
            </li>
        </ul>
    );
}
