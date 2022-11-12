import { Button, Checkbox, Col, Input } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import React from "react";
import { Link } from "react-router-dom";
import logoGG from "../../images/gg.png";
import logoFB from "../../images/fb.png";

export default function Login() {
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
              placeholder="Email"
              className="rounded-md py-2 my-4 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            />
            <Input
              size="medium"
              placeholder="Password"
              className="rounded-md py-2 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4 "
            />

            <div className="flex items-center w-full my-2">
              <input
                type="checkbox"
                className="accent-[#E16246] w-[0.7rem] h-[0.7rem] rounded-md cursor-pointer"
              />
              <span className="ml-2 font-semibold text-[0.7rem] text-center ">
                Stay signed in
              </span>
            </div>
            <div className="w-full">
              <Button className="bg-[#E16246] w-full rounded-md py-[1rem] flex justify-center items-center text-[#fff] text-[0.6rem] font-bold">
                SIGN IN
              </Button>
            </div>

            <div className="w-full my-4  text-center before:content-[''] before:absolute before:w-[45%] before:border-t-[0.1rem] before:left-0  before:top-1/2 relative before:border-solid before:border-[#CFCFCF] after:content-[''] after:absolute after:w-[45%] after:border-t-[0.1rem] after:right-0  after:top-1/2 relative after:border-solid after:border-[#CFCFCF]  ">
              <span className="w-[1rem] ">or</span>
            </div>
            <Button className=" w-full rounded-md py-[1rem] flex justify-center items-center text-[#000000] text-[0.7rem] font-bold">
              <img className="w-[1rem] h-[1rem] mr-2 " src={logoGG} /> Sign in
              with Google
            </Button>
            <Button className="bg-[#1877F2] w-full rounded-md py-[1rem] flex justify-center items-center text-[#ffffff] text-[0.7rem] font-bold mt-2">
              <img className="w-[1rem] h-[1rem] mr-2   " src={logoFB} /> Sign in
              with Facebook
            </Button>
            <div className="flex w-full justify-between mt-4">
              <span className="underline text-xs font-semibold text-[1rem] cursor-pointer ">
                Create account
              </span>
              <span className="underline text-xs font-semibold text-[1rem] cursor-pointer ">
                Forget password
              </span>
            </div>
          </div>
        </Col>
      </Col>
    </div>
  );
}
