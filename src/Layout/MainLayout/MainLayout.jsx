import Navbar from "@/components/shared/Navbar";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import CallButton from "@/components/shared/CallButton";
import Loader from "@/components/shared/Loader";

const MainLayout = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader />;
    }
    return (
        <>
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="max-w-7xl mx-auto"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <CallButton />
        </>
    )
}

export default MainLayout;