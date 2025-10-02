import { Outlet } from "react-router-dom";
import { FixedHeader } from "../Header/FixedHeader";
import { motion } from "framer-motion";

import CatSVG from "../../assets/cat.svg";
import CircleSVG from "../../assets/circle.svg";

export function Layout() {
    return (
        <div className="wrapper relative">
            <div className="flex flex-col w-full relative z-2">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="transitioned w-full"
                >
                    <FixedHeader />
                </motion.div>
                <motion.main
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="transitioned pt-[100px] w-full"
                >
                    <Outlet />
                </motion.main>
            </div>

            <motion.div
                className="fixed bottom-[-7%] left-[5%] w-[30vw] max-lg:hidden"
                animate={{ y: [0, -1, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
                <img src={CatSVG} alt="cat" />
            </motion.div>

            <motion.div
                className="fixed top-[-60%] right-[-50%] w-[100vw] max-lg:top-[50%] max-lg:right-[-25%] max-lg:w-[200%]"
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
            >
                <img src={CircleSVG} alt="circle" />
            </motion.div>
        </div>
    );
}
