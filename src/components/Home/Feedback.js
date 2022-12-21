import React from "react";
import { Card, Col, Row, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import Ava1 from "../../images/avatar/avatar1.jpg";
import Ava2 from "../../images/avatar/avatar2.jpg";
import Ava3 from "../../images/avatar/avatar3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";
const { Meta } = Card;
const { Title, Paragraph, Text } = Typography;
const Img = styled.img`
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  &:hover {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform-y: scale(1);
    overflow-y: hidden;
  }
`;
export default function Feedback() {
  return (
    <div className="w-full h-[80vh] bg-white flex-col justify-center">
      <div className="w-full py-8 ">
        <Title className="text-[#146d4d] w-full mb-0  text-center">
          Phản Hồi Của Khách Hàng
        </Title>
      </div>

      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper w-full h-[55vh]  "
      >
        <SwiperSlide className="w-full bg-white ">
          <div className="z-10  flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[9rem] h-[9rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava1}
            />
            <Text className="text-[1.2rem] block text-center w-[60rem] my-2 mx-auto ">
              Nhân viên rất lịch sự và chu đáo. Khách hàng trong quán hầu như là
              sinh viên các trường đại học lân cận như ĐH UIT, các trường ĐHQG.
              Vì đối tượng khách hàng là sinh viên nên giá cả rất phải chăng.
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[1.4rem]  font-normal text-[#146d4d] "
              >
                Trọng Tín
              </Text>
            </div>
          </div>
          <div className="w-full bg-black"></div>
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-white ">
          <div className="z-10  flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[9rem] h-[9rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava2}
            />
            <Text className="text-[1.2rem] block text-center w-[60rem] my-2 mx-auto ">
              Thái độ nhân viên khiến mình rất hài lòng, dù chỉ là một cử chỉ
              quan tâm nhỏ mình cảm giác rất chân thành và quán chưa bao giờ làm
              mình thất vọng về chất lượng cũng như thái độ phục vụ.
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[1.4rem]  font-normal text-[#146d4d] "
              >
                Mỹ Nhung
              </Text>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-white ">
          <div className="z-10  flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[9rem] h-[9rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava3}
            />
            <Text className="text-[1.2rem] block text-center w-[60rem] my-2 mx-auto ">
              Thái độ của nhân viên quán thực sự khiến mình hài lòng, với mình,
              chỉ một cử chỉ quan tâm dù nhỏ, nhưng chân thành là đủ, thực sự
              đến quán đã nhiều lần, chưa lần nào thất vọng.
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[1.4rem]  font-normal text-[#146d4d] "
              >
                Ngọc Ánh
              </Text>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full  bg-white ">
          <div className="z-10  flex-col  ">
            <Img
              className=" hover:overflow-hidden w-[9rem] h-[9rem] rounded-full cursor-pointer mx-auto"
              alt="example"
              src={Ava3}
            />
            <Text className="text-[1.2rem] block text-center w-[60rem] my-2 mx-auto ">
              Không gian quán đẹp, mở nhạc hợp gu mình 👏🏻👏🏻 mấy bạn nhân viên
              cũng dễ thương nữa, pha nước siêu nhanh lại ngon.
            </Text>
            <div className="w-full  flex justify-center  text-center block">
              <Text
                italic={true}
                className="text-[1.4rem]  font-normal text-[#146d4d] "
              >
                Hữu Long
              </Text>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
