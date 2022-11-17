import { Button, Checkbox, Col, Input, Tag, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoGG from "../../images/gg.png";
import logoFB from "../../images/fb.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducer/auth/authAction";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, message, error } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [showError, setShowError] = useState(false);

  const handleFormChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(userInfo, navigate));
    console.log(error);
    // if (error) {
    //   setShowError(true);
    //   setTimeout(() => {
    //     setShowError(false);
    //   }, 2000);
    // }
  };
  useEffect(() => {
    console.log(isLoading);
    if (isLoading && error) {
      setTimeout(() => {
        setShowError(true);
      }, 1500);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
    } else if (isLoading && !error) {
      setShowError(false);
    }
  }, [isLoading]);

  // useEffect(() => {
  //   if (localStorage.getItem("accessToken")) return navigate("/");
  // }, [localStorage.getItem("accessToken")]);

  return (
    <div className="w-full h-screen flex bg-[#E5E5E5]  items-center font-SignIn ">
      <Col className="h-[90vh] bg-[#FFFFFF] rounded-md" span={10} offset={7}>
        <Col span={16} offset={4}>
          <div className="flex-col w-full mt-8 ">
            <Title className="text-center font-SignIn font-extrabold text-[1.8rem] w-full h-[2.8rem]  mb-0">
              WELCOME BACK!
            </Title>
            <p className="w-3/4 mb-0 mx-auto mt-[-0.3rem] text-center">
              We are so happy to see you again.
            </p>
          </div>
          <div className="flex-col mt-4">
            <Input
              size="medium"
              name="email"
              type="email"
              onChange={(e) => handleFormChange(e)}
              value={userInfo.email}
              placeholder="Email"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-3  "
              required
            />
            <Input
              type="password"
              size="medium"
              name="password"
              onChange={(e) => handleFormChange(e)}
              value={userInfo.password}
              placeholder="Mật Khẩu"
              className="rounded-md py-2 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-3 "
              required
            />

            <div className="flex items-center w-full my-2">
              <input
                type="checkbox"
                className="accent-[#E16246] w-[0.7rem] h-[0.7rem] rounded-md cursor-pointer"
              />
              <span className="ml-2 font-semibold text-[0.7rem] text-center ">
                Lưu mật khẩu
              </span>
            </div>
            <div className="w-full">
              {showError && (
                <Tag className=" border-none bg-white " color="red">
                  Thông tin đăng nhập không chính xác
                </Tag>
              )}
              {isLoading && <Spin delay={1} />}
              <Button
                onClick={(e) => handleFormSubmit(e)}
                className="bg-[#E16246] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
              >
                Đăng nhập
              </Button>
            </div>

            <div className="w-full my-3  text-center before:content-[''] before:absolute before:w-[45%] before:border-t-[0.1rem] before:left-0  before:top-1/2 relative before:border-solid before:border-[#CFCFCF] after:content-[''] after:absolute after:w-[45%] after:border-t-[0.1rem] after:right-0  after:top-1/2 relative after:border-solid after:border-[#CFCFCF]  ">
              <span className="w-[1rem] ">or</span>
            </div>
            <Button className=" w-full rounded-md py-[1rem] flex justify-center items-center text-[#000000] text-[0.7rem] font-bold">
              <img className="w-[1rem] h-[1rem] mr-2 " src={logoGG} /> Đăng nhập
              với Google
            </Button>
            <Button className="bg-[#1877F2] w-full rounded-md py-[1rem] flex justify-center items-center text-[#ffffff] text-[0.7rem] font-bold mt-2">
              <img className="w-[1rem] h-[1rem] mr-2   " src={logoFB} /> Đăng
              nhập với Facebook
            </Button>
            <div className="flex w-full justify-between mt-4">
              <span className="underline text-xs font-semibold text-[1rem] cursor-pointer ">
                Tạo tài khoản
              </span>
              <span className="underline text-xs font-semibold text-[1rem] cursor-pointer ">
                Quên mật khẩu
              </span>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
}
