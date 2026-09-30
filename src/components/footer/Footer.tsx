import HeaderLogo from '../../assets/hero/Header_Logo.png';

export const Footer = () => {
  return (
    <footer id="footer" className="w-full bg-white h-[525px] flex flex-col justify-between pt-16 pb-10 border-t border-gray-100">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-between">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-6 max-w-md">
            <div className="flex items-center gap-2.5">
              <div className="w-[30px] h-[32px] overflow-hidden relative shrink-0">
                <img
                  src={HeaderLogo}
                  alt="ByteSpace"
                  className="h-[32px] max-w-none absolute left-0 top-0"
                />
              </div>
              <span className="text-2xl font-extrabold text-gray-950 tracking-tight">
                ByteSpace
              </span>
            </div>

            <p className="mt-6 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-6 flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full max-w-[340px] px-6 py-3.5 rounded-full border border-gray-300 text-gray-900 placeholder-gray-500 text-sm outline-none focus:border-gray-500 transition"
              />
              <button
                type="submit"
                className="bg-[#D2F801] hover:bg-[#c3e800] text-gray-950 font-bold px-8 py-3.5 rounded-full text-sm transition shrink-0 cursor-pointer shadow-xs"
              >
                Search
              </button>
            </form>

            <p className="mt-5 text-xs text-gray-500 leading-relaxed max-w-sm font-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-8 pt-2">
            <div className="flex flex-col space-y-4 text-sm text-gray-700 font-medium">
              <a href="#featured-courses" className="hover:text-gray-950 transition">Featured Courses</a>
              <a href="#featured-categories" className="hover:text-gray-950 transition">Featured Categories</a>
              <a href="#business" className="hover:text-gray-950 transition">Business</a>
              <a href="#it" className="hover:text-gray-950 transition">IT</a>
              <a href="#design" className="hover:text-gray-950 transition">Design</a>
            </div>

            <div className="flex flex-col space-y-4 text-sm text-gray-700 font-medium">
              <a href="#development" className="hover:text-gray-950 transition">Development</a>
              <a href="#marketing" className="hover:text-gray-950 transition">Marketing</a>
              <a href="#photography" className="hover:text-gray-950 transition">Photography</a>
              <a href="#finance" className="hover:text-gray-950 transition">Finance</a>
              <a href="#sport" className="hover:text-gray-950 transition">Sport</a>
            </div>

            <div className="flex flex-col space-y-4 text-sm text-gray-700 font-medium">
              <a href="#creator" className="hover:text-gray-950 transition">Become a Creator</a>
              <a href="#affiliate" className="hover:text-gray-950 transition">Affiliate Program</a>
              <a href="#contact" className="hover:text-gray-950 transition">Contact</a>
              <a href="#help" className="hover:text-gray-950 transition">Help</a>
              <a href="#about" className="hover:text-gray-950 transition">About</a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-gray-200/90 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>@ 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6 sm:gap-8">
            <a href="#privacy" className="hover:text-gray-800 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-800 transition">Terms of Service</a>
            <a href="#cookies" className="hover:text-gray-800 transition">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
