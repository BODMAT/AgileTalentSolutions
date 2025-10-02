import { useEffect } from "react";
import { useBurgerMenu } from "../../store/useBurger";
import { Menu } from "./Menu";

export function FixedHeader() {
    const { isBurgerOpen, toggleBurger, isMobile, setIsMobile } = useBurgerMenu();
    useEffect(() => {
        document.body.style.overflow = isBurgerOpen && isMobile ? "hidden" : "";
        document.body.style.height = isBurgerOpen && isMobile ? "100vh" : "";

        return () => {
            const root = document.getElementById("root");
            if (root) {
                root.style.overflow = "";
                root.style.height = "";
            }
        };
    }, [isBurgerOpen, isMobile]);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 620);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setIsMobile]);

    return (
        <header className="bg-[var(--header-bg)] fixed top-0 left-0 z-10 transitioned py-2 h-[100px] w-full">
            <div className="myContainer h-full flex justify-between gap-7 items-center">
                <a href="/agile-talent-solutions/" className="w-20 h-20 transitioned hover:scale-105">
                    <img src="./logo.svg" alt="logo" />
                </a>
                {!isMobile ? (
                    <div className="flex gap-10 items-center"><Menu /></div>
                ) : (
                    <button onClick={toggleBurger} className="group w-[36px] rounded-lg border-0 cursor-pointer">
                        <div className="grid justify-items-center gap-1.5">
                            {["rotate-45 translate-y-2.5", "scale-x-0", "-rotate-45 -translate-y-2.5"].map(
                                (cls, i) => (
                                    <span
                                        key={i}
                                        className={`h-1 w-9 bg-[var(--header-text)] rounded-full transition-all duration-500 ${isBurgerOpen ? cls : ""
                                            }`}
                                    ></span>
                                )
                            )}
                        </div>
                    </button>
                )}

                <div
                    className={`fixed top-[100px] left-0 h-[calc(100vh-80px)] w-full z-50 transition-transform transitioned bg-black/75 text-white ${isBurgerOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col items-center justify-center gap-10 py-15 text-3xl">
                        <Menu />
                    </div>
                </div>
            </div>
        </header>
    )
}