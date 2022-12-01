import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Breadcrumb, Card, Col, Row, Typography } from "antd";
import Meta from "antd/lib/card/Meta";
import order1 from "../images/menu/order1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../api/bookApi";
import { fetchProduct } from "../reducer/product/productAction";
import axios from "axios";
const Img = styled.img`
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;
  transition: all 0.3s linear;
  &:hover {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform-y: scale(1.2);
    overflow-y: hidden;
  }
`;
const ListOrder = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
 
  useEffect(() => {
    dispatch(fetchProduct());

    console.log(products);
  }, [dispatch]);

  const handleClickProduct = async (e) => {
    console.log(e.target.id);
    const idProduct = e.target.id;
    const baseUrl = "http://localhost:8000/api/sanpham";
    const res = await axios.get(`${baseUrl}/${idProduct}`);
    console.log(res.data.sanpham);
    if (res.data.status) {
      navigate(`/sanpham/${idProduct}`, {
        state: { infoProduct: res.data.sanpham },
      });
    }
  };

  return (
    <div className="container  h-[160vh] mx-auto mt-20 max-w-[1024px]">
      <div className="mb-10 mt-4">
        <Breadcrumb>
          <Breadcrumb.Item>Menu</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/order">Đồ uống</a>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Row>
        <Col className="flex-col" span={4}>
          <Title>Menu</Title>
          <p className="font-bold">Featured</p>
          <p className="cursor-pointer">Đồ uống</p>
          <p className="cursor-pointer">Đồ ăn</p>
        </Col>
        <Col className="overflow-hidden" span={20}>
          <Title>Featured</Title>
          <Row
            gutter={35}
            className="border-t-[1px] pt-1 border-solid border-[#ABABAB] "
          >
            {products.map((product) => {
              if (product.MaPL == 3) return;
              return (
                <Col
                  key={product.id}
                  id={product.id}
                  onClick={(e) => handleClickProduct(e)}
                  span={8}
                >
                  <Card
                    id={product.id}
                    size="large"
                    hoverable
                    className="  mx-0 my-5 rounded-lg h-[23rem]"
                    bordered={true}
                    cover={
                      <div className="h-[15rem] overflow-hidden ">
                        <Img
                          id={product.id}
                          className=" hover:overflow-hidden "
                          alt="example"
                          src={order1}
                        />
                      </div>
                    }
                  >
                    <Meta
                      id={product.id}
                      title={
                        <p className="whitespace-normal mb-0">
                          {product.TenSP}
                        </p>
                      }
                      description={`${product.Gia} VND`}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ListOrder;
