import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { div, Button, Image, Row, Typography } from "antd";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

const Intro = () => {
  const { Text } = Typography;
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-screen relative"
      >
        <SwiperSlide className="w-full h-full bg-banner1 bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20 after:opacity-40 ">
          <div className="z-10 ml-[10rem]  pt-[50vh] ">
            <Text className="block text-[5.5rem] font-bold text-white">
              Lorem Ipsum
            </Text>
            {/* <Text className="block font-medium text-[3.35rem]  mb-5 mt-[-2.4rem] text-white">
              with our special coffee flavour
            </Text> */}
            <div>
              <button className="bg-[#146d4d] border-none cursor-pointer py-[0.7rem] px-[1rem] rounded-[0.2rem] text-center flex items-center boxShadow-cus text-white font-semibold">
                See nearest Location
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-banner2 bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20 after:opacity-40 ">
          <div className="z-10 ml-[10rem] pt-[50vh] opacity-95">
            <Text className="block text-[5.5rem] font-bold text-white">
              Lorem Ipsum
            </Text>
            {/* <Text className="block font-medium text-[3.35rem]  mb-5 mt-[-2.4rem] text-white">
              with our special coffee flavour
            </Text> */}
            <div>
              <button className="bg-[#146d4d] border-none cursor-pointer py-[0.7rem] px-[1rem] rounded-[0.2rem] text-center flex items-center boxShadow-cus text-white font-semibold">
                See nearest Location
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-banner3 bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20 after:opacity-40 ">
          <div className="z-10 ml-[10rem] pt-[50vh] opacity-95">
            <Text className="block text-[5.5rem] font-bold text-white">
              Lorem Ipsum
            </Text>
            {/* <Text className="block font-medium text-[3.35rem]  mb-5 mt-[-2.4rem] text-white">
              with our special coffee flavour
            </Text> */}
            <div>
              <button className="bg-[#146d4d] border-none cursor-pointer py-[0.7rem] px-[1rem] rounded-[0.2rem] text-center flex items-center boxShadow-cus text-white font-semibold">
                See nearest Location
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-banner4 bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20 after:opacity-40 ">
          <div className="z-10 ml-[10rem] pt-[50vh] opacity-95">
            <Text className="block text-[5.5rem] font-bold text-white">
              Lorem Ipsum
            </Text>
            {/* <Text className="block font-medium text-[3.35rem]  mb-5 mt-[-2.4rem] text-white">
              with our special coffee flavour
            </Text> */}
            <div>
              <button className="bg-[#146d4d] border-none cursor-pointer py-[0.7rem] px-[1rem] rounded-[0.2rem] text-center flex items-center boxShadow-cus text-white font-semibold">
                See nearest Location
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full bg-banner5 bg-cover after:content-[' '] after:absolute after:bg-black after:top-0 after:bottom-0 after:right-0 after:left-0 after:z-20 after:opacity-40 ">
          <div className="z-10 ml-[10rem] pt-[50vh] opacity-95">
            <Text className="block text-[5.5rem] font-bold text-white">
              Lorem Ipsum
            </Text>
            {/* <Text className="block font-medium text-[3.35rem]  mb-5 mt-[-2.4rem] text-white">
              with our special coffee flavour
            </Text> */}
            <div>
              <button className="bg-[#146d4d] border-none cursor-pointer py-[0.7rem] px-[1rem] rounded-[0.2rem] text-center flex items-center boxShadow-cus text-white font-semibold">
                See nearest Location
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Intro;
