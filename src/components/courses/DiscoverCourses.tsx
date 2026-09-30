import { useState } from 'react';
import { Star, BarChart2 } from 'lucide-react';

import figmaImg from '../../assets/discover/figma.png';
import digitalImg from '../../assets/discover/digital.png';
import dataImg from '../../assets/discover/data.png';
import productivityImg from '../../assets/discover/productivity.png';
import moneyImg from '../../assets/discover/money.png';
import startupImg from '../../assets/discover/startup.png';

import avatar1 from '../../assets/little-circle-humans/Ellipse.png';
import avatar2 from '../../assets/little-circle-humans/Ellipse-1.png';
import avatar3 from '../../assets/little-circle-humans/Ellipse-2.png';

interface Course {
  id: number;
  title: string;
  instructor: string;
  rating: number;
  level: string;
  price: number;
  image: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    image: figmaImg,
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    image: digitalImg,
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    image: dataImg,
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    image: productivityImg,
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    image: moneyImg,
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    image: startupImg,
  },
];

const categoriesRow1 = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
];

const categoriesRow2 = [
  'Digital Illustration',
  'Film & Video',
  'Crafts',
  'Freelance & Entrepreneurship',
  'Graphic Design',
  'Photography',
];

const categoriesRow3 = [
  'Productivity',
  'Web Development',
  'Data Science',
  'Cooking',
  '+ More',
];

export const DiscoverCourses = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  return (
    <section className="w-full pt-20 pb-10 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Discover Your Passion,
            <br />
            Build Your Skills
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Filter Rows */}
        <div className="flex flex-col items-center">
          {/* Row 1 */}
          <div className="category-row">
            {categoriesRow1.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 2 */}
          <div className="category-row">
            {categoriesRow2.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Row 3 */}
          <div className="category-row">
            {categoriesRow3.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`category-pill ${
                  cat === '+ More' ? 'category-pill-more' : activeCategory === cat ? 'active' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Courses Grid */}
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              {/* Image with baked-in badges */}
              <div className="course-thumbnail">
                <img src={course.image} alt={course.title} />
              </div>

              {/* Title & Rating */}
              <div className="mt-4 flex items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-gray-950 leading-snug">
                  {course.title}
                </h3>
                <div className="flex items-center gap-1 text-sm font-semibold text-gray-800 shrink-0">
                  <span>{course.rating}</span>
                  <Star className="w-3.5 h-3.5 fill-gray-300 text-gray-300" />
                </div>
              </div>

              {/* Instructor */}
              <p className="text-xs text-blue-600 font-medium mt-1">
                by <span className="hover:underline cursor-pointer">{course.instructor}</span>
              </p>

              {/* Beginner Badge + Avatars */}
              <div className="mt-4 flex items-center gap-2">
                <span className="bg-[#f4f5f7] text-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                  {course.level}
                </span>

                <div className="flex items-center gap-1 ml-1">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    <img
                      src={avatar1}
                      alt=""
                      className="w-5 h-5 rounded-full border border-white object-cover"
                    />
                    <img
                      src={avatar2}
                      alt=""
                      className="w-5 h-5 rounded-full border border-white object-cover"
                    />
                    <img
                      src={avatar3}
                      alt=""
                      className="w-5 h-5 rounded-full border border-white object-cover"
                    />
                  </div>
                  <span className="bg-[#D2F801] text-gray-950 font-bold text-[10px] px-1.5 py-0.5 rounded-full">
                    26+
                  </span>
                </div>
              </div>

              {/* Price in new line below Beginner and Avatars */}
              <div className="mt-3">
                <span className="text-blue-600 font-extrabold text-lg">
                  ${course.price}
                </span>
                <span className="text-gray-400 text-xs font-normal">/lifetime</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
