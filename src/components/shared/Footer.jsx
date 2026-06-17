import Logo from "/logo.png";
import { Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/10 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            {/* <h2 className="text-3xl font-black tracking-tight">
              GYM<span className="text-black/50">.</span>
            </h2> */}
            {/* Logo  */}
            <img src={Logo} alt="FitQube Logo" className="w-32 h-auto mt-4" />
            <p className="mt-4 text-black/60 leading-relaxed">
              Transform your body, build strength, and unlock your full
              potential with expert coaching and world-class training.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-black mb-5">Navigation</h3>

            <ul className="space-y-3 text-black/60">
              <li>
                <a href="/" className="hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/coaching-plans" className="hover:text-black transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/trainers" className="hover:text-black transition-colors">
                  Trainers
                </a>
              </li>
              <li>
                <a href="/gallery" className="hover:text-black transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-black mb-5">Contact</h3>

            <ul className="space-y-3 text-black/60">
              <li>hello@fitqube.com</li>
              <li>+880 1234-567890</li>
              <li>City Name, Country Name</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-black mb-5">
              Join Our Newsletter
            </h3>

            <div className="flex border border-black rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 outline-none bg-transparent"
              />
              <button className="bg-black text-white px-5 hover:bg-black/90 transition">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-black/50 text-sm">
            © {new Date().getFullYear()} FitQube. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="w-10 h-10 border border-black/10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;