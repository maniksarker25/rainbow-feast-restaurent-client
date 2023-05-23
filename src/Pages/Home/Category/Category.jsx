import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mt-20">
        <SectionTitle heading={'Order Online'} subHeading={'---From 11:00am to 10:00pm---'}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="lg:text-4xl text-center text-white uppercase -mt-12 lg:-mt-20 ">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h3 className="lg:text-4xl text-center text-white uppercase -mt-12 lg:-mt-20 ">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h3 className="lg:text-4xl text-center text-white uppercase -mt-12 lg:-mt-20 ">pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h3 className="lg:text-4xl text-center text-white uppercase -mt-12 lg:-mt-20 ">desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h3 className="lg:text-4xl text-center text-white uppercase -mt-12 lg:-mt-20 ">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
