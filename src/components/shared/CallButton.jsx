import { FaPhoneAlt } from "react-icons/fa";

const CallButton = () => {
    return (
        <a href="tel:+8801581205392" className="fixed bottom-6 right-6 z-999">
            <div className="relative flex items-center justify-center">
                {/* animated ring */}
                <span className="absolute inline-flex h-full w-full rounded-2xl bg-primary-200 opacity-60 animate-ping"></span>

                {/* button */}
                <div className="relative w-16 h-16 rounded-2xl bg-primary-200 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300">
                    <FaPhoneAlt className="text-xl" />
                </div>
            </div>
        </a>
    );
};

export default CallButton;