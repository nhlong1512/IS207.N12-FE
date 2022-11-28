import React, { useEffect } from "react";
import { Col, Row, InputNumber, Button } from "antd";
import Title from "antd/lib/typography/Title";
import { useState } from "react";
import { Card } from "antd";
import order1 from "../../images/menu/order1.png";
import order2 from "../../images/menu/order2.png";
const { Meta } = Card;
const Product = ({ item, id, handleChangeItem, size, handleDeleteItem }) => {
  const [cartItems_state, setCarrItems_state] = useState([]);
  const [totalProduct, setTotalProduct] = useState(item.total);
  const handleStepQuantity = (value) => {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCarrItems_state(cartItems);
    const item = cartItems.find((item) => item.id === id && item.size === size);
    console.log("1", item.quantity);
    const priceEachProduct = item.total / item.quantity;
    item.quantity = value;
    // console.log(item.quantity);
    item.total = priceEachProduct * item.quantity;
    setTotalProduct(item.total);
    // setCarrItems(cartItems);
    console.log("2", item.quantity);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    console.log("3", cartItems);

    // handleChangeItem(totalProduct, id);
    // console.log(item.total);
  };

  useEffect(() => {
    console.log(totalProduct);
    handleChangeItem(cartItems_state, totalProduct, id);
  }, [cartItems_state]);

  // useEffect(() => {
  //   // const cartItems_lcal = JSON.parse(localStorage.getItem("cartItems")) || [];
  //   setCarrItems(cartItems_lcal);
  //   setCarrItems(cartItems);
  //   console.log(cartItems);
  // }, [cartItems]);

  const handleDeleteItemChild = () => {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // // setCarrItems_state(cartItems);
    const item = cartItems.find((item) => item.id === id && item.size === size);
    handleDeleteItem(item);
    // cartItems.splice(cartItems.indexOf(item), 1);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  return (
    <Row className="w-full h-full mt-8 text-[#000] flex items-center ">
      <Col className="flex items-center " span={12}>
        <div className="w-1/2">
          <img className="w-32 h-w-32" src={order2} />
        </div>
        <div className="w-1/2 ml-[-10px]">
          <p className="text-[#000] font-bold text-[1.1rem] mb-2 leading-5  ">
            {item.name}
          </p>
          {item.topping.map((item) => (
            <p className="mb-1">+{item.name}</p>
          ))}
          <p className="text-[#146d4d] text-[1rem] mt-2 mb-0">
            {item.price}VND
          </p>
        </div>
      </Col>
      <Col className="flex justify-center" span={4}>
        <InputNumber
          bordered
          onStep={(e, value) => handleStepQuantity(e, value)}
          // onClick={(e) => handleChangeQuantity(e)}
          className="w-[4rem] h-[2rem] text-[#000]"
          min={1}
          max={10}
          defaultValue={item.quantity}
          size="medium"
        />
      </Col>
      <Col className="text-[#146d4d] text-[1rem] flex justify-center" span={4}>
        {totalProduct} VND
      </Col>
      <Col
        onClick={(id, size) => handleDeleteItemChild(id, size)}
        className=" flex justify-center"
        span={4}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </Col>
    </Row>
  );
};

export default Product;
