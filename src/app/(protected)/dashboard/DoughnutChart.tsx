import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import TitleCard from "@/components/cards/title-card";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("charts");

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function DoughnutChart() {
  const options = {
    responsive: true,
    plugins: {},
  };

  const labels = [
    "Electronics",
    "Home Applicances",
    "Beauty",
    "Furniture",
    "Watches",
    "Apparel",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t("# of Orders"),
        data: [122, 219, 30, 51, 82, 13],
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 64, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <TitleCard title={t("Orders by Category")}>
      <Doughnut options={options} data={data} />
    </TitleCard>
  );
}

export default DoughnutChart;
