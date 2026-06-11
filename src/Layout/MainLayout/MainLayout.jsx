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
        // relative ক্লাসটি স্ক্রোল পজিশন এবং স্টিকি বিহেভিয়ার ঠিক রাখবে
        <div className="relative min-h-screen bg-[#ffffff]">
            {/* ন্যাভবার সবার উপরে স্বাধীনভাবে থাকবে */}
            <Navbar />
            
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    // z-0 নিশ্চিত করবে যেন এটি ন্যাভবার বা ড্রয়ারের ওপরে না ওঠে
                    className="relative z-0"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            
            <CallButton />
        </div>
    );
}

export default MainLayout;