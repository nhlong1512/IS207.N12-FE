import React from "react";
import { Alert, Button, Checkbox, Col, Input, message, Spin, Tag } from "antd";
import Title from "antd/lib/typography/Title";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { resetPassword } from "../../api/authApi";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  const { forgotEmail } = useSelector((state) => state.auth);
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [userInfo, setUserInfo] = useState({
    email: forgotEmail,
    newPassword: "",
  });
  const [isEqualNewPassword, setIsEqualNewPassword] = useState(false);
  const handleChangeCfNewPassWord = (e) => {
    setConfirmNewPassword(e.target.value);
  };
  const handleChangeForm = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(userInfo.newPassword);
    console.log(confirmNewPassword);
    console.log(isEqualNewPassword);
    console.log(userInfo);
    if (userInfo.newPassword == confirmNewPassword) setIsEqualNewPassword(true);
    else setIsEqualNewPassword(false);
  }, [confirmNewPassword, userInfo.newPassword]);
  const handleSubmit = async (e) => {
    if (isEqualNewPassword) {
      const res = await resetPassword(userInfo);

      navigate("/signin");
    } else {
      message.error("Xác nhận mật khẩu mới không khớp");
    }
  };
  return (
    <div className="w-full h-screen flex bg-[#E5E5E5]  items-center font-SignIn ">
      <Col className="h-[75vh] bg-[#FFFFFF] rounded-md" span={8} offset={8}>
        <Col span={20} offset={2}>
          <div className="flex-col w-full mt-3  ">
            <Title className=" font-SignIn font-extrabold text-[1.2rem] mt-10 w-full h-[2.5rem]  mb-0">
              Khôi phục mật khẩu
            </Title>
            <Input
              size="medium"
              name="newPassword"
              onChange={(e) => handleChangeForm(e)}
              value={userInfo.newPassword}
              placeholder="Mật Khẩu Mới"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              type="password"
              required
            />
            <Input
              size="medium"
              name="newPassword_confirmation"
              onChange={(e) => handleChangeCfNewPassWord(e)}
              value={confirmNewPassword}
              placeholder="Xác Nhân Mật Khẩu"
              className="rounded-md pt-2 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4 mb-2  "
              type="password"
              required
            />
            <div className="w-full mt-32">
              <Button
                className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
                onClick={(e) => handleSubmit(e)}
              >
                Khôi phục
              </Button>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
};

export default ResetPassword;
