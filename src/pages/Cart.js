import { Col, Row, InputNumber, Button, Image, Breadcrumb } from "antd";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { Card } from "antd";
import order1 from "../images/menu/order1.png";
import order2 from "../images/menu/order2.png";
import Product from "../components/productInCart/product";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCard } from "../reducer/product/productSlice";
import { PurchaseApi } from "../api/PurchaseApi";
import emptyCart from "../images/empty-cart.svg";
import { getKhuyenMaiAction } from "../reducer/admin/khuyenmai/khuyenmaiAction";
const { Meta } = Card;
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, status, updateStatus, isLoading } = useSelector(
    (state) => state.user
  );
  const { selectedKhuyenmai, khuyenmais } = useSelector(
    (state) => state.khuyenmai_admin
  );
  const [quantityProduct, setQuantityProduct] = useState(1);
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const [cartItems_state, setCarrItems_state] = useState(cartItems);
  const [totalCart, setTotalCart] = useState(0);
  const [priceKM, setPriceKM] = useState(0);
  const [phanTramKM, setPhanTramKM] = useState(0);
  const [prevKM, setPrevKM] = useState(0);
  var arrayInput = [];
  cartItems.map((item) => {
    if (item.MaPL != 1) {
      arrayInput.push({
        MaSP: item.id,
        SoLuong: item.quantity,
        MaPL: item.MaPL,
        MaKM: selectedKhuyenmai.id,
        Topping: item.topping,
      });
    } else {
      arrayInput.push({
        MaSP: item.id,
        SoLuong: item.quantity,
        Size: item.size,
        MaPL: item.MaPL,
        MaKM: selectedKhuyenmai.id,
        Topping: item.topping,
      });
    }
    
  });
  const sumWithInitial = cartItems.reduce(
    (accumulator, currentValue) => accumulator + currentValue.total,
    0
  );
  useEffect(() => {
    const giaKM =
      sumWithInitial - (sumWithInitial * selectedKhuyenmai.phantramKM) / 100;
    // console.log("ptram", selectedKhuyenmai);
    // console.log("ptram1", sumWithInitial);
    // let a = (sumWithInitial * (100 - selectedKhuyenmai.phantramKM)) / 100;
    // console.log("gia", a);
    setPrevKM(sumWithInitial);
    let gia = (sumWithInitial * selectedKhuyenmai.phantramKM) / 100;
    setPriceKM(gia);
    setTotalCart(giaKM);
  }, [sumWithInitial, selectedKhuyenmai]);

  const handleClickCheckOut = async () => {
    if (user.role != "khachhang") {
      var formData = { MaKH: user.id, list: arrayInput };
      console.log(formData);
      await PurchaseApi(formData);
      localStorage.removeItem("cartItems");
      navigate("/admin/hoadon");
    } else {
      navigate(`/purchase`, {
        state: { totalCart: totalCart, giaKM: priceKM, prevKm: prevKM },
      });
    }
  };

  useEffect(() => {
    dispatch(getKhuyenMaiAction());
    // console.log("select", selectedKhuyenmai);
  }, []);

  const handleChangeItem = (cartItems_state, value, id) => {
    // const item = cartItems.find((item) => item.id === id);
    // item.total = value;
    console.log(cartItems_state);
    let sumWithInitial1 = cartItems_state.reduce(
      (accumulator, currentValue) => accumulator + currentValue.total,
      0
    );
    setPrevKM(sumWithInitial1);
    // sumWithInitial1 -= (sumWithInitial1 * selectedKhuyenmai.phanTramKM) / 100;
    const giaKM = (sumWithInitial1 * selectedKhuyenmai.phantramKM) / 100;
    const total =
      sumWithInitial1 - (sumWithInitial1 * selectedKhuyenmai.phantramKM) / 100;
    console.log(sumWithInitial1);
    setTotalCart(total);
    // localStorage.setItem("cartItems", JSON.stringify(cartItems_state));
  };
  // useEffect(() => {
  //   setCarrItems_state(cartItems);
  // }, [cartItems_state]);
  const handleDeleteItem = (item) => {
    var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    // setCarrItems_state(cartItems);

    cartItems.splice(cartItems.indexOf(item), 1);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    setCarrItems_state(cartItems);
    dispatch(addProductToCard(cartItems.length));
  };

  return (
    <div className="container  h-full  max-w-[1024px] mx-auto pb-40 pt-20 ">
      <Breadcrumb className="pt-20 mb-5">
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/sanpham">Thực đơn</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Giỏ hàng</Breadcrumb.Item>
      </Breadcrumb>
      <Title level={2} className="text-black">
        Giỏ hàng
      </Title>

      <Row gutter={35} className="h-full">
        <Col className="h-full mb-10 " span={16}>
          <Row className="w-full h-[10vh] border-y-[0.01rem] border-solid border-[#CFCFCF] text-[#ABABAB] flex items-center justify-center ">
            <Col span={12}>PRODUCT DETAILS</Col>
            <Col className="flex justify-center" span={4}>
              QUANTITY
            </Col>
            <Col className="flex justify-center" span={4}>
              TOTAL
            </Col>
            <Col className="flex justify-center" span={4}>
              REMOVE
            </Col>
          </Row>
          {cartItems_state.map((item, index) => {
            return (
              <Product
                handleDeleteItem={handleDeleteItem}
                key={index}
                size={item.size}
                handleChangeItem={handleChangeItem}
                cartItems={cartItems}
                item={item}
                id={item.id}
              />
            );
          })}
          {cartItems_state.length == 0 && (
            <Image
              preview={false}
              className="w-[600px] h-[500px]"
              src={emptyCart}
            />
          )}
        </Col>
        <Col className="h-full " span={8}>
          <div className="w-full px-6 h-[70vh] border-[1px] border-solid border-[#F5F5F6] bg-[#F5F5F6] rounded-2xl ">
            <Title
              className="border-b-[0.01rem] border-solid border-[#C6BDBD] py-3 mt-3"
              level={5}
            >
              ORDER SUMMARY
            </Title>
            <div className="w-full border-b-[0.01rem] pb-16 border-solid border-[#C6BDBD] ">
              <div className="w-full flex mt-10 justify-between ">
                <p>Tổng Cộng</p>
                <p>{prevKM.toLocaleString()}</p>
              </div>
              <div className="w-full flex mt-10 justify-between ">
                <p>Khuyến mãi</p>
                <p>
                  {totalCart > 0 && selectedKhuyenmai.phantramKM > 0
                    ? priceKM.toLocaleString()
                    : "__"}
                </p>
              </div>
            </div>
            <div className="w-full flex mt-10 justify-between ">
              <p>Thanh Toán</p>
              <p>{totalCart.toLocaleString()} VND</p>
            </div>
            {totalCart > 0 && (
              <Button
                onClick={handleClickCheckOut}
                className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
              >
                CHECKOUT
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
