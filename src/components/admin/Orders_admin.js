import React from "react";
import "antd/dist/antd.css";
import {
  Button,
  Layout,
  Space,
  Table,
  Tag,
  Spin,
  message,
  Popconfirm,
  notification,
  Modal,
} from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  DeleteOutlined,
  EditOutlined,
  LoadingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import AppMenu from "../../components/admin/AppMenu";
import { deleteStaff, getAlUser } from "../../api/admin/Users";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserProfile } from "../../reducer/admin/user/userAction";
import Search from "antd/lib/input/Search";
import { useNavigate } from "react-router-dom";
import { getDetailUser } from "../../reducer/admin/user/userSlice";
import { getAllOrders } from "../../reducer/admin/order/orderActions";
import {
  getMaHDAndMaKH,
  onFilterOrder,
} from "../../reducer/admin/order/orderSlice";
import { confirmOrder } from "../../api/admin/Order";
import { fetchBill } from "../../reducer/bill/billAction";
import { getDetailBill } from "../../reducer/bill/billSlice";
import { cancelBillUser, doneBillUser } from "../../api/billApi";
const Orders_admin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { orders, isLoading } = useSelector((state) => state.order_admin);
  const { bill } = useSelector((state) => state.bill);
  const [data, setData] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isChuaxnActive, setIsChuaxnActive] = useState("");
  const [isDaxnActive, setIsDaxnActive] = useState("");
  const [isDanggiaoActive, setIDanggiaosActive] = useState("");
  const [isDagiaoActive, setIsDagiaoActive] = useState("");
  const [isReset, setIsReset] = useState(false);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

  const handleClickAddStaff = () => {
    navigate("/admin/staff/add-staff");
  };
  const handleClickDetailBill = (e) => {
    const id = e.target.id;
    const order = orders.find((item) => parseInt(item.id) === parseInt(id));
    dispatch(fetchBill(order.MaKH));

    navigate("/admin/order/detail-bill", {
      state: { MaHD: order.MaHD, MaKH: order.MaKH },
    });
  };
  const handleClickDeleteStaff = async (e) => {
    // const id = e.target.id;
    // await deleteStaff(id);
    // dispatch(getAllUserProfile());
  };
  const handleClickSort = () => {
    setIsClick(!isClick);
  };
  const handleClickConfirmOrder = async (e) => {
    const id = e.target.id;
    const element = orders.find((item) => parseInt(item.id) === parseInt(id));

    if (element.TrangThai === "Chưa xác nhận") {
      await confirmOrder(id);
      notification["success"]({
        message: "Thành công",
        description: "Xác nhận đơn hàng thành công",
      });
    } else {
      await doneBillUser(id);
      notification["success"]({
        message: "Thành công",
        description: "Xác nhận đơn hàng đã giao thành công",
      });
    }

    dispatch(getAllOrders());
  };
  const handleClickDeleteBill = async (e) => {
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
    console.log(id);
  };
  const handleClickDeleteBill1 = async (id) => {
    const res = await cancelBillUser(id);
    dispatch(getAllOrders());
    console.log(res);
    if (res.data.status === true) {
      notification["success"]({
        message: "Thành công",
        description: "Hủy đơn hàng thành công",
      });
    }
  };

  const handleClickFilterCXN = () => {
    let inputArray = [];
    orders.forEach((order) => {
      if (order.TrangThai === "Chưa xác nhận") {
        inputArray.push(order);
      }
    });
    setData(inputArray);
  };
  const handleClickFilterĐG = () => {
    let inputArray = [];
    orders.forEach((order) => {
      if (order.TrangThai === "Đang giao") {
        inputArray.push(order);
      }
    });
    setData(inputArray);
  };
  const handleClickFilterĐGiao = () => {
    let inputArray = [];
    orders.forEach((order) => {
      if (order.TrangThai === "Đã giao") {
        inputArray.push(order);
      }
    });
    setData(inputArray);
  };
  const handleClickFilterĐH = () => {
    let inputArray = [];
    orders.forEach((order) => {
      if (order.TrangThai === "Đã hủy") {
        inputArray.push(order);
      }
    });
    setData(inputArray);
  };
  var title = "Trạng thái";
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  // useEffect(() => {
  //   dispatch(fetchBill(MaKH));
  // }, []);
  const columns = [
    {
      title: "Mã Đơn hàng",
      dataIndex: "MaHD",
      key: "MaHD",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên khách hàng",
      dataIndex: "HoTen",
      key: "HoTen",
    },
    {
      title: "Số điện thoại",
      dataIndex: "SDT",
      key: "SDT",
    },
    {
      title: (
        <div className="flex">
          Trạng thái
          <div onClick={handleClickSort} className="ml-2 w-4 cursor-pointer">
            <CaretDownOutlined />
          </div>
        </div>
      ),
      key: "TrangThai",
      dataIndex: "TrangThai",
      render: (_, record) => (
        <Button
          className={` h-3 w-24 p-3 px-1 rounded-lg  flex justify-center items-center text-[#fff] text-[0.65rem] font-bold
          ${record.TrangThai == "Chưa xác nhận" && "bg-[#EC870E]"} ${
            record.TrangThai == "Đã hủy" && "bg-[#DD0000]"
          }
            ${record.TrangThai == "Đang giao" && "bg-[#FFCC33]"}
            ${record.TrangThai == "Đã giao" && "bg-[#50A625]"}
          `}
        >
          {record.TrangThai}
        </Button>
      ),
    },
    {
      title: "PTTT",
      dataIndex: "PTTT",
      key: "PTTT",
    },
    {
      title: "Địa chỉ",
      dataIndex: "DiaChi",
      key: "DiaChi",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <div
            className="cursor-pointer"
            onClick={(e) => handleClickDetailBill(e)}
          >
            <svg
              id={record.id}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                id={record.id}
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>
          </div>
          {/* <div
            className="cursor-pointer"
            onClick={(e) => handleClickDeleteStaff(e)}
          >
            <svg
              id={record.id}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                id={record.id}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </div> */}
          <div
            className="cursor-pointer relative w-30 h-30"
            name={record.MaHD}
            onClick={(e) => handleClickConfirmOrder(e)}
          >
            {(record.TrangThai === "Chưa xác nhận" ||
              record.TrangThai === "Đang giao") && (
              <svg
                id={record.id}
                values={record.key}
                name={record.MaHD}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  id={record.id}
                  values={record.key}
                  name={record.MaHD}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            )}
          </div>
          {(record.TrangThai === "Đang giao" ||
            record.TrangThai === "Chưa xác nhận") && (
            <div
              className="cursor-pointer relative w-30 h-30"
              onClick={(e) => handleClickDeleteBill(e)}
            >
              <svg
                id={record.MaHD}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-wMaHDth="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  id={record.id}
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          )}
        </Space>
      ),
    },
  ];
  useEffect(() => {
    dispatch(getAllOrders());
    console.log(orders);
  }, []);

  useEffect(() => {
    // console.log(users);

    let listOrders = [];
    orders?.map((item, index) => {
      const order = {
        key: index,
        id: item.id,
        MaHD: item.MaHD,
        HoTen: item.HoTen,
        SDT: item.SDT,
        TrangThai: item.TrangThai,
        PTTT: item.PTTT,
        DiaChi: item.DiaChiNH,
      };
      listOrders.push(order);
    });
    if (isClick === true) {
      setData(
        listOrders.sort((a, b) =>
          a.TrangThai > b.TrangThai ? 1 : b.TrangThai > a.TrangThai ? -1 : 0
        )
      );
    } else {
      setData(listOrders);
    }
  }, [orders, isClick, isReset]);

  const onSearch = (e) => {
    dispatch(onFilterOrder(e.target.value));
  };
  return (
    <>
      <div className="w-full my-5 flex justify-start ">
        <Search
          className="w-[15rem]"
          placeholder="Tìm kiếm đơn hàng"
          onChange={(e) => onSearch(e)}
          style={{
            marginLeft: "20px",
            width: 300,
          }}
        />
      </div>
      <div className="px-4 pt-4 pb-14 bg-[#F0F2F5] ">
        <div className="mb-3">
          <p className="text-[1.3rem] font-bold mb-1">Đơn hàng</p>
          <Button
            onClick={() => setIsReset(!isReset)}
            className="mx-1 text-[#fff] bg-[#000] "
          >
            Tất cả
          </Button>
          <Button
            onClick={handleClickFilterCXN}
            className="mx-1 text-[#fff] bg-[#EC870E] "
          >
            Chưa xác nhận
          </Button>
          <Button
            onClick={handleClickFilterĐG}
            className="mx-1 text-[#fff] bg-[#FFCC33]"
          >
            Đang giao
          </Button>
          <Button
            onClick={handleClickFilterĐGiao}
            className="mx-1 text-[#fff] bg-[#146d4d]"
          >
            Đã giao
          </Button>
          <Button
            onClick={handleClickFilterĐH}
            className="mx-1 text-[#fff] bg-[#DD0000]"
          >
            Đã hủy
          </Button>
        </div>
        <Table
          // pagination={false}
          style={{
            boxSizing: "padding-box",
          }}
          className="  "
          columns={columns}
          dataSource={data}
        ></Table>
        {isLoading && <Spin indicator={antIcon} />}
      </div>
    </>
  );
};

export default Orders_admin;
