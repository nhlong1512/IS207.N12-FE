import React from "react";
import { Alert, Button, Checkbox, Col, Input, Spin, Tag } from "antd";
import Title from "antd/lib/typography/Title";

const ResetPassword = () => {
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
              name="password"
              //   onChange={(e) => handleChangeForm(e)}
              //   value={userInfo.password}
              placeholder="Mật Khẩu Mới"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
              type="password"
              required
            />
            <Input
              size="medium"
              name="password_confirmation"
              //   onChange={(e) => handleChangeForm(e)}
              //   value={userInfo.password_confirmation}
              placeholder="Xác Nhân Mật Khẩu"
              className="rounded-md pt-2 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4 mb-2  "
              type="password"
              required
            />
            <div className="w-full mt-32">
              <Button
                className="bg-[#146d4d] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.7rem] font-bold"
                // onClick={(e) => handleSubmit(e)}
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
