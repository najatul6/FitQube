import logo from '/logo.png';
const Loader = () => {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-6">
        {/* animated rings */}
        <div className="relative flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-primary-200/20"></div>

          <div className="absolute w-24 h-24 rounded-full border-4 border-transparent border-t-primary-200 animate-spin"></div>

          <div className="absolute w-16 h-16 rounded-full border-4 border-transparent border-b-secondary-200 animate-spin [animation-direction:reverse] [animation-duration:1.2s]"></div>

          {/* center logo */}
          <div className="absolute">
            <img src={logo} alt="FitQube" className='w-22 rounded-full' />
          </div>
        </div>

        {/* loading text */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800">FitQube</h2>

          {/* <p className="text-sm text-gray-500 mt-1 tracking-wide">
            Loading your experience...
          </p> */}
        </div>

        {/* animated dots */}
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-bounce"></span>

          <span className="w-2.5 h-2.5 rounded-full bg-black animate-bounce delay-150"></span>

          <span className="w-2.5 h-2.5 rounded-full bg-black animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
};

export default Loader;