import React, { useEffect } from "react";
import { Alert, Button, Checkbox, Col, Input, Spin, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import logoGG from "../../images/gg.png";
import logoFB from "../../images/fb.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { register } from "../../reducer/auth/authAction";

export default function Register() {
  const { isLoading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [validateEmail, setValidateEmail] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [containsNumbers, setContainsNumbers] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isEqualPassword, setIsEqualPassword] = useState(false);
  const [showError, setShowError] = useState(false);
  const [userInfo, setUserInfo] = useState({
    hoten: "",
    email: "",
    role: "khachhang",
    password: "",
    password_confirmation: "",
  });
  const checkForNumbers = (string) => {
    var matches = string.match(/\d+/g);

    setContainsNumbers(matches != null ? true : false);
  };

  // check for upper case
  const checkForUpperCase = (string) => {
    var matches = string.match(/[A-Z]/);

    setIsUpperCase(matches != null ? true : false);
  };
  const handleChangeForm = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    if (
      passwordLength &&
      containsNumbers &&
      isUpperCase &&
      isEqualPassword &&
      validateEmail
    ) {
      e.preventDefault();
      console.log(userInfo);
      dispatch(register(userInfo, navigate));
      console.log("success");
    } else {
      e.preventDefault();
      console.log("mail", validateEmail);
      console.log("mail", userInfo.email);
      console.log("confirm", isEqualPassword);
      console.log("confirmpw", userInfo.password_confirmation);
      console.log("password", userInfo.password);
      console.log("contain number", containsNumbers);
      console.log("upperCase", isUpperCase);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      console.log("fail");
    }
  };
  useEffect(() => {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        userInfo.email
      )
    ) {
      setValidateEmail(true);
    } else {
      setValidateEmail(false);
    }
    checkForNumbers(userInfo.password);
    checkForUpperCase(userInfo.password);
    setPasswordLength(userInfo.password.length > 7 ? true : false);

    if (userInfo.password === userInfo.password_confirmation) {
      setIsEqualPassword(true);
    } else {
      setIsEqualPassword(false);
    }
  }, [userInfo.password, userInfo.password_confirmation, userInfo.email]);
  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) return navigate("/");
  // }, [localStorage.getItem("accessToken")]);
  return (
    <div className="w-full h-screen flex bg-[#E5E5E5]  items-center font-SignIn ">
      <Col className="h-[97vh] bg-[#FFFFFF] rounded-md" span={10} offset={7}>
        <Col span={16} offset={4}>
          <div className="flex-col w-full mt-3 ">
            <Title className="text-center font-SignIn font-extrabold text-[1.7rem] w-full h-[2.5rem]  mb-0">
              WELCOME BACK!D
            </Title>
            <p className="w-3/4 mb-0 mx-auto mt-[-0.3rem] text-center">
              We are so happy to see you again.
            </p>
          </div>
          <div className="flex-col ">
            <Input
              type="email"
              size="medium"
              name="email"
              placeholder="Email"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              onChange={(e) => handleChangeForm(e)}
              value={userInfo.email}
              required
            />
            <Input
              size="medium"
              name="hoten"
              onChange={(e) => handleChangeForm(e)}
              value={userInfo.hoten}
              placeholder="Họ Tên"
              className="rounded-md py-2 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4 "
              required
            />
            <Input
              size="medium"
              name="password"
              onChange={(e) => handleChangeForm(e)}
              value={userInfo.password}
              placeholder="Mật Khẩu"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              type="password"
              required
            />
            <Input
              size="medium"
              name="password_confirmation"
              onChange={(e) => handleChangeForm(e)}
              value={userInfo.password_confirmation}
              placeholder="Xác Nhân Mật Khẩu"
              className="rounded-md pt-2 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4 mb-2  "
              type="password"
              required
            />
            {showError && (
              <Tag className=" border-none bg-white " color="red">
                Thông tin đăng ký không chính xác
              </Tag>
            )}
            {isLoading && <Spin delay={1} />}
            <div className="w-full mt-1">
              <Button
                className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                Đăng Ký
              </Button>
            </div>
            <div className="w-full my-4  text-center before:content-[''] before:absolute before:w-[45%] before:border-t-[0.1rem] before:left-0  before:top-1/2 relative before:border-solid before:border-[#CFCFCF] after:content-[''] after:absolute after:w-[45%] after:border-t-[0.1rem] after:right-0  after:top-1/2 relative after:border-solid after:border-[#CFCFCF]  ">
              <span className="w-[1rem] ">or</span>
            </div>
            <Button className=" w-full rounded-md py-[1rem] flex justify-center items-center text-[#000000] text-[0.7rem] font-bold">
              <img className="w-[1rem] h-[1rem] mr-2 " src={logoGG} /> Đăng nhập
              với Google
            </Button>
            <Button className="bg-[#1877F2] w-full rounded-md py-[1rem] flex justify-center items-center text-[#ffffff] text-[0.7rem] font-bold mt-2">
              <img className="w-[1rem] h-[1rem] mr-2   " src={logoFB} />
              Đăng nhập với Facebook
            </Button>
            <div className="flex w-full justify-center mt-4">
              <span className=" text-xs mr-1 font-semibold text-[1rem] cursor-pointer ">
                Bạn đã có tài khoản?
              </span>
              <Link to="/signin">
                <span className="underline text-xs font-semibold text-[1rem] cursor-pointer ">
                  Đăng nhập
                </span>
              </Link>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
}
