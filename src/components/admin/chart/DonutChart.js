import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Donutchart = ({ chartData }) => {
  return <Doughnut data={chartData} />;
};

export default Donutchart;
