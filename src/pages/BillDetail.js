import { Col, Row, InputNumber, Button } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import order1 from "../images/menu/order1.png";
import order2 from "../images/menu/order2.png";
import Product from "../components/productInCart/product";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductToCard } from "../reducer/product/productSlice";
import { getAllCTHDUser } from "../api/billApi";
import ChiTietHoaDon from "../components/CTHD/ChiTietHoaDon";
const { Meta } = Card;
const BillDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const billDetail = location.state.billDetail;
  console.log(billDetail);
  const [listCTHD, setListCTHD] = useState([]);
  const [quantityProduct, setQuantityProduct] = useState(1);
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems_state, setCarrItems_state] = useState(cartItems);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const FetchHoaDon = async () => {
      const response = await getAllCTHDUser(billDetail.MaHD);
      console.log(response);
      setListCTHD(response.hoadon);
      let total = response.hoadon.reduce(
        (accumulator, currentValue) => accumulator + currentValue.ThanhTien,
        0
      );
      setTotalCart(total + 40000);
    };
    FetchHoaDon();
  }, []);

  return (
    <div className="container  h-full  max-w-[1024px] mx-auto pb-40 mt-20 ">
      <Title level={2} className="text-black">
        Chi tiết đơn đặt
      </Title>

      <Row gutter={35} className="h-full">
        <Col className="h-full mb-10 " span={16}>
          <Row className="w-full h-full border-[0.01rem] py-4 border-solid border-[#CFCFCF]  flex items-center justify-center mb-2">
            <Col span={11}>
              <div className="flex">
                <p>Đơn đặt:</p>
                <p className="ml-3 font-semibold text-[#146d4d]">
                  #{billDetail.MaHD}
                </p>
              </div>
              <div className="flex">
                <p>Ngày Mua:</p>
                <p className="ml-3 font-semibold text-[#146d4d]">
                  {billDetail.ngaythanhtoan}
                </p>
              </div>
              <div className="flex">
                <p>Thanh Toán:</p>
                <p className="ml-3 font-semibold text-[#146d4d]"> COD</p>
              </div>
            </Col>
            <Col span={11}>
              <div className="flex">
                <p>Họ Tên:</p>
                <p className="ml-3 font-semibold text-[#146d4d]">
                  {billDetail.HoTen}
                </p>
              </div>
              <div className="flex">
                <p>SĐT:</p>
                <p className="ml-3 font-semibold text-[#146d4d]">
                  {billDetail.SDT}
                </p>
              </div>
              <div className="flex">
                <p>Địa Chỉ:</p>
                <p className="ml-3 font-semibold text-[#146d4d]">
                  {billDetail.DiaChiNH}
                </p>
              </div>
            </Col>
            <div className="w-[82%] ">
              <Button className="bg-[#FFCC33]  h-7 w-24 rounded-lg  flex justify-center items-center text-[#fff] text-[0.7rem] font-bold">
                {billDetail.TrangThai}
              </Button>
            </div>
          </Row>
          <Row className="w-full h-[10vh] border-y-[0.01rem] border-solid border-[#CFCFCF] text-[#ABABAB] flex items-center justify-center ">
            <Col span={12}>Sản phẩm</Col>
            <Col className="flex justify-center" span={6}>
              Số lượng
            </Col>
            <Col className="flex justify-center" span={6}>
              Số tiền
            </Col>
          </Row>
          {listCTHD.map((item, index) => {
            return (
              <ChiTietHoaDon
                key={index}
                size={item.Size}
                cartItems={cartItems}
                topping={item.Topping}
                item={item}
                id={item.MaSP}
              />
            );
          })}
        </Col>
        <Col className="h-full " span={8}>
          <div className="w-full px-6 h-[65vh] border-[1px] border-solid border-[#F5F5F6] bg-[#F5F5F6] rounded-2xl ">
            <Title
              className="border-b-[0.01rem] border-solid border-[#C6BDBD] py-3 mt-3"
              level={5}
            >
              ORDER SUMMARY
            </Title>
            <div className="w-full border-b-[0.01rem] pb-16 border-solid border-[#C6BDBD] ">
              <div className="w-full flex mt-10 justify-between ">
                <p>PHỤ THU</p>
                <p>5.000 VND</p>
              </div>
              <div className="w-full flex mt-10 justify-between ">
                <p>THUẾ GTGT</p>
                <p>5.000 VND</p>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-between ">
              <p>TỔNG CỘNG</p>
              <p>{totalCart.toLocaleString()} VND</p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BillDetail;
