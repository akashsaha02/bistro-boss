import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';

import slide1 from '../../assets/home/slide1.jpg';
import slide2 from '../../assets/home/slide2.jpg';
import slide3 from '../../assets/home/slide3.jpg';
import slide4 from '../../assets/home/slide4.jpg';
import slide5 from '../../assets/home/slide5.jpg';
import SectiontTitle from '../ui/SectiontTitle';

const slides = [
  { image: slide1, title: 'Salads' },
  { image: slide2, title: 'Pizzas' },
  { image: slide3, title: 'Soups' },
  { image: slide4, title: 'Desserts' },
  { image: slide5, title: 'Salads' },
];

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      <SectiontTitle
        heading='Popular Categories'
        subHeading='Explore our popular categories'
      />
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          440: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative text-center">
            <img src={slide.image} alt={slide.title} className="w-full rounded" />
            <h3 className="absolute cinzel bottom-8 left-1/2 transform -translate-x-1/2 text-xl md:text-2xl lg:text-4xl uppercase text-white bg-black/50 backdrop:blur-lg py-2 px-6 rounded">
              {slide.title}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
