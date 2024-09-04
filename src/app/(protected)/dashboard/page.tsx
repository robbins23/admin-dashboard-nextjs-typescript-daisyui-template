"use client";
import React from "react";
import UserGroupIcon from "@heroicons/react/24/outline/UserGroupIcon";
import UsersIcon from "@heroicons/react/24/outline/UsersIcon";
import CircleStackIcon from "@heroicons/react/24/outline/CircleStackIcon";
import CreditCardIcon from "@heroicons/react/24/outline/CreditCardIcon";
import { DateValueType } from "react-tailwindcss-datepicker";

import { showNotification } from "@/components/features/common/headerSlice";
import { useAppDispatch } from "@/lib/hooks";

import DashboardStats from "./DashboardStats";
import DashboardTopBar from "./DashboardTopBar";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import AmountStats from "./AmountStats";
import PageStats from "./PageStats";
import UserChannels from "./UserChannels";
import DoughnutChart from "./DoughnutChart";

interface StatData {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  description: string;
}

const statsData: StatData[] = [
  {
    title: "New Users",
    value: "34.7k",
    icon: <UserGroupIcon className="w-8 h-8" />,
    description: "↗︎ 2300 (22%)",
  },
  {
    title: "Total Sales",
    value: "$34,545",
    icon: <CreditCardIcon className="w-8 h-8" />,
    description: "Current month",
  },
  {
    title: "Pending Leads",
    value: "450",
    icon: <CircleStackIcon className="w-8 h-8" />,
    description: "50 in hot leads",
  },
  {
    title: "Active Users",
    value: "5.6k",
    icon: <UsersIcon className="w-8 h-8" />,
    description: "↙ 300 (18%)",
  },
];

const Dashboard: React.FC = () => {
  // const dispatch = useDispatch();

  // const updateDashboardPeriod = (newRange: any) => {
  //     // Dashboard range changed, write code to refresh your values
  //     dispatch(showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 }));
  // }
  const dispatch = useAppDispatch();

  const updateDashboardPeriod = (newRange: DateValueType) => {
    // Dashboard range changed, write code to refresh your values
    dispatch(
      showNotification({
        message: newRange
          ? `Período atualizado para ${newRange.startDate} até ${newRange.endDate}`
          : `Período em branco`,
        status: 1,
      }),
    );
  };

  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => (
          <DashboardStats key={k} {...d} colorIndex={k} />
        ))}
      </div>

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <AmountStats />
        <PageStats />
      </div>

      {/** ---------------------- User source channels table  ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <UserChannels />
        <DoughnutChart />
      </div>
    </>
  );
};

export default Dashboard;
