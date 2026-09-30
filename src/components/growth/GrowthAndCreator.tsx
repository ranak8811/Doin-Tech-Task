import { Star, BarChart2, Check } from 'lucide-react';
import maleStudent from '../../assets/hero/male-image.png';
import femaleInstructor from '../../assets/growth/female.png';
import limeScribble from '../../assets/hero/left_sribble.png';
import figmaThumb from '../../assets/discover/figma.png';
import avatar1 from '../../assets/little-circle-humans/Ellipse.png';
import avatar2 from '../../assets/little-circle-humans/Ellipse-1.png';
import avatar3 from '../../assets/little-circle-humans/Ellipse-2.png';

export const GrowthAndCreator = () => {
  return (
    <section
      id="growth-creator"
      className="w-full relative overflow-hidden min-h-[1460px] py-20 lg:py-28"
      style={{
        background: `
          radial-gradient(circle at 10% 8%, rgba(210, 248, 1, 0.45) 0%, rgba(210, 248, 1, 0) 38%),
          radial-gradient(circle at 92% 16%, rgba(191, 219, 254, 0.75) 0%, rgba(191, 219, 254, 0) 42%),
          radial-gradient(circle at 6% 48%, rgba(191, 219, 254, 0.85) 0%, rgba(191, 219, 254, 0) 40%),
          radial-gradient(circle at 10% 88%, rgba(210, 248, 1, 0.50) 0%, rgba(210, 248, 1, 0) 38%),
          radial-gradient(circle at 92% 86%, rgba(191, 219, 254, 0.80) 0%, rgba(191, 219, 254, 0) 42%),
          #ffffff
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-2 pb-6">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Your Path to Professional
              <br />
              Growth Starts Here!
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            <div className="mt-12 flex items-center gap-12 sm:gap-16">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0c43ec]">
                  12K
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium mt-1">
                  Students
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0c43ec]">
                  70+
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium mt-1">
                  Courses
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#0c43ec]">
                  16
                </div>
                <div className="text-sm sm:text-base text-gray-500 font-medium mt-1">
                  Creators
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[580px] mx-auto h-[540px] sm:h-[580px] flex items-center justify-center">
            <img
              src={limeScribble}
              alt=""
              className="absolute right-4 sm:right-10 top-10 sm:top-14 w-32 sm:w-40 z-0 select-none pointer-events-none"
            />

            <div className="absolute top-2 left-2 sm:left-6 z-10 w-[260px] sm:w-[290px] bg-white rounded-[22px] p-3.5 shadow-2xl border border-gray-100/90">
              <div className="rounded-xl overflow-hidden mb-3">
                <img
                  src={figmaThumb}
                  alt="Learn Figma"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-1">
                <h4 className="text-xs sm:text-sm font-bold text-gray-950 truncate">
                  Learn Figma from Basic
                </h4>
                <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 shrink-0">
                  <span>4.5</span>
                  <Star className="w-3 h-3 fill-gray-300 text-gray-300" />
                </div>
              </div>
              <p className="text-[11px] text-blue-600 font-medium mt-0.5">
                by purepearl studio
              </p>

              <div className="mt-2.5 flex items-center gap-2">
                <span className="bg-[#f4f5f7] text-gray-700 text-[10px] px-2.5 py-0.5 rounded-full flex items-center gap-1 font-medium">
                  <BarChart2 className="w-3 h-3 text-gray-500" />
                  Beginner
                </span>
                <div className="flex items-center gap-1 ml-auto">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <img
                      src={avatar1}
                      alt=""
                      className="w-4 h-4 rounded-full border border-white object-cover"
                    />
                    <img
                      src={avatar2}
                      alt=""
                      className="w-4 h-4 rounded-full border border-white object-cover"
                    />
                    <img
                      src={avatar3}
                      alt=""
                      className="w-4 h-4 rounded-full border border-white object-cover"
                    />
                  </div>
                  <span className="bg-[#D2F801] text-gray-950 font-bold text-[9px] px-1 py-0.2 rounded-full">
                    26+
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <span className="text-blue-600 font-extrabold text-sm sm:text-base">
                  $25
                </span>
                <span className="text-gray-400 text-[10px]">/lifetime</span>
              </div>
            </div>

            <img
              src={maleStudent}
              alt="Student"
              className="relative z-20 w-[360px] sm:w-[420px] object-contain drop-shadow-2xl translate-x-8 sm:translate-x-10 translate-y-6 sm:translate-y-8"
            />

            <div className="absolute right-0 sm:right-4 top-[200px] sm:top-[220px] z-30 bg-white rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100 w-48 sm:w-52">
              <span className="text-xs sm:text-sm font-medium text-gray-700 block">
                Learning Progress
              </span>
              <span className="text-2xl sm:text-3xl font-extrabold text-gray-950 block mt-1 tracking-tight">
                55%
              </span>
              <div className="mt-3 w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                <div className="bg-[#D2F801] h-full rounded-full w-[55%]" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-4 lg:mt-6 pb-6">
          <div className="relative w-full max-w-[580px] mx-auto h-[540px] sm:h-[580px] flex items-center justify-center order-2 lg:order-1">
            <img
              src={limeScribble}
              alt=""
              className="absolute right-6 sm:right-12 top-10 sm:top-14 w-28 sm:w-36 z-0 select-none pointer-events-none"
            />

            <div className="absolute top-10 left-2 sm:left-4 z-10 bg-[#0c43ec] text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl w-44 sm:w-48">
              <div className="text-xs text-blue-100 font-medium">Total Revenue</div>
              <div className="text-[10px] text-blue-200 mt-0.5">July 1-28</div>
              <div className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
                $120.29
              </div>
              <div className="mt-2.5 w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#D2F801] h-full rounded-full w-[65%]" />
              </div>
            </div>

            <div className="absolute top-44 left-2 sm:left-4 z-10 bg-[#0c43ec] text-white rounded-2xl p-3.5 sm:p-4 shadow-2xl w-44 sm:w-48">
              <div className="text-xs text-blue-100 font-medium">Year to Date</div>
              <div className="text-[10px] text-blue-200 mt-0.5">2023</div>
              <div className="text-xl sm:text-2xl font-bold mt-1 tracking-tight">
                $1,200.38
              </div>
              <span className="inline-block mt-2 bg-[#D2F801] text-gray-950 text-xs font-bold px-2 py-0.5 rounded-full">
                +12$
              </span>
            </div>

            <img
              src={femaleInstructor}
              alt="Course Creator"
              className="relative z-20 w-[320px] sm:w-[400px] object-contain drop-shadow-2xl -translate-y-8 sm:-translate-y-12 translate-x-4 sm:translate-x-6"
            />

            <div className="absolute bottom-14 sm:bottom-18 right-16 sm:right-24 z-30 bg-white rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-gray-100 w-56 sm:w-60">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-semibold text-gray-900">
                  Happy Students
                </span>
              </div>
              <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-500 font-medium">
                <span>4.5 (240)</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              </div>
              <div className="mt-2.5 flex items-center gap-1">
                <div className="flex -space-x-1.5 overflow-hidden">
                  <img
                    src={avatar1}
                    alt=""
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src={avatar2}
                    alt=""
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src={avatar3}
                    alt=""
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src={avatar1}
                    alt=""
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                  <img
                    src={avatar2}
                    alt=""
                    className="w-6 h-6 rounded-full border border-white object-cover"
                  />
                </div>
                <span className="bg-[#D2F801] text-gray-950 font-bold text-[10px] px-2 py-0.5 rounded-full">
                  2K+
                </span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-950 tracking-tight leading-[1.15]">
              Create & Manage
              <br />
              Courses Easily.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
              <strong className="text-gray-950 font-bold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            <div className="mt-8 space-y-4">
              {[
                'Share Your Expertise',
                'Monetize Your Passion',
                'Flexibility and Autonomy',
                'Build a Community',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-[#0c43ec] flex items-center justify-center text-white shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-base sm:text-lg font-semibold text-gray-900">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
