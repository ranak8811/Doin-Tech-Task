import sarahImg from '../../assets/community/sarah.png';
import jamesImg from '../../assets/community/james.png';
import alexImg from '../../assets/community/alex.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: sarahImg,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: jamesImg,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: alexImg,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

export const CommunityTestimonials = () => {
  return (
    <section
      id="community-testimonials"
      className="relative w-full h-[784px] overflow-hidden flex items-center justify-center"
      style={{
        background: `
          radial-gradient(circle at 62% 24%, rgba(210, 248, 1, 0.45) 0%, rgba(210, 248, 1, 0) 42%),
          radial-gradient(circle at 6% 86%, rgba(191, 219, 254, 0.85) 0%, rgba(191, 219, 254, 0) 42%),
          #ffffff
        `,
      }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center gap-14">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-extrabold text-gray-950 tracking-tight leading-[1.14] max-w-lg">
            Discover What Our
            <br />
            Community Is Saying
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
            At ByteSpace, our vibrant community of learners and creators is at the
            heart of what we do. Hear directly from those who have experienced the
            transformative journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic learners
            and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[32px] p-7 sm:p-8 shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-950 mt-5">
                {item.name}
              </h3>

              <p className="text-sm font-semibold text-blue-600 mt-1">
                {item.role}
              </p>

              <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mt-4">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
