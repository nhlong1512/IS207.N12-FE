import React, { useEffect } from "react";
import { Col, Row, InputNumber, Button } from "antd";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import { Card } from "antd";
import order1 from "../../images/menu/order1.png";
import order2 from "../../images/menu/order2.png";
const { Meta } = Card;
const ChiTietHoaDon = ({
  item,
  id,
  handleChangeItem,
  size,
  handleDeleteItem,
  HinhAnh,
}) => {
  const [listTopping, setListTopping] = useState([]);
  useEffect(() => {
    const topping = item.Topping.split(",");
    setListTopping(topping);
    console.log(topping);
    console.log("ii", item);
  }, []);
  return (
    <Row className="w-full h-full mt-8 text-[#000] flex items-center ">
      <Col className="flex items-center " span={12}>
        <div className="w-1/2">
          <img className="w-32 h-w-32" src={HinhAnh} />
        </div>
        <div className="w-1/2 ml-[-10px]">
          <p className="text-[#000] font-bold text-[1.1rem] mb-2 leading-5  ">
            {item.TenSP}
          </p>
          {item.PhanLoai == 1 ? <p className="mb-0">Size: {size}</p> : ""}
          {listTopping.map((item) => (
            <p className="mb-1">{item}</p>
          ))}
          <p className="text-[#146d4d] text-[1rem] mt-2 mb-0">
            {(item.Gia / item.SoLuong).toLocaleString()}VND
          </p>
        </div>
      </Col>
      <Col className="flex justify-center" span={4} offset={1}>
        {item.SoLuong}
      </Col>
      <Col
        className="text-[#146d4d] text-[1rem] flex justify-center"
        span={4}
        offset={3}
      >
        {item.ThanhTien.toLocaleString()} VND
      </Col>
    </Row>
  );
};

export default ChiTietHoaDon;
