import React from "react";
import { Card } from "antd";
import styled from "styled-components";
const { Meta } = Card;

export default function Blog() {
  const Image = styled.img`
    overflow-y: hidden;

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
      transform: scale(1.2);
    }
    &:hover img {
      overflow-y: hidden;
    }
  `;

  return (
    <div className="w-full h-[100vh]">
      <Card
        hoverable
        className="w-[15rem] mx-5 my-5"
        bordered={true}
        cover={
          <Image
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  );
}
