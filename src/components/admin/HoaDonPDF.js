import { Button, Image, Space, Table } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { getHoaDon } from "../../api/admin/Hoadon";
import { getAllCTHDUser } from "../../api/billApi";
import barcode from "../../images/barcode.png";
const HoaDonPDF = () => {
  const location = useLocation();
  const componentRef = useRef();
  const MaHD = location.state.MaHD;
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Hóa đơn" + MaHD,
    onAfterPrint: () => alert("In hóa đơn thành công"),
  });

  const [totalCart, setTotalCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const columns = [
    {
      title: "Tên món",
      dataIndex: "TenSP",
      key: "TenSP",
      render: (text) => <p className=" ">{text}</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "SoLuong",
      key: "SoLuong",
    },
    {
      title: "Size",
      dataIndex: "Size",
      key: "Size",
    },
    {
      title: "Topping",
      dataIndex: "Topping",
      key: "Topping",
      render: (text) =>
        text.map((item) => (
          <p className="mb-0">
            {item && "+"}
            {item}
          </p>
        )),
    },
    {
      title: "Đơn giá",
      dataIndex: "Gia",
      key: "Gia",
    },
    {
      title: "Thành tiền",
      dataIndex: "ThanhTien",
      key: "ThanhTien",
    },
  ];
  const [listCTHD, setListCTHD] = useState([]);
  const [data, setData] = useState([]);
  const [hoadonDetail, setHoadonDetail] = useState({});

  useEffect(() => {
    const FetchHoaDon = async () => {
      const response = await getAllCTHDUser(MaHD);
      setIsLoading(false);

      response.hoadon.map((item) => {
        item.Topping = item.Topping.split(",");
      });
      console.log("detailabc", response.hoadon);
      setListCTHD(response.hoadon);
      let total = response.hoadon.reduce(
        (accumulator, currentValue) => accumulator + currentValue.ThanhTien,
        0
      );
      setTotalCart(total);
    };
    FetchHoaDon();
  }, []);
  useEffect(() => {
    const FetchDonHang = async () => {
      const { hoadon } = await getHoaDon();
      if (listCTHD) setIsLoading(false);
      const hoadonDetail = hoadon.find(
        (item) => parseInt(item.id) === parseInt(MaHD)
      );
      console.log("reseff", hoadonDetail);
      setHoadonDetail(hoadonDetail);
    };
    FetchDonHang();
  }, [isLoading]);

  useEffect(() => {
    let listHoaDonTrucTiep = [];
    listCTHD?.map((item, index) => {
      const hoadontructiep = {
        key: index,
        id: item.id,
        Size: item.Size,
        Topping: item.Topping,
        TenSP: item.TenSP,
        SoLuong: item.SoLuong,
        Gia: item.Gia.toLocaleString(),
        ThanhTien: item.ThanhTien.toLocaleString(),
      };
      listHoaDonTrucTiep.push(hoadontructiep);
    });
    console.log(listHoaDonTrucTiep);
    setData(listHoaDonTrucTiep);
  }, [isLoading]);
  return (
    <>
      <div className="absolute  top-6 right-10">
        <Button
          onClick={handlePrint}
          className="bg-[#146d4d] text-white font-semibold px-2  rounded-md"
        >
          In hóa đơn
        </Button>
      </div>
      <div
        ref={componentRef}
        className="container max-w-[600px] mx-auto h-full py-8"
      >
        <p className="text-center text-xl text-[#146d4d] font-semibold mb-1">
          MORRII COFFEE
        </p>
        <p className="text-center text-base mb-0 ">
          25-27 đường N1 KDC 61, khu phố Tân Lập, Dĩ An, Bình Dương
        </p>
        <p className="text-center text-base w-full border-b-[1px] border-solid pb-3 border-[#000]  ">
          SĐT: 0909 999 999
        </p>
        <p className="text-center text-xl text-[#146d4d] font-semibold mb-0">
          Hóa đơn thanh toán
        </p>
        <p className="text-center font-semibold text-base mb-0 ">
          {hoadonDetail.NgayHD}
        </p>
        <div className="flex justify-between w-[34%]">
          <p className="text-left font-semibold text-base mb-0 mr-2 ">
            Mã hóa đơn:
          </p>
          <p className="text-left font-semibold text-base mb-0 w-[100px]">01</p>
        </div>
        <div className="flex justify-between w-[35%]">
          <p className="text-center font-semibold text-base mb-0 mr-2">
            Nhân viên:
          </p>
          <p className="text-left font-semibold text-base mb-0 w-[108px] mb-5 ">
            {hoadonDetail.hoten}
          </p>
        </div>
        <Table
          pagination={false}
          style={{
            boxSizing: "padding-box",
          }}
          className="  "
          columns={columns}
          dataSource={data}
        ></Table>

        <div className="flex justify-end w-full items-center ml-6 mt-3 ">
          <p className="text-center text-lg font-semibold  mb-0 ">Tổng cộng</p>
          <p className="text-left font-semibold text-base w-[108px] ml-5 mb-0 ">
            {totalCart.toLocaleString() + "đ"}
          </p>
        </div>
        <div className="flex justify-end w-full items-center ml-6 border-b-[2px] border-solid pb-3 border-[#000]">
          <p className="text-center text-lg font-semibold  mb-0 mr-2">
            Giảm giá
          </p>
          <p className="text-left font-semibold text-base w-[108px] ml-5 mb-0 ">
            0.000đ
          </p>
        </div>
        <div className="flex justify-end w-full items-center ml-6 mt-3 ">
          <p className="text-center text-2xl font-semibold  mb-0 ">
            Thanh toán
          </p>
          <p className="text-left font-semibold text-base w-[108px] ml-5 mb-0 ">
            {totalCart.toLocaleString() + "đ"}
          </p>
        </div>
        <div className="flex justify-center w-full items-center ml-6 mt-3 ">
          <Image className="" src={barcode} />
        </div>
        <div className="flex justify-center w-full items-center ml-6 mt-3 ">
          <p className="text-center text-[#146d4d] text-lg font-semibold  mb-0 ">
            Morii Coffee xin chào và hẹn gặp lại !
          </p>
        </div>
      </div>
    </>
  );
};

export default HoaDonPDF;
