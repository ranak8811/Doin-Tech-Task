import leftScribble from '../../assets/hero/left_sribble.png';
import whiteSmallScribble from '../../assets/hero/white-small-scribble.png';
import whiteTriangle from '../../assets/hero/white-traingle.png';
import whiteDonut from '../../assets/hero/white-donut.png';
import rightTrapezium from '../../assets/hero/right-trapigium.png';

export const CreatorBanner = () => {
  return (
    <section id="creator-banner" className="relative w-full h-[480px] overflow-hidden hero-grid-pattern flex items-center justify-center">
      <svg width="0" height="0" className="absolute">
        <filter id="lime-tint">
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

      <img
        src={leftScribble}
        alt=""
        className="absolute -top-14 sm:-top-18 -left-10 sm:-left-14 w-52 sm:w-64 md:w-72 select-none pointer-events-none z-10 rotate-[-5deg]"
      />

      <img
        src={whiteSmallScribble}
        alt=""
        className="absolute top-8 sm:top-10 left-36 sm:left-48 md:left-56 w-16 sm:w-20 md:w-24 select-none pointer-events-none z-10 rotate-[-10deg]"
      />

      <img
        src={whiteTriangle}
        alt=""
        className="absolute bottom-20 sm:bottom-24 -left-6 sm:-left-4 w-28 sm:w-36 md:w-40 select-none pointer-events-none z-10 rotate-[25deg]"
      />

      <img
        src={whiteDonut}
        alt=""
        style={{ filter: 'url(#lime-tint)' }}
        className="absolute -bottom-24 sm:-bottom-32 left-8 sm:left-14 md:left-20 w-56 sm:w-68 md:w-80 select-none pointer-events-none z-10 rotate-[-15deg]"
      />

      <img
        src={whiteTriangle}
        alt=""
        style={{ filter: 'url(#lime-tint)' }}
        className="absolute top-4 sm:top-6 right-44 sm:right-60 md:right-72 w-28 sm:w-36 md:w-40 select-none pointer-events-none z-10 rotate-[40deg]"
      />

      <img
        src={rightTrapezium}
        alt=""
        style={{ filter: 'grayscale(1) brightness(1.8) contrast(0.9)' }}
        className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 w-52 sm:w-64 md:w-72 select-none pointer-events-none z-10 rotate-[5deg]"
      />

      <img
        src={leftScribble}
        alt=""
        className="absolute -bottom-12 sm:-bottom-16 right-10 sm:right-16 md:right-24 w-44 sm:w-56 md:w-64 select-none pointer-events-none z-10 rotate-[15deg]"
      />

      <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-tight">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mt-5 text-white/90 text-sm sm:text-base max-w-[780px] mx-auto leading-relaxed font-normal">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-7 inline-block bg-[#D2F801] hover:bg-[#c3e800] text-gray-950 font-bold px-8 py-3 rounded-full text-sm sm:text-base transition cursor-pointer shadow-md"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
};
