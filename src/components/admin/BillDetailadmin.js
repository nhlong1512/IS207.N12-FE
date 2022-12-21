import { Col, Row, InputNumber, Button, Spin, Modal, notification } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
// import order1 from "../images/menu/order1.png";
// import order2 from "../images/menu/order2.png";
// import Product from "../components/productInCart/product";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  cancelBillUser,
  doneBillUser,
  getAllCTHDUser,
} from "../../api/billApi";
import ChiTietHoaDon from "../CTHD/ChiTietHoaDon";
import { fetchBill } from "../../reducer/bill/billAction";
import { confirmOrder, getAllOrderMAHD } from "../../api/admin/Order";
import { getHoaDon } from "../../api/admin/Hoadon";

const { Meta } = Card;
const BillDetailadmin = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  //   const navigate = useNavigate();

  const { bill } = useSelector((state) => state.bill);
  const MaHD = location.state.MaHD;
  const MaKH = location.state.MaKH;
  const [isLoading, setIsLoading] = useState(true);
  const [listCTHD, setListCTHD] = useState([]);
  const [billDetail, setBillDetail] = useState({});
  const [detailBill, setDetailBill] = useState({});
  //   const [quantityProduct, setQuantityProduct] = useState(1);
  //   var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   const [cartItems_state, setCarrItems_state] = useState(cartItems);
  const [totalCart, setTotalCart] = useState(0);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  useEffect(() => {
    const FetchDonHang = async () => {
      const { hoadon } = await getHoaDon();
      if (listCTHD) setIsLoading(false);
      const hoadonDetail = hoadon.find(
        (item) => parseInt(item.id) === parseInt(MaHD)
      );
      console.log("reseff111", hoadonDetail);
      setDetailBill(hoadonDetail);
    };
    FetchDonHang();
  }, [isLoading]);
  useEffect(() => {
    const FetchHoaDon = async () => {
      const response = await getAllCTHDUser(MaHD);
      if (billDetail) setIsLoading(false);
      console.log("detailabc", response);
      setListCTHD(response.hoadon);
      // let total = response.hoadon.reduce(
      //   (accumulator, currentValue) => accumulator + currentValue.ThanhTien,
      //   0
      // );
      // setTotalCart(total + 40000);
    };
    FetchHoaDon();
  }, []);

  //   useEffect(() => {
  //     //   dispatch(fetchBill(MaKH));
  //     console.log("billdetail", bill);
  //   }, []);

  useEffect(() => {
    const FetchDonHang = async () => {
      const res = await getAllOrderMAHD(MaHD);
      if (listCTHD) setIsLoading(false);
      console.log("reseff", res.donhang[0]);
      setBillDetail(res.donhang[0]);
    };
    FetchDonHang();
  }, [isLoading]);

  const handleClickDeleteBill = async (e) => {
    Modal.confirm({
      title: "Cảnh báo",
      content: "Bạn có chắc chắn muốn xóa nhân viên này không?",
      cancelText: "Cancel",
      // onOk: handleClickDeleteProduct1(id),
      onOk: () => {
        handleClickDeleteBill1();
      },
    });
  };

  const handleClickDeleteBill1 = async () => {
    const res = await cancelBillUser(billDetail.MaHD);
    setIsLoading(true);
    if (res.status === true) {
      notification["success"]({
        message: "Thành công",
        description: "Hủy đơn thành công thành công",
      });
    }
  };

  const handleClickConfirmOrder = async (e) => {
    await confirmOrder(billDetail.id);
    setIsLoading(true);
  };

  const handleClickDoneBill = async (e) => {
    await doneBillUser(billDetail.MaHD);
    setIsLoading(true);
  };
  return (
    <div className="container  h-full  max-w-[1024px] mx-auto pb-40 mt-20 ">
      <Title level={2} className="text-black">
        Chi tiết đơn đặt
      </Title>
      {isLoading && <Spin indicator={antIcon} />}
      <Row gutter={35} className="">
        <Col className="h-full mb-10 " span={16}>
          <Row className="w-full h-full border-[0.01rem] py-4 border-solid border-[#CFCFCF]  flex items-center justify-center mb-2">
            <Col span={11}>
              <div className="flex">
                <p>Đơn đặt:</p>
                <p className="ml-3 font-semibold text-[#146d4d]">
                  {billDetail.MaHD}
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
              <Button
                className={`     ${
                  billDetail.TrangThai == "Chưa xác nhận" && "bg-[#EC870E]"
                } ${billDetail.TrangThai == "Đã hủy" && "bg-[#FF0000]"}
            ${billDetail.TrangThai == "Đang giao" && "bg-[#FFC107]"}
            ${
              billDetail.TrangThai == "Đã giao" && "bg-[#50A625]"
            } p-3 rounded-lg  flex justify-center items-center text-[#fff] text-[0.7rem] font-bold`}
              >
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
                // cartItems={data}
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
                <p className="mb-0">Tổng Cộng </p>
                <p className="mb-0">
                  {detailBill.TongTien + detailBill.TienKM > 0
                    ? (detailBill.TongTien + detailBill.TienKM).toLocaleString()
                    : ""}{" "}
                  VND
                </p>
              </div>

              <div className="w-full flex mt-10 justify-between ">
                <p className="mb-0">{detailBill.TenKM}</p>
              </div>
              <div className="w-full flex mt-3 justify-between ">
                <p className="mb-0"> Khuyến Mãi</p>
                <p className="mb-0">
                  {detailBill.TienKM > 0
                    ? detailBill.TienKM.toLocaleString()
                    : "0"}{" "}
                  VND
                </p>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-between ">
              <p>Thành Tiền</p>
              <p>
                {" "}
                {detailBill.TongTien > 0
                  ? detailBill.TongTien.toLocaleString()
                  : ""}{" "}
                VND
              </p>
            </div>
          </div>

          {billDetail.TrangThai === "Chưa xác nhận" && (
            <div className="flex w-[90%] mx-auto justify-between mt-4">
              <p
                onClick={handleClickConfirmOrder}
                className="text-[#146d4d] cursor-pointer underline-offset-1 underline mb-0"
              >
                Xác nhận đơn hàng
              </p>
              <p
                onClick={handleClickDeleteBill}
                className="text-[#146d4d] cursor-pointer underline-offset-1 underline mb-0"
              >
                Hủy đơn hàng
              </p>
            </div>
          )}
          {billDetail.TrangThai === "Đang giao" && (
            <div className="flex w-[90%] mx-auto justify-between mt-4">
              <p
                onClick={handleClickDoneBill}
                className="text-[#146d4d] cursor-pointer underline-offset-1 underline mb-0"
              >
                Đã nhận hàng
              </p>
              <p
                onClick={handleClickDeleteBill}
                className="text-[#146d4d] cursor-pointer underline-offset-1 underline mb-0"
              >
                Hủy đơn
              </p>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BillDetailadmin;
