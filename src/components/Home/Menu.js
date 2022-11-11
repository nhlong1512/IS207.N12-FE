import { Col, Image, Row, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import Item1 from "../../images/menu/menu-1.png";
import Item2 from "../../images/menu/menu-2.png";
import Item3 from "../../images/menu/menu-3.png";
import Item4 from "../../images/menu/menu-4.png";
import Item5 from "../../images/menu/menu-5.png";
import Item6 from "../../images/menu/menu-6.png";
export default function Menu() {
  const { Text } = Typography;
  return (
    <div className="h-[100vh] bg-[#010103] w-full">
      <div className="flex bg-[#010103] items-center justify-center w-full  pt-12">
        <Title className="text-[#146d4d] text-[3rem] font-bold ">
          Thực Đơn
        </Title>
      </div>
      <div className="w-full   bg-[#010103] flex justify-around">
        <div className="flex flex-col items-center">
          <div className=" flex items-center justify-around cursor-pointer px-10 py-5 relative">
            <div className=" top z-1 absolute top-[1.8rem] left-0">
              <Image
                className="w-[5rem] h-[5rem]"
                preview={false}
                src={Item1}
              />
            </div>
            <div className="border-[0.01px] h-[6.2rem] w-[32rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between">
              <Text className=" text-[#ffffff] text-[1.6rem] ">
                Americano Rosted GRED
              </Text>
              <Text className=" text-[#c7a17a] text-[1.6rem]">$12.00</Text>
            </div>
          </div>
          <div className=" flex items-center justify-around cursor-pointer px-10 py-5 relative">
            <div className="top z-1 absolute top-[1.8rem] left-0">
              <Image
                className="w-[5rem] h-[5rem] "
                preview={false}
                src={Item2}
              />
            </div>
            <div className="border-[0.01px] h-[6.2rem] w-[32rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between">
              <Text className=" text-[#ffffff] text-[1.6rem] ">
                Americano Rosted GRED
              </Text>
              <Text className=" text-[#c7a17a] text-[1.6rem]">$12.00</Text>
            </div>
          </div>
          <div className=" flex items-center justify-around cursor-pointer px-10 py-5 relative">
            <div className="top z-1 absolute top-[1.8rem] left-0">
              <Image
                className="w-[5rem] h-[5rem] "
                preview={false}
                src={Item3}
              />
            </div>
            <div className="border-[0.01px] h-[6.2rem] w-[32rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between">
              <Text className=" text-[#ffffff] text-[1.6rem] ">
                Americano Rosted GRED
              </Text>
              <Text className=" text-[#c7a17a] text-[1.6rem]">$12.00</Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className=" flex items-center justify-around cursor-pointer px-10 py-5 relative">
            <div className="top z-1 absolute top-[1.8rem] left-0">
              <Image
                className="w-[5rem] h-[5rem] "
                preview={false}
                src={Item4}
              />
            </div>
            <div className="border-[0.01px] h-[6.2rem] w-[32rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between">
              <Text className=" text-[#ffffff] text-[1.6rem] ">
                Americano Rosted GRED
              </Text>
              <Text className=" text-[#c7a17a] text-[1.6rem]">$12.00</Text>
            </div>
          </div>
          <div className=" flex items-center justify-around cursor-pointer px-10 py-5 relative">
            <div className="top z-1 absolute top-[1.8rem] left-0">
              <Image
                className="w-[5rem] h-[5rem] "
                preview={false}
                src={Item5}
              />
            </div>
            <div className="border-[0.01px] h-[6.2rem] w-[32rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between">
              <Text className=" text-[#ffffff] text-[1.6rem] ">
                Americano Rosted GRED
              </Text>
              <Text className=" text-[#c7a17a] text-[1.6rem]">$12.00</Text>
            </div>
          </div>
          <div className=" flex items-center justify-around cursor-pointer px-10 py-5 relative">
            <div className="top z-1 absolute top-[1.8rem] left-0">
              <Image
                className="w-[5rem] h-[5rem] "
                preview={false}
                src={Item6}
              />
            </div>
            <div className="border-[0.01px] h-[6.2rem] w-[32rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between">
              <Text className=" text-[#ffffff] text-[1.6rem] ">
                Americano Rosted GRED
              </Text>
              <Text className=" text-[#c7a17a] text-[1.6rem]">$12.00</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
