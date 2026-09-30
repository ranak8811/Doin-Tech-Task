import { useState } from 'react';
import { Star, BarChart2 } from 'lucide-react';
import HeaderLogo from '../../assets/hero/Header_Logo.png';
import dataThumb from '../../assets/discover/data.png';
import digitalThumb from '../../assets/discover/digital.png';
import whiteDonut from '../../assets/hero/white-donut.png';
import whiteTriangle from '../../assets/hero/white-traingle.png';
import whiteScribble from '../../assets/hero/white-big-scribble.png';
import avatar1 from '../../assets/little-circle-humans/Ellipse.png';
import avatar2 from '../../assets/little-circle-humans/Ellipse-1.png';
import avatar3 from '../../assets/little-circle-humans/Ellipse-2.png';

interface SigninProps {
  onNavigateHome?: () => void;
  onNavigateSignup?: () => void;
}

export const Signin = ({ onNavigateHome, onNavigateSignup }: SigninProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen w-full hero-grid-pattern relative flex items-center justify-center p-6 sm:p-10 lg:p-16 overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <filter id="signin-lime-tint">
          <feColorMatrix
            type="matrix"
            values="
              0.82 0 0 0 0
              0.97 0 0 0 0
              0.01 0 0 0 0
              0    0 0 1 0"
          />
        </filter>
      </svg>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        <div className="lg:col-span-6 flex flex-col justify-between h-full">
          <div>
            <div
              onClick={onNavigateHome}
              className="cursor-pointer inline-flex items-center gap-2"
            >
              <div className="w-[34px] h-[34px] overflow-hidden relative">
                <img
                  src={HeaderLogo}
                  alt="ByteSpace"
                  className="h-[34px] max-w-none absolute left-0 top-0"
                />
              </div>
            </div>

            <h1 className="mt-8 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Sign in with ease
            </h1>
            <p className="mt-3 text-white/80 text-sm sm:text-base leading-relaxed max-w-md font-normal">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>
          </div>

          <div className="relative w-full max-w-[540px] h-[520px] sm:h-[560px] mt-8">
            <img
              src={whiteDonut}
              alt=""
              style={{ filter: 'url(#signin-lime-tint)' }}
              className="absolute -top-2 left-6 sm:left-10 w-28 sm:w-36 select-none pointer-events-none z-30 rotate-[-15deg]"
            />

            <div className="absolute top-20 left-0 w-[290px] sm:w-[325px] bg-white rounded-[28px] p-4 sm:p-5 shadow-xl z-10 border border-gray-100">
              <div className="rounded-2xl overflow-hidden mb-3">
                <img
                  src={digitalThumb}
                  alt="Build Digital Asset"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-sm sm:text-base font-bold text-gray-950 truncate">
                  Build Digital Asset
                </h4>
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 shrink-0">
                  <span>4.5</span>
                  <Star className="w-3.5 h-3.5 fill-gray-300 text-gray-300" />
                </div>
              </div>
              <p className="text-xs text-blue-600 font-medium mt-0.5">
                by purepearl studio
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="bg-[#f4f5f7] text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                  Beginner
                </span>
                <div className="flex items-center gap-1 ml-auto">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <img src={avatar1} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                    <img src={avatar2} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                    <img src={avatar3} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                  </div>
                  <span className="bg-[#D2F801] text-gray-950 font-bold text-[10px] px-1.5 py-0.5 rounded-full">
                    26+
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-blue-600 font-extrabold text-lg">$25</span>
                <span className="text-gray-400 text-xs">/lifetime</span>
              </div>
            </div>

            <div className="absolute top-4 left-24 sm:left-28 w-[290px] sm:w-[325px] bg-white rounded-[28px] p-4 sm:p-5 shadow-2xl z-20 border border-white/50">
              <div className="rounded-2xl overflow-hidden mb-3">
                <img
                  src={dataThumb}
                  alt="the Power of Big Data"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-sm sm:text-base font-bold text-gray-950">
                  the Power of Big Data
                </h4>
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 shrink-0">
                  <span>4.5</span>
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>
              <p className="text-xs text-blue-600 font-medium mt-0.5">
                by purepearl studio
              </p>
              <div className="mt-3 flex items-center gap-2">
                <span className="bg-[#f4f5f7] text-gray-700 text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                  Beginner
                </span>
                <div className="flex items-center gap-1 ml-auto">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <img src={avatar1} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                    <img src={avatar2} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                    <img src={avatar3} alt="" className="w-5 h-5 rounded-full border border-white object-cover" />
                  </div>
                  <span className="bg-[#D2F801] text-gray-950 font-bold text-[10px] px-1.5 py-0.5 rounded-full">
                    26+
                  </span>
                </div>
              </div>
              <div className="mt-3">
                <span className="text-blue-600 font-extrabold text-lg">$25</span>
                <span className="text-gray-400 text-xs">/lifetime</span>
              </div>
            </div>

            <img
              src={whiteTriangle}
              alt=""
              style={{ filter: 'url(#signin-lime-tint)' }}
              className="absolute -bottom-8 left-0 w-32 sm:w-40 select-none pointer-events-none z-30 rotate-[20deg]"
            />

            <div className="absolute bottom-2 left-32 sm:left-36 z-30 bg-[#D2F801] rounded-2xl p-4 shadow-xl w-56 sm:w-64">
              <div className="text-sm font-bold text-gray-950">
                Happy Students
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-800 font-semibold mt-0.5">
                <span>4.5 (240)</span>
                <Star className="w-3 h-3 fill-blue-600 text-blue-600" />
              </div>
              <div className="mt-2.5 flex items-center gap-1">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img src={avatar1} alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src={avatar2} alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src={avatar3} alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src={avatar1} alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                  <img src={avatar2} alt="" className="w-6 h-6 rounded-full border border-white object-cover" />
                </div>
                <span className="bg-gray-950 text-white font-bold text-[10px] px-2 py-0.5 rounded-full">
                  2K+
                </span>
              </div>
            </div>

            <img
              src={whiteScribble}
              alt=""
              className="absolute bottom-4 right-0 sm:right-6 w-24 sm:w-32 select-none pointer-events-none z-20 rotate-[10deg]"
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="bg-white rounded-[32px] sm:rounded-[38px] p-8 sm:p-12 lg:p-14 shadow-2xl w-full max-w-[540px]">
            <p className="text-sm font-semibold text-blue-600">
              Sign In
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-gray-950 tracking-tight leading-tight mt-1">
              Welcome Back
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="designer@example.com"
                  className="mt-2 w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-white"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="mt-2 w-full px-5 py-3.5 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm sm:text-base outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition bg-white"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#D2F801] hover:bg-[#c3e800] text-gray-950 font-bold px-9 py-3.5 rounded-full text-base transition cursor-pointer shadow-sm"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center my-8">
              <div className="flex-1 border-t border-gray-200"></div>
              <span className="px-4 text-sm text-gray-400 font-normal">or</span>
              <div className="flex-1 border-t border-gray-200"></div>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                type="button"
                aria-label="Sign in with Facebook"
                className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition cursor-pointer"
              >
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.029C18.343 21.168 22 17.03 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Sign in with Google"
                className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:border-gray-300 transition cursor-pointer"
              >
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2a9.99 9.99 0 0 0-7.07 2.93A10.02 10.02 0 0 0 2 12c0 5.52 4.48 10 10 10 4.93 0 9.07-3.57 9.86-8.33H12V11.2h11.8c.13.6.2 1.22.2 1.86 0 6.08-4.92 11-11 11-6.08 0-11-4.92-11-11S6.92 1 13 1c3.08 0 5.86 1.26 7.85 3.29l-1.9 1.9C17.48 4.7 15.35 3.8 13 3.8z" />
                </svg>
              </button>
            </div>

            <p className="mt-10 sm:mt-12 text-sm text-gray-500 text-center font-normal">
              New user?{' '}
              <button
                type="button"
                onClick={onNavigateSignup}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Create an account
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
