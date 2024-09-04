import {
  ArcElement,
  Chart as ChartJS,
  Filler,
  Legend,
  Tooltip,
} from "chart.js";
import { Scatter } from "react-chartjs-2";
import TitleCard from "@/components/cards/title-card";
import { namespaceTranslation } from "@/helper/i18n";

const t = namespaceTranslation("charts");

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function ScatterChart() {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: t("Orders > 1k"),
        data: Array.from({ length: 100 }, () => ({
          x: Math.random() * 11,
          y: Math.random() * 31,
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
      },
      {
        label: t("Orders > 2K"),
        data: Array.from({ length: 100 }, () => ({
          x: Math.random() * 12,
          y: Math.random() * 12,
        })),
        backgroundColor: "rgba(0, 0, 255, 1)",
      },
    ],
  };

  return (
    <TitleCard title={t("No of Orders by month (in k)")}>
      <Scatter options={options} data={data} />
    </TitleCard>
  );
}

export default ScatterChart;
