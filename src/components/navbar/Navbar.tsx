import { ShoppingBag } from 'lucide-react';
import HeaderLogo from '../../assets/hero/Header_Logo.png';

export const Navbar = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img src={HeaderLogo} alt="ByteSpace" className="h-8 w-auto" />
            </a>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-lime-300 text-sm font-medium transition">
              Home
            </a>
            <a href="#courses" className="text-white/90 hover:text-lime-300 text-sm font-medium transition">
              Courses
            </a>
            <a href="#creators" className="text-white/90 hover:text-lime-300 text-sm font-medium transition">
              Creators
            </a>
          </nav>

          <div className="flex items-center gap-5">
            <a href="#signin" className="text-white hover:text-lime-300 text-sm font-medium transition">
              Sign In
            </a>
            <a
              href="#signup"
              className="border border-white text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-white hover:text-blue-900 transition"
            >
              Join Us
            </a>
            <button
              type="button"
              className="relative text-white hover:text-lime-300 p-1 transition cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-lime-400 text-blue-900 font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
