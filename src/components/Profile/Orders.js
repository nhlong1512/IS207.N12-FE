import React, { useEffect } from "react";
import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Radio,
  Row,
  Upload,
  message,
  Popconfirm,
  Modal,
  notification,
} from "antd";
import Title from "antd/lib/typography/Title";
import { useDispatch, useSelector } from "react-redux";
import { fetchBill } from "../../reducer/bill/billAction";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { forEach } from "underscore";
import { DeleteOutlined } from "@ant-design/icons";
import { cancelBillUser, doneBillUser } from "../../api/billApi";
import { getDetailBill } from "../../reducer/bill/billSlice";
const Orders = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.auth);
  // dispatch(fetchBill(user.id));
  const { bill } = useSelector((state) => state.bill);
  const [bills, setBills] = useState(bill);
  useEffect(() => {
    setBills(bill);
  }, [bill]);
  useEffect(() => {
    dispatch(fetchBill(user.id));
  }, [isAuthenticated]);
  const handleClickBillDetail = (e) => {
    const idString = e.target.id;
    const id = parseInt(idString);
    const billDetail = bills.find((bill) => bill.MaHD === id);
    dispatch(getDetailBill(billDetail));
    navigate(`/bill/${id}`, {
      state: { billDetail: billDetail, id: id },
    });
  };

  const handleClickDeleteBill = (e) => {
    const idString = e.target.id;
    const id = parseInt(idString);
    Modal.confirm({
      title: "Cảnh báo",
      content: "Bạn có chắc chắn muốn hủy đơn hàng này không?",
      cancelText: "Cancel",
      onOk: () => {
        handleClickDeleteBill1(id);
      },
    });
  };

  const handleClickDeleteBill1 = async (id) => {
    const res = await cancelBillUser(id);
    dispatch(fetchBill(user.id));
    if (res.status === true) {
      notification["success"]({
        message: "Thành công",
        description: "Hủy đơn hàng thành công",
      });
    }
  };

  const handleClickDoneBill = async (e) => {
    const idString = e.target.id;
    const id = parseInt(idString);
    console.log(id);
    await doneBillUser(id);
    dispatch(fetchBill(user.id));
  };
  return (
    <div className="container w-full pl-20  h-full">
      <div className="flex items-center mb-8 w-full ">
        <div className="w-full">
          <Title className=" " level={3}>
            Orders
          </Title>
          {/* <input
            // className="hidden"
            type="file"
            name="myImage"
            onChange={(e) => onChangeImage(e)}
          /> */}
          <Title className=" " level={5}>
            Your orders will be displayed here.
          </Title>
        </div>
      </div>
      <Row>
        <Col className="h-full mb-10 " span={24}>
          <Row className="w-full h-full  text-[#ABABAB] flex items-center justify-center ">
            <Col className="flex justify-left" span={4}>
              Mã đơn hàng
            </Col>
            <Col className="flex justify-left" span={4}>
              Ngày thanh toán
            </Col>
            <Col className="flex justify-left" span={4}>
              Tổng cộng
            </Col>
            <Col className="flex justify-left" span={4}>
              Trạng thái
            </Col>
            <Col className="flex justify-center" span={4}>
              Hình thức thanh toán
            </Col>
            <Col className="flex justify-left" span={4}></Col>
            {bill.map((item) => (
              <Row
                key={item.id}
                className="w-full  border-t-[0.01rem] border-solid py-3 text-[#000]  border-[#CFCFCF] "
              >
                <Col className="pl-10" span={4}>
                  {item.MaHD}
                </Col>
                <Col className="flex justify-left" span={4}>
                  {item.ngaythanhtoan}
                </Col>
                <Col className="flex justify-left" span={4}>
                  {item.tongtien.toLocaleString()}
                </Col>
                <Col
                  className={`flex justify-lef ${
                    item.TrangThai == "Chưa xác nhận" && "text-[#EC870E]"
                  } ${item.TrangThai == "Đã hủy" && "text-[#DD0000]"}
                    ${item.TrangThai == "Đang giao" && "text-[#FFCC33]"}
                    ${item.TrangThai == "Đã giao" && "text-[#50A625]"} `}
                  span={4}
                >
                  {item.TrangThai}
                </Col>
                <Col className="flex justify-center" span={4}>
                  COD
                </Col>
                <Col className="flex justify-center cursor-pointer" span={4}>
                  <div id={item.MaHD} onClick={(e) => handleClickBillDetail(e)}>
                    <svg
                      id={item.MaHD}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        id={item.MaHD}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  {item.TrangThai === "Chưa xác nhận" && (
                    <div
                      className="flex justify-center cursor-pointer ml-1"
                      id={item.MaHD}
                      onClick={(e) => handleClickDeleteBill(e)}
                    >
                      <svg
                        id={item.MaHD}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          id={item.MaHD}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  )}
                  {item.TrangThai === "Đang giao" && (
                    <div
                      className="flex justify-center cursor-pointer ml-1"
                      id={item.MaHD}
                      onClick={(e) => handleClickDoneBill(e)}
                    >
                      <svg
                        id={item.MaHD}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                      >
                        <path
                          id={item.MaHD}
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  )}
                </Col>
              </Row>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Orders;
