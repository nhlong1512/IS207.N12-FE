import {
  Avatar,
  Button,
  Col,
  Image,
  Input,
  Radio,
  Row,
  Upload,
  Spin,
  message,
  Select,
} from "antd";
import axios from "axios";
import Title from "antd/lib/typography/Title";
import React, { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../reducer/user/userAction";
import { useLocation, useNavigate } from "react-router-dom";
import { createUser } from "../../../api/admin/Users";
import { getAllUserProfile } from "../../../reducer/admin/user/userAction";
import {
  fetchProduct,
  updateDetailProduct,
} from "../../../reducer/admin/product/productAction";
import { createProduct, getDetailProductApi } from "../../../api/admin/Product";
import { stringify } from "postcss";
import { getDetailProduct } from "../../../reducer/admin/product/productSlice";
// import {
//   getUserProfile,
//   updateUserProfile,
// } from "../../reducer/user/userAction";
const DetailProduct = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const detailProductLocation = location.state.detailProduct;
  // console.log(user);
  const { detailProduct, status, isLoading } = useSelector(
    (state) => state.product_admin
  );
  const [isFirst, setIsFirst] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");
  const [productInfo, setProductInfo] = useState({});

  //validate date

  // const [gender, setGender] = useState(0);
  const handleChangeForm = (e) => {
    setIsFirst(false);
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
    console.log(productInfo);
  };

  const onChangeImage = async (e) => {
    console.log(e.target.files[0]);
    const urlImage = URL.createObjectURL(e.target.files[0]);
    setSelectedImage(urlImage);

    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    formData.append("upload_preset", "themorrii");
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dql5y1xex/image/upload",
      formData
    );
    const url = res.data.secure_url;
    setProductInfo({ ...productInfo, HinhAnh: url });
    setSelectedImage(url);
    console.log(url);

    // setproductInfo({
    //   ...productInfo,
    //   urlavt: urlImage,
    // });
  };

  const handleChangeGender = (e) => {
    setIsFirst(false);
    const gt = e.target.value;
    setProductInfo({ ...productInfo, [e.target.name]: gt });
    console.log(gt);
  };
  const handleSubmitUpdateProfile = async () => {
    if (isNaN(productInfo.Gia)) {
      message.error("Giá phải là số");
    } else {
      console.log(productInfo);
      dispatch(updateDetailProduct(productInfo, detailProductLocation.id));
    }
  };
  useEffect(() => {
    if (isFirst == false) {
      if (isLoading == false && status == true)
        message.success("Cập nhật thông tin thành công");
      else if (isLoading == false && status == false)
        message.error("Cập nhật thông tin thất bại");
    }
  }, [isLoading]);
  useEffect(() => {
    setProductInfo(detailProductLocation);
  }, [detailProduct]);
  // }
  useEffect(() => {
    const fetchDetailProduct = async () => {
      const data = await getDetailProductApi(detailProductLocation.id);
      if (data.status == true) {
        setProductInfo(data.sanpham);
        dispatch(getDetailProduct(data.sanpham));
      }
      console.log("data", data);
    };
    fetchDetailProduct();
  }, [status]);
  return (
    <div className="container mx-auto max-w-4xl h-[100vh]  ">
      {/* {isChangeProfileLoading && (
            <LoadingOutlined
              style={{
                fontSize: 20,
              }}
              spin
            />
          )} */}
      <div className="flex items-center mb-6 mt-10  w-full  ">
        {productInfo.HinhAnh && (
          <Image
            preview={false}
            className="w-32 h-32 pr-2"
            src={productInfo?.HinhAnh}
            alt="avatar"
          />
        )}

        <div className="w-full ">
          <Title className=" " level={3}>
            PRODUCT
          </Title>

          {/* <input
                  // className="hidden"
                  type="file"
                  name="myImage"
                  onChange={(e) => onChangeImage(e)}
                /> */}

          <div className="flex w-full justify-between">
            <Title className=" " level={5}>
              Update your product photo and product details.
            </Title>

            <Button
              onClick={handleSubmitUpdateProfile}
              className="w-24 h-8 rounded-lg text-white bg-[#146d4d] hover:bg-[#FF5A5F] flex items-center justify-center"
            >
              Lưu
            </Button>
          </div>
        </div>
      </div>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Tên sản phẩm</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="TenSP"
            placeholder="Tên sản phẩm"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            value={productInfo.TenSP}
            required
          />
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Loại sản phẩm</Title>
        </Col>
        <Col span={18}>
          <div className="flex items-center w-ful ">
            <input
              onClick={(e) => handleChangeGender(e)}
              id="doan"
              type="radio"
              name="MaPL"
              value="2"
              defaultChecked={detailProductLocation.MaPL == 2 ? true : false}
              className=" mr-1 accent-[#146d4d] w-4 h-4  "
            />
            <label className="ml-1" for="doan">
              Đồ ăn
            </label>
            <input
              onClick={(e) => handleChangeGender(e)}
              id="douong"
              type="radio"
              name="MaPL"
              value="1"
              defaultChecked={detailProductLocation.MaPL == 1 ? true : false}
              className="ml-10 mr-1 accent-[#146d4d] w-4 h-4 "
            />
            <label className="ml-1" for="douong">
              Đồ uống
            </label>
            <input
              onClick={(e) => handleChangeGender(e)}
              id="topping"
              type="radio"
              name="MaPL"
              value="3"
              defaultChecked={detailProductLocation.MaPL == 3 ? true : false}
              className="ml-10 mr-1 accent-[#146d4d] w-4 h-4 "
            />

            <label className="ml-1" for="topping">
              Topping
            </label>
          </div>
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center ">
        <Col span={6} className="">
          <Title level={5}>Giá</Title>
        </Col>
        <Col span={18}>
          <Input
            type="text"
            size="medium"
            name="Gia"
            placeholder="Giá"
            className="rounded-md py-2 mb-3 placeholder:font-SignIn placeholder:font-semibold placeholder:text-[#595959] placeholder:text-[0.7rem] pl-4  "
            onChange={(e) => handleChangeForm(e)}
            value={productInfo.Gia}
          />
        </Col>
      </Row>
      <Row className="w-full mb-8 flex items-center my-5">
        <Col span={6} className="">
          <Title className="w-full  my-auto " level={5}>
            Ảnh sản phẩm
          </Title>
        </Col>
        <Col span={18}>
          <div className="flex items-center w-full justify-between ">
            <div>
              {selectedImage && (
                <Image
                  preview={false}
                  className="w-16 h-16"
                  src={selectedImage}
                  alt="ảnh sản phẩm"
                />
              )}
            </div>

            <p className="mb-0 ml-2 w-[25rem]">
              This will be displayed on your product.
            </p>
            <input
              className="w-[16rem] pl-5 "
              type="file"
              name="HinhAnh"
              onChange={(e) => onChangeImage(e)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DetailProduct;
