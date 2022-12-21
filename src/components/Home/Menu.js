import { Col, Image, Row, Typography } from "antd";
import Title from "antd/lib/typography/Title";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Item1 from "../../images/menu/menu-1.png";
import Item2 from "../../images/menu/menu-2.png";
import Item3 from "../../images/menu/menu-3.png";
import Item4 from "../../images/menu/menu-4.png";
import Item5 from "../../images/menu/menu-5.png";
import Item6 from "../../images/menu/menu-6.png";
import { fetchProduct } from "../../reducer/product/productAction";
export default function Menu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, currentPage } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProduct());
    console.log(products);
  }, []);
  const { Text } = Typography;

  const handleClickProduct = async (e) => {
    console.log(e.target.id);
    const idProduct = e.target.id;
    const baseUrl = `http://localhost:8000/api/sanpham`;
    const res = await axios.get(`${baseUrl}/${idProduct}`);
    console.log("nek", res.data.sanpham);
    if (res.data.status) {
      navigate(`/sanpham/${idProduct}`, {
        state: { infoProduct: res.data.sanpham },
      });
    }
  };
  return (
    <div className="h-[100vh] bg-[#010103] w-full">
      <div className="flex bg-[#010103] items-center justify-center w-full  pt-12">
        <Title className="text-[#146d4d] text-[3rem] font-bold ">
          Thực Đơn
        </Title>
      </div>
      <div className="w-full   bg-[#010103] flex justify-around">
        <div className="flex flex-col items-center ml-6">
          {products.map((item) => {
            if (item.id == 7 || item.id == 8 || item.id == 9) {
              return (
                <div
                  onClick={(e) => handleClickProduct(e)}
                  id={item.id}
                  className=" flex items-center justify-around cursor-pointer px-10 py-5 relative"
                >
                  <div
                    id={item.id}
                    className="top z-1 absolute top-[1.8rem] left-0"
                  >
                    <Image
                      id={item.id}
                      className="w-[5rem] h-[5rem] rounded-full"
                      preview={false}
                      src={item.HinhAnh}
                    />
                  </div>
                  <div
                    id={item.id}
                    className="border-[0.01px] h-[6.2rem] w-[30rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between"
                  >
                    <Text
                      id={item.id}
                      className=" text-[#ffffff] text-[1.6rem] "
                    >
                      {item.TenSP}
                    </Text>
                    <Text
                      id={item.id}
                      className=" text-[#c7a17a] text-[1.6rem]"
                    >
                      {item.Gia.toLocaleString()} VND
                    </Text>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="flex flex-col items-center">
          {products.map((item) => {
            if (item.id == 10 || item.id == 11 || item.id == 2) {
              return (
                <div
                  onClick={(e) => handleClickProduct(e)}
                  id={item.id}
                  className=" flex items-center justify-around cursor-pointer px-10 py-5 relative"
                >
                  <div
                    id={item.id}
                    className="top z-1 absolute top-[1.8rem] left-0"
                  >
                    <Image
                      id={item.id}
                      className="w-[5rem] h-[5rem] rounded-full"
                      preview={false}
                      src={item.HinhAnh}
                    />
                  </div>
                  <div
                    id={item.id}
                    className="border-[0.01px] h-[6.2rem] w-[30rem] border-solid border-[#32323D] pl-[5rem] py-6 pr-8 flex justify-between"
                  >
                    <Text
                      id={item.id}
                      className=" text-[#ffffff] text-[1.6rem] "
                    >
                      {item.TenSP}
                    </Text>
                    <Text
                      id={item.id}
                      className=" text-[#c7a17a] text-[1.6rem]"
                    >
                      {item.Gia.toLocaleString()} VND
                    </Text>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
