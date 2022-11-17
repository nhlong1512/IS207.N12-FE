import React from "react";
import { Card, Col, Row, Typography } from "antd";
import styled from "styled-components";
import Blog1 from "../../images/blog/MoriiBlog1.jpeg";
import Blog2 from "../../images/blog/MoriiBlog2.jpeg";
import Blog3 from "../../images/blog/MoriiBlog3.jpg";
import Blog4 from "../../images/blog/MoriiBlog4.jpg";
import Blog5 from "../../images/blog/MoriiBlog5.jpg";
import Blog6 from "../../images/blog/MoriiBlog6.jpg";
const { Meta } = Card;
const { Title, Paragraph } = Typography;

export default function Blog() {
  const Img = styled.img`
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
      transform-y: scale(1.2);
      overflow-y: hidden;
    }
  `;

  return (
    <div className="w-full h-[150vh]">
      <div className="flex-col py-8 ">
        <Title className="text-[#146d4d] w-[15rem] mb-0 mx-auto text-center">
          Morii Blog
        </Title>
        <Paragraph className=" w-[18rem] mb-0 mx-auto text-center text-[1.2rem]">
          Mỗi tách cà phê, mỗi câu chuyện
        </Paragraph>
      </div>

      <Row gutter={36}>
        <Col span={6} offset={3}>
          <Card
            size="small"
            hoverable
            className="  mx-5 my-5 rounded-lg"
            bordered={true}
            cover={
              <div className="h-[10rem] overflow-hidden ">
                <Img
                  className=" hover:overflow-hidden "
                  alt="example"
                  src={Blog1}
                />
              </div>
            }
          >
            <Meta
              title="CÁCH NHẬN BIẾT HƯƠNG VỊ CÀ PHÊ ROBUSTA NGUYÊN CHẤT DỄ DÀNG NHẤT"
              description={
                <p className=" text-ellipsis overflow-y-hidden line-clamp-3">
                  Cùng Arabica, Robusta cũng là loại cà phê nổi tiếng được sử
                  dụng phổ biến ở Việt Nam và nhiều nước khác trên thế giới. Với
                  nhiều đặc điểm riêng, không quá khó để có thể nhận ra hương vị
                  của loại cà phê trứ danh này
                </p>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            hoverable
            className="  mx-5 my-5 rounded-lg"
            bordered={true}
            cover={
              <div className="h-[10rem] overflow-hidden ">
                <Img
                  className=" hover:overflow-hidden "
                  alt="example"
                  src={Blog2}
                />
              </div>
            }
          >
            <Meta
              title="LỄ TÌNH NHÂN, CÙNG CRUSH ĐI ĐÂU?"
              description={
                <p className=" text-ellipsis overflow-y-hidden line-clamp-3">
                  Tadaaaa, hết Tết thì Valentine đầy yêu thương lại đang đến rồi
                  nè. Lễ tình nhân, dẫn crush đi quán nào? Nhất định phải cùng
                  người ấy đến Nhà hẹn hò để giữ nhiệt, vun đắp tình cảm nha!
                </p>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            hoverable
            className="  mx-5 my-5 rounded-lg"
            bordered={true}
            cover={
              <div className="h-[10rem] overflow-hidden ">
                <Img
                  className=" hover:overflow-hidden "
                  alt="example"
                  src={Blog3}
                />
              </div>
            }
          >
            <Meta
              title="8 LỢI ÍCH BẤT NGỜ CỦA CÀ PHÊ COLD BREW"
              description={
                <p className=" text-ellipsis overflow-y-hidden line-clamp-3">
                  Cold brew là thức uống rất được yêu thích trong thời gian gần
                  đây. Không chỉ có hương thơm đặc trưng và vị lôi cuốn, nó còn
                  có nhiều lợi ích cho sức khỏe. Cùng The Coffee House tìm hiểu
                  8 lợi ích nổi bật của loại cà phê lạnh siêu hot này.
                </p>
              }
            />
          </Card>
        </Col>
      </Row>
      <Row gutter={36}>
        <Col span={6} offset={3}>
          <Card
            size="small"
            hoverable
            className="  mx-5 my-5 rounded-lg"
            bordered={true}
            cover={
              <div className="h-[10rem] overflow-hidden ">
                <Img
                  className=" hover:overflow-hidden "
                  alt="example"
                  src={Blog4}
                />
              </div>
            }
          >
            <Meta
              title="CÁCH PHA CÀ PHÊ PHIN THƠM NGON TRÒN VỊ"
              description={
                <p className=" text-ellipsis overflow-y-hidden line-clamp-3">
                  Có nhiều cách để pha một ly cà phê ngon, nhưng đối với nhiều
                  người Việt giây phút đợi chờ những giọt cà phê rơi từ chiếc
                  phin đã trở thành nét văn hóa ăn sâu trong tiềm thức. Để tạo
                  nên một ly cà phê phin chuẩn vị, không chỉ cần sự tinh tế
                  trong cách chọn loại cà phê mà còn cả sự tỉ mỉ trong từng bước
                  pha.
                </p>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            hoverable
            className="  mx-5 my-5 rounded-lg"
            bordered={true}
            cover={
              <div className="h-[10rem] overflow-hidden ">
                <Img
                  className=" hover:overflow-hidden "
                  alt="example"
                  src={Blog5}
                />
              </div>
            }
          >
            <Meta
              title="TẠI SAO CÀ PHÊ CÓ VỊ CHUA?"
              description={
                <p className=" text-ellipsis overflow-y-hidden line-clamp-3">
                  Nhiều người khi uống cà phê cảm thấy có vị chua thường e ngại
                  rằng cà phê hỏng, kém chất lượng hay gặp các vấn đề trong quá
                  trình pha chế và bảo quản. Tuy nhiên, điều này chưa chính xác.
                  Cả hương vị của Arabica hay Robusta nguyên chất, trải qua quá
                  trình chế biến, rang xay đều có vị chua nhẹ. Vậy nên, cà phê
                  có vị chua chua, vẫn giữ được hương thơm đặc trưng vốn có của
                  nó thì bạn có thể yên tâm đó không phải là cà phê hỏng. The
                  Coffee House sẽ chỉ ra những lý do khiến cà phê có vị chua tự
                  nhiên.
                </p>
              }
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            size="small"
            hoverable
            className="  mx-5 my-5 rounded-lg"
            bordered={true}
            cover={
              <div className="h-[10rem] overflow-hidden ">
                <Img
                  className=" hover:overflow-hidden "
                  alt="example"
                  src={Blog6}
                />
              </div>
            }
          >
            <Meta
              title=" MẸO CHỐNG VÀ CHỮA SAY CÀ PHÊ"
              description={
                <p className=" text-ellipsis overflow-y-hidden line-clamp-3">
                  Các triệu chứng thường gặp khi bị say cà phê đó là xót ruột,
                  người cảm thấy nôn nao, dạ dày cồn cào, choáng váng, mệt mỏi,
                  khát nước... đây được xem là các dấu hiệu nhẹ. Trong trường
                  hợp say cà phê nặng sẽ có các biểu hiện như: cơ thể nóng lên,
                  tim đập nhanh, tức ngực, buồn nôn, tay run, lòng bàn tay tiết
                  nhiều mồ hôi, đau đầu, khó tập trung và suy nghĩ,...
                </p>
              }
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
