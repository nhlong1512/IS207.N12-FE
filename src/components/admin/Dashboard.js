import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHoaDonAction } from "../../reducer/admin/hoadon/hoadonAction";
import Barchart from "./chart/Barchart";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { getHoaDon } from "../../api/admin/Hoadon";
import Linechart from "./chart/LineChart";
import Piechart from "./chart/PieChart";
import { Button } from "antd";
import Title from "antd/lib/typography/Title";
import Donutchart from "./chart/DonutChart";
const Dashboard = () => {
  const data1 = [
    { year: 2012, value: 10 },
    { year: 2013, value: 20 },
    { year: 2014, value: 30 },
    { year: 2015, value: 40 },
    { year: 2016, value: 50 },
    { year: 2017, value: 60 },
  ];

  const [data, setData] = useState({
    labels: data1.map((item) => item.year),
    datasets: [
      {
        label: "Doanh thu",
        data: data1.map((item) => item.value),
      },
    ],
  });

  var dataHoaDon = [];
  var dataMuaHang = [];
  const dispatch = useDispatch();
  const { hoadon, status } = useSelector((state) => state.hoadon_admin);
  const [isSelected, setIsSelected] = useState("bar");
  const [isSelectedMH, setIsSelectedMH] = useState("pie");
  const [hoadonData, setHoadonData] = useState({
    labels: dataHoaDon.map((item) => item?.thang),
    datasets: [
      {
        label: "Doanh thu",
        data: dataHoaDon.map((item) => item?.tongtien),
      },
    ],
  });
  const [muahangData, setMuahangData] = useState({
    labels: dataHoaDon.map((item) => item?.loai),
    datasets: [
      {
        label: "Số lượng",
        data: dataHoaDon.map((item) => item?.soluong),
      },
    ],
  });
  const [hoadon1, setHoaDon1] = useState([]);
  useEffect(() => {
    const FetchHoaDon = async () => {
      const res = await getHoaDon();
      if (res.status === true) {
        console.log("hoadon", res.hoadon);
        // setHoaDon1(res.hoadon);
        const hoadon4 = res.hoadon;
        for (var index = 0; index < 12; index++) {
          const hoadon1 = res.hoadon;

          const thang = parseInt(index + 1);
          const hoadon2 = hoadon1.filter(
            (item1) => new Date(item1?.NgayHD).getMonth() === thang
          );

          let total = hoadon2.reduce(
            (accumulator, currentValue) => accumulator + currentValue.TongTien,
            0
          );
          dataHoaDon.push({
            thang: "Tháng" + " " + (index + 1),
            tongtien: total,
          });
        }
        console.log("tinaltui", dataHoaDon);
        const dataHoaDon1 = dataHoaDon.filter((item) => item.tongtien !== 0);
        setHoadonData({
          labels: dataHoaDon1.map((item) => item?.thang),
          datasets: [
            {
              label: "Doanh thu",
              data: dataHoaDon1.map((item) => item?.tongtien),
              backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "#FF6384",
                "#50AF95",
                "#FFCE56",
                "#36A2EB",
                "#FF6384",
                "#50AF95",
                "#FFCE56",
                "#36A2EB",
              ],
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        });
        const hoadon2 = hoadon4.filter((item) => parseInt(item.isOnline) == 1);
        let total1 = hoadon2.reduce((accumulator, currentValue) => {
          if (currentValue.isOnline == 1) {
            return accumulator + 1;
          } else {
            return accumulator;
          }
        }, 0);
        dataMuaHang.push({
          loai: "Mua Hàng Online",
          soluong: total1,
        });
        const hoadon3 = hoadon4.filter((item) => parseInt(item.isOnline) != 1);
        let total2 = hoadon3.reduce((accumulator, currentValue) => {
          if (currentValue.isOnline != 1) {
            return accumulator + 1;
          } else {
            return accumulator;
          }
        }, 0);
        dataMuaHang.push({
          loai: "Mua Hàng Offline",
          soluong: total2,
        });
        console.log(dataMuaHang);
        setMuahangData({
          labels: dataMuaHang.map((item) => item?.loai),
          datasets: [
            {
              label: "Số lượng",
              data: dataMuaHang.map((item) => item?.soluong),
              backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "#FF6384",
                "#50AF95",
                "#FFCE56",
                "#36A2EB",
                "#FF6384",
                "#50AF95",
                "#FFCE56",
                "#36A2EB",
              ],
              borderColor: "black",
              borderWidth: 1,
            },
          ],
        });
      }
    };
    FetchHoaDon();
    // dispatch(getHoaDonAction());
  }, []);

  const handleClickChangeChart = (e) => {
    console.log(e.target.name);
    setIsSelected(e.target.name);
  };
  const handleClickChangeChartMH = (e) => {
    console.log(e.target.name);
    setIsSelectedMH(e.target.name);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <div className="w-[90%] flex justify-between mt-10 items-center">
          <div>
            <Title className="mb-0">Biểu Đồ Doanh Thu</Title>
            <p className="mb-0 opacity-70">Tháng 7 - Tháng 12 năm 2022</p>
          </div>
          <div>
            <button
              onClick={(e) => handleClickChangeChart(e)}
              name="bar"
              className={`py-[2px] px-3 border-solid border-[1px] border-[#000] rounded-sm focus:bg-[#146d4d] focus:text-[#fff] transition-all  ease-in-out delay-300 ${
                isSelected == "bar" ? "bg-[#146d4d] text-[#fff]" : ""
              } `}
            >
              Bar
            </button>
            <button
              onClick={(e) => handleClickChangeChart(e)}
              name="line"
              className="mx-1 py-[2px] px-3 border-solid border-[1px] border-[#000] rounded-sm focus:bg-[#146d4d] focus:text-[#fff] transition-all  ease-in-out delay-300 "
            >
              Line
            </button>
            <button
              onClick={(e) => handleClickChangeChart(e)}
              name="pie"
              className="py-[2px] px-3 border-solid border-[1px] border-[#000] rounded-sm focus:bg-[#146d4d] focus:text-[#fff] transition-all  ease-in-out delay-300 "
            >
              Pie
            </button>
          </div>
        </div>
        {/* <div className="w-40 h-24 bg-[#000080] text-[#fff] flex items-center justify-center ">
        16 Người Dùng
      </div> */}
        {isSelected == "bar" && (
          <div className="w-[700px] mx-auto mt-10">
            <Barchart chartData={hoadonData} />
          </div>
        )}
        {isSelected == "line" && (
          <div className="w-[700px] mx-auto mt-10">
            <Linechart chartData={hoadonData} />
          </div>
        )}
        {isSelected == "pie" && (
          <div className="w-[400px] mx-auto mt-10">
            <Piechart chartData={hoadonData} />
          </div>
        )}
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <div className="w-[90%] flex justify-between mt-10 items-center">
          <div>
            <Title className="mb-0">Biểu Đồ Doanh Thu</Title>
            <p className="mb-0 opacity-70">
              Mua Hàng Online - Mua Hàng Trực Tiếp
            </p>
          </div>
          <div>
            <button
              onClick={(e) => handleClickChangeChartMH(e)}
              name="bar"
              className="mx-1 py-[2px] px-3 border-solid border-[1px] border-[#000] rounded-sm focus:bg-[#146d4d] focus:text-[#fff] transition-all  ease-in-out delay-300 "
            >
              Bar
            </button>
            <button
              onClick={(e) => handleClickChangeChartMH(e)}
              name="donut"
              className="mx-1 py-[2px] px-3 border-solid border-[1px] border-[#000] rounded-sm focus:bg-[#146d4d] focus:text-[#fff] transition-all  ease-in-out delay-300 "
            >
              Doughnut
            </button>
            <button
              onClick={(e) => handleClickChangeChartMH(e)}
              name="pie"
              className={`py-[2px] px-3 border-solid border-[1px] border-[#000] rounded-sm focus:bg-[#146d4d] focus:text-[#fff] transition-all  ease-in-out delay-300 ${
                isSelectedMH == "pie" ? "bg-[#146d4d] text-[#fff]" : ""
              } `}
            >
              Pie
            </button>
          </div>
        </div>
        {/* <div className="w-40 h-24 bg-[#000080] text-[#fff] flex items-center justify-center ">
        16 Người Dùng
      </div> */}
        {isSelectedMH == "bar" && (
          <div className="w-[700px] mx-auto mt-10">
            <Barchart chartData={muahangData} />
          </div>
        )}
        {isSelectedMH == "donut" && (
          <div className="w-[400px] mx-auto mt-10">
            <Donutchart chartData={muahangData} />
          </div>
        )}
        {isSelectedMH == "pie" && (
          <div className="w-[400px] mx-auto mt-10">
            <Piechart chartData={muahangData} />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
