import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import TitleCard from "@/components/cards/title-card";
import { namespaceTranslation } from "@/helper/i18n";

const t = namespaceTranslation("charts");

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function PieChart() {
  const options = {
    responsive: true,
    plugins: {
      // legend: {
      //   position: "top",
      // },
    },
  };

  const labels = [
    t("India"),
    t("Middle East"),
    t("Europe"),
    t("US"),
    t("Latin America"),
    t("Asia(non-india)"),
  ];

  const data = {
    labels,
    datasets: [
      {
        label: t("# of Orders"),
        data: [122, 219, 30, 51, 82, 13],
        backgroundColor: [
          "rgba(255, 99, 255, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 255, 0.8)",
          "rgba(75, 192, 255, 0.8)",
          "rgba(153, 102, 255, 0.8)",
          "rgba(255, 159, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 255, 1)",
          "rgba(75, 192, 255, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <TitleCard title={t("Orders by country")}>
      <Pie options={options} data={data} />
    </TitleCard>
  );
}

export default PieChart;
