'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './heroSlider.css';

interface Slide {
  title: string;
  description: string;
  imageUrl: string;
}

interface HeroSliderProps {
  slides: Slide[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  return (
    <section className="relative w-full h-screen md:h-[100vh]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-screen md:h-[100vh] bg-cover bg-center"
              style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 26, 64, 0.8)), url(${slide.imageUrl})` }}
            >
             

              {/* Text content */}
              <div className="absolute inset-0"></div>
              <div className="relative flex flex-col justify-center items-center h-full px-4 text-center text-white space-y-6">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                <p className="max-w-2xl text-lg md:text-xl">
                  {slide.description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="/contact"
                    className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#001A40]"
                  >
                    Join us
                  </a>
                  <a href="/blog" className="rounded-md px-3.5 py-2.5 text-sm font-semibold leading-6 text-white hover:text-[#f3e3b8]">
                    Explore our Reseach <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
