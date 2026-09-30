import { Search, Star } from 'lucide-react';

import maleImage from '../../assets/hero/male-image.png';
import ellipseImg from '../../assets/hero/elipse.png';
import leftScribble from '../../assets/hero/left_sribble.png';
import rightTrapezium from '../../assets/hero/right-trapigium.png';
import whiteDonut from '../../assets/hero/white-donut.png';
import whiteTriangle from '../../assets/hero/white-traingle.png';
import whiteSmallScribble from '../../assets/hero/white-small-scribble.png';
import whiteBigScribble from '../../assets/hero/white-big-scribble.png';

import avatar1 from '../../assets/little-circle-humans/Ellipse.png';
import avatar2 from '../../assets/little-circle-humans/Ellipse-1.png';
import avatar3 from '../../assets/little-circle-humans/Ellipse-2.png';

export const HeroBanner = () => {
  return (
    <section className="relative min-h-screen pt-6 pb-0 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold text-white tracking-tight leading-[1.12]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/90 max-w-xl mx-auto font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <div className="mt-7 max-w-[560px] mx-auto">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white rounded-full p-2 pl-6 flex items-center shadow-lg"
          >
            <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 text-sm md:text-base outline-none"
            />
            <button
              type="submit"
              className="bg-[#D2F801] hover:bg-[#c3e800] text-gray-950 font-semibold px-7 py-2.5 rounded-full text-sm transition shrink-0 cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="relative w-full max-w-[1400px] mx-auto min-h-[500px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex items-end justify-center -mt-24">
        <img
          src={leftScribble}
          alt=""
          className="absolute left-[-10px] sm:left-2 md:left-6 lg:left-12 top-[-30px] sm:top-[-40px] md:top-[-60px] w-24 sm:w-32 md:w-44 lg:w-52 pointer-events-none select-none z-10"
        />
        <img
          src={whiteSmallScribble}
          alt=""
          className="absolute left-20 sm:left-32 md:left-48 lg:left-64 top-16 sm:top-20 md:top-24 w-12 sm:w-16 md:w-20 lg:w-24 pointer-events-none select-none z-10"
        />
        <img
          src={whiteDonut}
          alt=""
          className="absolute left-2 sm:left-6 md:left-10 lg:left-16 bottom-4 sm:bottom-8 md:bottom-12 w-32 sm:w-44 md:w-56 lg:w-68 pointer-events-none select-none z-20"
        />

        <img
          src={rightTrapezium}
          alt=""
          className="absolute right-[-10px] sm:right-2 md:right-6 lg:right-12 top-[-30px] sm:top-[-40px] md:top-[-60px] w-24 sm:w-32 md:w-44 lg:w-52 pointer-events-none select-none z-10"
        />
        <img
          src={whiteTriangle}
          alt=""
          className="absolute right-16 sm:right-28 md:right-44 lg:right-60 top-20 sm:top-24 md:top-28 w-16 sm:w-24 md:w-32 lg:w-36 pointer-events-none select-none z-10"
        />
        <img
          src={whiteBigScribble}
          alt=""
          className="absolute right-2 sm:right-6 md:right-10 lg:right-14 bottom-4 sm:bottom-8 md:bottom-12 w-24 sm:w-36 md:w-44 lg:w-52 pointer-events-none select-none z-20"
        />

        <img
          src={ellipseImg}
          alt=""
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] sm:w-[700px] md:w-[860px] lg:w-[1020px] pointer-events-none select-none z-0"
        />

        <img
          src={maleImage}
          alt="ByteSpace student"
          className="relative z-10 w-[290px] sm:w-[370px] md:w-[450px] lg:w-[520px] object-contain block select-none pointer-events-none"
        />

        <div className="absolute left-4 sm:left-12 md:left-24 lg:left-36 top-24 sm:top-28 md:top-36 z-30 bg-white rounded-2xl px-5 py-3.5 shadow-xl border border-gray-100/60">
          <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">
            UI/UX Design
          </p>
          <p className="text-[11px] sm:text-xs text-gray-500 font-normal mt-0.5">
            200 Courses • 1000+ Students
          </p>
        </div>

        <div className="absolute right-4 sm:right-12 md:right-24 lg:right-36 top-28 sm:top-32 md:top-40 z-30 bg-white rounded-2xl p-4 sm:p-5 shadow-xl border border-gray-100/60 min-w-[150px] sm:min-w-[190px]">
          <p className="text-[11px] sm:text-xs text-gray-500 font-medium">
            Learning Progress
          </p>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-950 mt-1">
            55%
          </p>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2.5">
            <div className="bg-[#D2F801] h-full w-[55%] rounded-full"></div>
          </div>
        </div>

        <div className="absolute left-6 sm:left-16 md:left-28 lg:left-40 bottom-16 sm:bottom-20 md:bottom-24 z-30 bg-white rounded-2xl p-3.5 sm:p-4 shadow-xl border border-gray-100/60 min-w-[210px] sm:min-w-[240px]">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs sm:text-sm font-bold text-gray-900">
              Happy Students
            </span>
            <span className="text-xs font-bold text-gray-900 flex items-center gap-1">
              4.5 <span className="text-gray-400 font-normal">(240)</span>
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            </span>
          </div>

          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex -space-x-2">
              <img
                src={avatar1}
                alt="Student avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src={avatar2}
                alt="Student avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src={avatar3}
                alt="Student avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src={avatar1}
                alt="Student avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src={avatar2}
                alt="Student avatar"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="bg-[#D2F801] text-gray-950 font-bold text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
