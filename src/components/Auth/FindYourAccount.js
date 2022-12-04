import React, { useState } from "react";
import { Alert, Button, Checkbox, Col, Input, message, Spin, Tag } from "antd";
import emailjs from "@emailjs/browser";
import Title from "antd/lib/typography/Title";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getForgotEmail, getOTP } from "../../reducer/auth/authSlice";
import { checkMail } from "../../reducer/auth/authAction";
import { checkEmailExist } from "../../api/authApi";
const FindYourAccount = () => {
  const { isEmailExist, isLoading } = useSelector((state) => state.auth);
  const regex_email =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username_mail, setUsername_mail] = useState("");
  const [isExists, setIsExists] = useState(false);
  const [isFirst, setIsFirst] = useState(true);

  const handleChangeForm = (e) => {
    setIsFirst(false);
    setUsername_mail(e.target.value);
    console.log(username_mail);
  };
  const [templateParams, setTemplateParams] = useState({
    otp: 0,
    username_mail: "",
  });

  useEffect(() => {
    var OTP = Math.floor(100000 + Math.random() * 900000);
    setTemplateParams({
      otp: OTP,
      username_mail: username_mail,
    });
    dispatch(getOTP(OTP));
    console.log(OTP);
    console.log(templateParams);
  }, [username_mail]);
  const handleSubmit = async () => {
    console.log(isEmailExist);
    if (regex_email.test(username_mail) == false) {
      message.error("Email không hợp lệ");
    } else {
      dispatch(getForgotEmail(username_mail));
      dispatch(checkMail(username_mail));
    }
  };

  useEffect(() => {
    if (isFirst == false) {
      if (isEmailExist == true) {
        emailjs
          .send(
            "service_bnk4p9n",
            "template_95pe4x5",
            templateParams,
            "G2m-hpF_YM594u7IJ"
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              message.success("Gửi mã OTP thành công");
              navigate("/code-validation");
            },
            (err) => {
              console.log("FAILED...", err);
            }
          );
        navigate("/code-validation");
      } else if (isEmailExist == false && isLoading == false) {
        message.error("Email không tồn tại");
      }
    }
  }, [isEmailExist, isLoading]);
  return (
    <div className="w-full h-screen flex bg-[#E5E5E5]  items-center font-SignIn ">
      <Col className="h-[65vh] bg-[#FFFFFF] rounded-md" span={8} offset={8}>
        <Col span={20} offset={2}>
          <div className="flex-col w-full mt-3  ">
            <Title className=" font-SignIn font-extrabold text-[1.2rem] mt-10 w-full h-[2.5rem]  mb-0">
              Nhập địa chỉ Email của bạn
            </Title>
            <Input
              type="email"
              size="medium"
              name="username-mail"
              placeholder="Email"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              onChange={(e) => handleChangeForm(e)}
              value={username_mail}
              required
            />
            <div className="w-full mt-32">
              <Button
                className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                Kiểm tra
              </Button>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
};

export default FindYourAccount;
