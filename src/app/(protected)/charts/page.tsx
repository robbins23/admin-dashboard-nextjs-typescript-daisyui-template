"use client";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";
import PieChart from "./components/PieChart";
import ScatterChart from "./components/ScatterChart";
import StackBarChart from "./components/StackBarChart";

function Charts(): React.JSX.Element {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue: DateValueType) => {
    console.log("startDate:", newValue?.startDate);
    console.log("endDate:", newValue?.endDate);
    setDateValue({
      startDate: newValue?.startDate as Date,
      endDate: newValue?.endDate as Date,
    });
  };

  return (
    <>
      <Datepicker
        containerClassName="w-72"
        value={dateValue}
        // theme={"light"}
        inputClassName="input input-bordered w-72"
        popoverDirection={"down"}
        toggleClassName="invisible"
        onChange={handleDatePickerValueChange}
        showShortcuts={true}
        // primaryColor={"white"}
      />
      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
        <StackBarChart />
        <BarChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <DoughnutChart />
        <PieChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <ScatterChart />
        <LineChart />
      </div>
    </>
  );
}

export default Charts;
