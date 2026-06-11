// import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const CallButton = () => {
    return (
        <a href="tel:+8801581205392" className="fixed bottom-6 right-3 z-999">
            {/* <div className="relative flex items-center justify-center animate-bounce"> */}
                {/* animated ring */}
                {/* <span className="absolute inline-flex h-full w-full rounded-2xl bg-[#25D366]"></span> */}

                {/* button */}
                {/* <div className="relative w-16 h-16 rounded-2xl bg-primary-200 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition duration-300"> */}
                    {/* <FaPhoneAlt className="text-xl" /> */}
                {/* </div> */}
            {/* </div> */}
            <div className="relative">

                    <IoLogoWhatsapp size={50} className="text-[#25D366]"/>
                    <IoLogoWhatsapp size={50} className="absolute inset-0 animate-ping text-[#25D366]"/>
            </div>
        </a>
    );
};

export default CallButton;