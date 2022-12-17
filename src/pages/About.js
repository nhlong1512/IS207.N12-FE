import React from "react";
import { Image, Breadcrumb, Spin } from "antd";
import Title from "antd/lib/typography/Title";
import { useEffect, useState } from "react";
import imgAboutme from "../images/cfco.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="w-full max-w-5xl mx-auto h-full">
      <Breadcrumb className="pt-20 mb-5 text-base">
        <Breadcrumb.Item>
          <Link to="/">Trang chủ</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item>Câu chuyện</Breadcrumb.Item>
      </Breadcrumb>
      <div className="w-full mb-5">
        <img
          src={imgAboutme}
          alt="Ảnh blog"
          className="w-full h-[50vh] block object-cover"
        />
      </div>

      <Title level={2} className="mt-5">
        TỪ PHONG CÁCH UỐNG CÀ PHÊ ĐẾN VIỆC THÀNH LẬP MORII COFFEE
      </Title>
      <p>12/12/2022</p>
      <Title level={5} className="mt-5">
        Uống cà phê là một thú vui và đến với mỗi quốc gia, bạn sẽ thấy rằng thú
        vui này sẽ mang những nét khác biệt. The Coffee House chia sẻ đến bạn
        những phong cách uống cà phê nổi tiếng của các nước trên thế giới, cùng
        xem để hiểu hơn về văn hoá độc đáo này, hay kể cả tự pha chế để thưởng
        thức xem cảm nhận mới lạ như thế nào nhé!
      </Title>
      <div>
        <p>
          <strong>Italy</strong>
        </p>
        <p>
          Là “thủ phủ” cà phê nổi tiếng trên thế giới, thức uống này là món
          không thể thiếu đối với người dân Italy. Họ thường bắt đầu ngày mới
          với một ly cà phê và loại thường được dùng nhiều nhất chính là
          Espresso.&nbsp;
        </p>
        <p>&nbsp;</p>
        <p>
          <img src="https://file.hstatic.net/1000075078/file/espresso_72dcdfeace2045f0922ea566e0303c80_grande.jpg" />
        </p>
        <p>
          Đây là loại&nbsp;cà phê có thể phục vụ nhanh, có cho bạn ngay lập tức
          và thường được đựng trong những chiếc ly nhỏ. Người Italy khi thưởng
          thức sẽ cầm ly trong tay, hít hà mùi thơm quyến rũ rồi uống trong 3-4
          hơi. Cả quá trình diễn ra nhanh gọn nhưng đầy thanh lịch theo đúng
          phong cách người Italy.
        </p>
        <p>
          <strong>Pháp</strong>
        </p>
        <p>
          Ở Pháp thường dùng Café Au Lait, nghe thôi đã rất Pháp rồi đúng không?
          Đây là loại cà phê được pha chế hết sức đơn giản.&nbsp;
        </p>
        <p>
          <img src="https://file.hstatic.net/1000075078/file/phap_477cd4bf793c44dd91589ef3cc5dfe22_grande.jpg" />
        </p>
        <p>
          Là sự pha trộn giữa cà phê espresso và sữa tươi nóng. Café Au Lait là
          thức uống yêu thích của người Pháp vào buổi sáng và thường được dùng
          cùng bánh mì Baguette. Café Au Lait và Baguette, sự kết hợp biểu tượng
          của ẩm thực Pháp.
        </p>
        <p>
          <strong>Đức</strong>
        </p>
        <p>
          Eiskaffee&nbsp;là món cà phê quen thuộc của người Đức. Nó đích thị
          dành cho những ai thích sự ngọt ngào. Eiskaffee&nbsp;trong tiếng Đức
          có nghĩa là “cà phê kem lạnh”. Vị beo béo của kem lạnh lơ lửng trong
          lớp cà phê đắng kết hợp cùng tầng kem whipping ngọt ngào và một ít vụn
          choco đã tạo nên thứ đồ uống hấp dẫn khó cưỡng.&nbsp;
        </p>
        <p>
          <img src="https://file.hstatic.net/1000075078/file/duc_b3896265765847bcb9b8f90fb68463de_grande.jpg" />
        </p>
        <p>
          Vậy nên Eiskaffee đã đã chinh phục khẩu vị không chỉ của người dân
          nước Đức, trở thành món đồ uống “quốc dân” của đất nước này mà còn thu
          hút cả những khách du lịch đến nơi đây.
        </p>
        <p>
          <strong>Bồ Đào Nha</strong>
        </p>
        <p>
          Người Bồ Đào Nha cực kì ưa chuộng và phổ biến với món cà phê pha chanh
          mát lạnh Mazagran. Để thưởng thức món cà phê này hết sức đơn giản, bạn
          chỉ cần đổ hai tách espresso và nước cốt chanh vào một ly cao, thêm
          đường cho vừa uống và một ít đá viên.&nbsp;
        </p>
        <p>
          <img src="https://file.hstatic.net/1000075078/file/tay_ban_nha_9569302e90194de6b52704f323ec77ca_grande.jpg" />
        </p>
        <p>
          Với sự kết hợp đặc biệt từ vị chua của chanh khiến món cà phê này có
          vị khác hẳn so với các loại cà phê khác trên thế giới. Đây cũng là một
          thức uống lý tưởng và sảng khoái cho những ngày hè.
        </p>
        <p>
          <strong>Hy Lạp</strong>
        </p>
        <p>
          Khá giống như người Bồ Đào Nha, người Hy Lạp cũng có một thức uống cà
          phê được yêu chuộng vào những ngày hè nhằm xua đi cái nóng nực. Đó
          chính là Frappé. Trong tiếng Pháp nó có nghĩa “ướp lạnh”, là loại cà
          phê hòa tan&nbsp;đánh sủi bọt hết sức độc đáo và được biết đến như
          biểu tượng của đất nước Hy Lạp.&nbsp;
        </p>
        <p>
          <img src="https://file.hstatic.net/1000075078/file/hy_lap_83f3b7571b15434a992f132d29d4b309_grande.jpg" />
        </p>
        <p>&nbsp;</p>
        <p>
          Để pha Frappé, đầu tiên cho cà phê bột vào ly, thêm một thìa cà phê
          đường và một ít nước đá. Dùng máy trộn tay (handmixer) khuấy mạnh cho
          đến khi cà phê sủi bọt. Cuối cùng cho đá và rót một thêm một ít nước
          lạnh là bạn đã hoàn thành.&nbsp;Frappe&nbsp;thường được pha chế khá
          đậm và sử dụng cà phê hoà tan mạnh, nếu dùng không quen, bạn có thể
          thêm nước để pha loãng cà phê hoặc thêm đường vào để thưởng thức ngọt
          hơn.
        </p>
        <p>
          <strong>Cà phê sữa Việt Nam</strong>
        </p>
        <p>
          Mỗi đất nước đều có loại cà phê yêu thích đặc trưng. Và đối với người
          Việt đó là món cà phê sữa. Bạn thường thưởng thức cà phê sữa như thế
          nào? Mỗi buổi sáng tự pha cho mình hay ra cửa hàng gọi một ly cà phê
          sữa theo ý thích. Không chỉ quen thuộc với người Việt, cà phê sữa là
          món đồ uống mà khách du lịch các nước rất hứng thú thưởng thức khi đặt
          chân đến mảnh đất hình chữ S. Và nhiều thực khách nước ngoài khi vào
          cửa hàng của The Coffee House cũng thường xuyên lựa chọn cà phê sữa.
        </p>
        <p>
          Không giống những nước khác thường sử dụng cà phê pha sẵn, cà phê
          bột,…Việt Nam sử dụng loại cà phê xay nhuyễn, cho vào loại phin đặc
          trưng của bản xứ, sau đó đổ nước sôi vào. Từng giọt cà phê đậm đặc,
          sóng sánh, chảy qua chiếc phin đặc biệt hòa cùng sữa đặc, cho thêm đá
          đã tạo nên ly&nbsp;cà phê sữa đá đậm đà, đắng đót nhưng cũng thanh
          ngọt nơi hậu vị.
        </p>
        <p>
          <img src="https://file.hstatic.net/1000075078/file/ca_phe_vietnam_3a4efb55366e4422aaedd0e7fd54240b_grande.jpg" />
        </p>
        <p>
          Không chỉ mỗi quốc gia sẽ có một loại cà phê đặc trưng và cách thưởng
          thức riêng biệt, mà mỗi cá nhận lại còn có cả phong cách uống cà phê
          rất khác. Phong cách thưởng thức cà phê của bạn là gì? Cà phê đen hay
          cà phê sữa, nhiều đường hay ít sữa, nóng hay đá, pha phin hay dùng
          sẵn, lựa chọn Espresso hay Capuccino, bạn có muốn thưởng thức thêm vị
          Matcha hay Macchiato... Mỗi người mỗi sở thích, mỗi người mỗi phong
          cách và cá tính, nhưng The Coffee House lại luôn tự tin mang đến sự
          hài lòng cho khách hàng bởi những trải nghiệm độc đáo, sự đa dạng, phá
          cách và hơn hết là những hương vị tuyệt vời nhất.
        </p>
      </div>

      <div className="w-full flex justify-end">
        <p>Morii Coffee</p>
      </div>
    </div>
  );
};

export default About;
