import { Image } from "antd";
import Title from "antd/lib/typography/Title";
import React from "react";
import error from "../images/error.png";
const NotFound = () => {
  return (
    <div className="w-full   mx-auto items-center">
      <div className="w-full flex  justify-center pt-20">
        <Image preview={false} src={error} width={400} />
      </div>

      <Title className="w-full flex justify-center">Page Not Found</Title>
    </div>
  );
};

export default NotFound;
