import logo1 from '../../assets/after-hero/Frame.png';
import logo2 from '../../assets/after-hero/Frame-1.png';
import logo3 from '../../assets/after-hero/Frame-2.png';
import logo4 from '../../assets/after-hero/Frame-3.png';
import logo5 from '../../assets/after-hero/Frame-4.png';

export const PartnerLogos = () => {
  const logos = [
    { src: logo1, alt: 'Logoipsum partner 1' },
    { src: logo2, alt: 'Logoipsum partner 2' },
    { src: logo3, alt: 'Logoipsum partner 3' },
    { src: logo4, alt: 'Logoipsum partner 4' },
    { src: logo5, alt: 'Logoipsum partner 5' },
  ];

  return (
    <section
      style={{ height: '200px', minHeight: '200px', backgroundColor: '#f4f5f7' }}
      className="w-full flex items-center justify-center border-b border-gray-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex flex-row items-center justify-between gap-6 sm:gap-10">
          {logos.map((logo, index) => (
            <div key={index} className="flex-1 flex items-center justify-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-7 sm:h-8 md:h-9 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
