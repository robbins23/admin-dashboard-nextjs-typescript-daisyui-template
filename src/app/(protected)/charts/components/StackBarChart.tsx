import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
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

function StackBarChart() {
  const options = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

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
        label: t("Store {}", 1),
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: t("Store {}", 2),
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(53, 162, 235, 1)",
      },
      {
        label: t("Store {}", 3),
        data: labels.map(() => {
          return Math.random() * 1000 + 500;
        }),
        backgroundColor: "rgba(235, 162, 235, 1)",
      },
    ],
  };

  return (
    <TitleCard title={t("Sales")} topMargin="mt-2">
      <Bar options={options} data={data} />
    </TitleCard>
  );
}

export default StackBarChart;
