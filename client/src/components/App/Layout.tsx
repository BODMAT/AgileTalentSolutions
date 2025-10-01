import { Outlet } from "react-router-dom";
import { FixedHeader } from "../Header/FixedHeader";
import { motion } from "framer-motion";

export function Layout() {
    return (
        <div className="wrapper">
            <div className="flex flex-col w-full">
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="transitioned w-full"
                >
                    <FixedHeader />
                </motion.div>
                <motion.main
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="transitioned pt-[100px] w-full">
                    <Outlet />
                </motion.main>
            </div>
        </div>
    );
}