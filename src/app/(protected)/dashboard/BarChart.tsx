import React, { useRef } from "react";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar, getElementAtEvent, getElementsAtEvent } from "react-chartjs-2";
import TitleCard from "@/components/cards/title-card";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("charts");

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function BarChart(): React.JSX.Element {
  const labels = [
    t("January"),
    t("February"),
    t("March"),
    t("April"),
    t("May"),
    t("June"),
    t("July"),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Loja 1",
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: "Loja 2",
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
    ],
  };

  const chartRef = useRef(null);

  function chartClick(
    evt: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
  ): void {
    const { current: chart } = chartRef;
    if (!chart) {
      return;
    }
    const els = getElementAtEvent(chart, evt);
    // const els = getElementsAtEvent(chart, evt)
    if (els.length === 0) {
      return;
    }
    console.log("index=", els[0].index, ", datasetIndex=", els[0].datasetIndex);
  }

  const options = {
    locale: "pt-BR",
    responsive: true,
  };
  return (
    <TitleCard title={t("Revenue")}>
      <Bar ref={chartRef} options={options} data={data} onClick={chartClick} />
    </TitleCard>
  );
}

export default BarChart;
