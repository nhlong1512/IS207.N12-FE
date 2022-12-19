import React, { useEffect } from "react";
import { Alert, Button, Checkbox, Col, Input, message, Spin, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CodeValidation = () => {
  const navigate = useNavigate();
  const { OTP } = useSelector((state) => state.auth);
  console.log(OTP);
  const [OTPInput, setOTPInput] = useState("");
  const [isMatchOTP, setIsMatchOTP] = useState(false);
  const handleChangeForm = (e) => {
    setOTPInput(e.target.value);
  };

  useEffect(() => {
    console.log("OTP is: " + OTP, "OTPInput is: " + OTPInput);
    if (parseInt(OTPInput) === parseInt(OTP)) {
      setIsMatchOTP(true);
      console.log("đúng rồi");
    } else {
      setIsMatchOTP(false);
      console.log("sai rồi");
    }
  }, [OTPInput]);

  const handleSubmit = (e) => {
    console.log("OTP is: " + OTP, "OTPInput is: " + OTPInput);
    if (isMatchOTP) {
      console.log("OTP is match");
      message.success("Mã OTP chính xác");
      navigate("/reset-password");
    } else {
      console.log("OTP is not match");
      message.error("Mã OTP không chính xác");
    }
  };

  return (
    <div className="w-full h-screen flex bg-[#E5E5E5]  items-center  ">
      <Col className="h-[65vh] bg-[#FFFFFF] rounded-md" span={8} offset={8}>
        <Col span={20} offset={2}>
          <div className="flex-col w-full mt-3  ">
            <Title className=" font-SignIn font-extrabold text-[1.2rem] mt-10 w-full h-[2.5rem] font-SignIn  mb-0">
              Nhập mã OTP
            </Title>
            <p className="font-normal text-[0.72rem]  ">
              Chúng tôi sẽ gửi 1 mã OTP đến địa chỉ Email của bạn. &nbsp;
              <span className="text-[#146d4d] font-bold cursor-pointer">
                Gửi mã.
              </span>
            </p>
            <Input
              type="email"
              size="medium"
              name="email"
              placeholder="Code"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              onChange={(e) => handleChangeForm(e)}
              value={OTPInput}
              required
            />
            <div className="w-full mt-24">
              <Button
                className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                Gửi
              </Button>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
};

export default CodeValidation;
