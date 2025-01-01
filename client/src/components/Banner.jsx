import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/home/01.jpg";
import img2 from "../assets/home/02.jpg";
import img3 from "../assets/home/03.png";
import img4 from "../assets/home/04.jpg";
import img5 from "../assets/home/05.png";
import img6 from "../assets/home/06.png";

const Banner = () => (
  <div className="relative max-w-[1920px] mx-auto">
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={3000}
      className="overflow-hidden"
    >
      {[img1, img2, img3, img4, img5, img6].map((src, index) => (
        <div key={index} className="relative w-full">
          <img src={src} alt={`Slide ${index + 1}`} className="object-cover w-full h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px]" />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default Banner;
