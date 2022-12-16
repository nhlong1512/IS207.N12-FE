import React, { useEffect } from "react";
import {
  Button,
  Layout,
  Space,
  Table,
  Tag,
  Spin,
  Image,
  Modal,
  notification,
  Row,
  Col,
  Input,
  Select,
} from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import {
  createKhuyenMai,
  getKhuyenMai,
  UpdateKhuyenMai,
} from "../../api/admin/KhuyenMai";
import { useDispatch, useSelector } from "react-redux";
import { getKhuyenMaiAction } from "../../reducer/admin/khuyenmai/khuyenmaiAction";

const KhuyenMai = () => {
  const dispatch = useDispatch();
  const { khuyenmais, status, selectedKhuyenmai } = useSelector(
    (state) => state.khuyenmai_admin
  );
  const [khuyenmaiInfo, setKhuyenMaiInfo] = useState({});
  const [defaultnKM, setDefaultnKM] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [dataKhuyenMai, setDataKhuyenMai] = useState([]);
  const handleChangeForm = (e) => {
    setKhuyenMaiInfo({ ...khuyenmaiInfo, [e.target.name]: e.target.value });
    console.log(khuyenmaiInfo);
  };
  const handleChange = (value, element) => {
    // console.log(`selected ${value}`);
    setDefaultnKM({
      label: element.label,
      value: element.value,
    });
    console.log(element);
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const handleSubmit = async () => {
    console.log(khuyenmaiInfo);
    if (
      khuyenmaiInfo.TenKM === undefined ||
      khuyenmaiInfo.TenKM === "" ||
      khuyenmaiInfo.phantramKM === undefined ||
      khuyenmaiInfo.phantramKM == ""
    ) {
      notification["error"]({
        message: "Thất bại",
        description: "Vui lòng nhập đầy đủ thông tin",
      });
    } else {
      const res = await createKhuyenMai(khuyenmaiInfo);
      notification["success"]({
        message: "Thành công",
        description: "Tạo khuyến mãi thành công",
      });
      dispatch(getKhuyenMaiAction());
    }
  };

  useEffect(() => {
    dispatch(getKhuyenMaiAction());
  }, []);
  var listKM = [];
  useEffect(() => {
    const FetchKhuyenMai = async () => {
      const res = await getKhuyenMai();
      console.log("aaa", res);
      res.khuyenmai.forEach((item) => {
        listKM.push({ label: item.TenKM, value: item.phantramKM });
      });
      const km = res.khuyenmai.find((item) => parseInt(item.Status) === 1);
      setDefaultnKM({ label: km.TenKM, value: km.phantramKM });
      console.log("km", km);
      setDataKhuyenMai(listKM);
      setIsLoading(false);
    };

    console.log("trongtin", listKM);
    FetchKhuyenMai();
  }, [isLoading]);

  useEffect(() => {
    console.log("aaa11", selectedKhuyenmai);
  }, [khuyenmais]);

  //   useEffect(() => {
  //     console.log(khuyenmais);
  //     let listKM = [];
  //     khuyenmais.forEach((item) => {
  //       listKM.push({ label: item.TenKM, value: item.phantramKM });
  //     });
  //     console.log("trongtin", selectedKhuyenmai);
  //     setDefaultnKM(selectedKhuyenmai);
  //     setDataKhuyenMai(listKM);
  //   }, [khuyenmais, status]);

  const handleSubmitUpdateKhuyenMai = async () => {
    const e = khuyenmais.find((item) => item.phantramKM === defaultnKM.value);
    const id = e.id;
    const res = await UpdateKhuyenMai(id, e);
    setIsLoading(true);
  };
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex mt-5 ">
        <Title>Khuyến mãi</Title>
        {isLoading && <Spin indicator={antIcon} />}
      </div>
      <Row className="w-full mb-8 flex items-center border-b-[0.01rem] border-solid border-[#000] border-opacity-30 pb-16 ">
        <Col span={6} className="">
          <Title level={5}>Khuyến mãi đang áp dụng</Title>
        </Col>
        <Col span={18}>
          <Select
            // defaultValue={selectedKhuyenmai}
            defaultActiveFirstOption={true}
            className="w-full"
            onChange={handleChange}
            value={defaultnKM}
            options={dataKhuyenMai}
          />
        </Col>
        <div className="w-full flex justify-end mt-5 ">
          <Button
            //   onClick={handleSubmitUpdateProfile}
            className="w-24 h-8 rounded-lg text-white bg-[#146d4d] hover:bg-[#FF5A5F] flex items-center justify-center"
          >
            Xóa
          </Button>
          <Button
            onClick={handleSubmitUpdateKhuyenMai}
            className="w-24 h-8 rounded-lg text-white bg-[#146d4d] hover:bg-[#FF5A5F] flex items-center justify-center mx-2"
          >
            Áp dụng
          </Button>
        </div>
      </Row>
      <Title>Thêm mới khuyến mãi</Title>
      <Row className="w-full mb-8 flex items-center border-b-[0.01rem] border-solid border-[#000] border-opacity-30 pb-4 ">
        <Col span={6} className="">
          <Title level={5}>Tên khuyến mãi</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="TenKM"
            placeholder="Tên khuyến mãi"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            value={khuyenmaiInfo.TenKM}
          />
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Phần trăm khuyến mãi</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="phantramKM"
            placeholder="% khuyến mãi"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            value={khuyenmaiInfo.phantramKM}
            required
          />
        </Col>
      </Row>
      <div className="w-full flex justify-end mt-5 ">
        <Button
          onClick={handleSubmit}
          className="w-24 h-8 rounded-lg text-white bg-[#146d4d] hover:bg-[#FF5A5F] flex items-center justify-center mx-2"
        >
          Thêm
        </Button>
      </div>
    </div>
  );
};

export default KhuyenMai;
