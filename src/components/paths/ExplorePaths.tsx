import designIcon from "../../assets/explore/design.png";
import devIcon from "../../assets/explore/development.png";
import itIcon from "../../assets/explore/it.png";
import businessIcon from "../../assets/explore/business.png";
import marketingIcon from "../../assets/explore/marketing.png";
import photographyIcon from "../../assets/explore/photography.png";

interface LearningPath {
  id: number;
  title: string;
  icon: string;
}

const paths: LearningPath[] = [
  { id: 1, title: "Design", icon: designIcon },
  { id: 2, title: "Development", icon: devIcon },
  { id: 3, title: "IT & Software", icon: itIcon },
  { id: 4, title: "Business", icon: businessIcon },
  { id: 5, title: "Marketing", icon: marketingIcon },
  { id: 6, title: "Photography", icon: photographyIcon },
];

export const ExplorePaths = () => {
  return (
    <section className="w-full pt-8 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-3xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there's something for everyone. Unleash your potential and
            explore our carefully curated categories.
          </p>
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6">
          {paths.map((path) => (
            <div
              key={path.id}
              className="bg-white border border-gray-200/90 rounded-[28px] p-6 sm:p-7 flex flex-col items-center justify-center text-center shadow-xs hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <img
                  src={path.icon}
                  alt={path.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-5 text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {path.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
