"use client";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("charts");

const periodOptions = [
  { name: "Today", value: "TODAY" },
  { name: "Yesterday", value: "YESTERDAY" },
  { name: "Current week", value: "THIS_WEEK" },
  { name: "Past week", value: "LAST_WEEK" },
  { name: "Current Month", value: "THIS_MONTH" },
  { name: "Past Month", value: "LAST_MONTH" },
];

function DashboardTopBar({ updateDashboardPeriod }: {
  updateDashboardPeriod: (newRange: DateValueType) => void;
}): React.JSX.Element {
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
    updateDashboardPeriod(newValue);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="">
        <Datepicker
          containerClassName="w-72 "
          value={dateValue}
          // theme={"light"}
          displayFormat={t("MM/DD/YYYY")}
          inputClassName="input input-bordered w-72"
          popoverDirection={"down"}
          toggleClassName="invisible"
          onChange={handleDatePickerValueChange}
          showShortcuts={true}
          i18n={t("en-US")}
          configs={{
            shortcuts: {
              today: t("Today"),
              yesterday: t("Yesterday"),
              past: (period) => t("Last {} days", period),
              currentMonth: t("Current month"),
              pastMonth: t("Past month"),
            },
          }}
          // primaryColor={"blue"}
        />
        {
          /* <SelectBox
                options={periodOptions}
                labelTitle={t("Period")}
                placeholder={t("Select date range")}
                containerStyle="w-72"
                labelStyle="hidden"
                defaultValue="TODAY"
                updateFormValue={updateSelectBoxValue}
            /> */
        }
      </div>
      <div className="text-right ">
        <button className="btn btn-ghost btn-sm normal-case">
          <ArrowPathIcon className="w-4 mr-2" />
          {t("Refresh Data")}
        </button>
        <button className="btn btn-ghost btn-sm normal-case  ml-2">
          <ShareIcon className="w-4 mr-2" />
          {t("Share")}
        </button>

        <div className="dropdown dropdown-bottom dropdown-end  ml-2">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-sm normal-case btn-square "
          >
            <EllipsisVerticalIcon className="w-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-compact  p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <EnvelopeIcon className="w-4" />
                {t("Send Email")}
              </a>
            </li>
            <li>
              <a>
                <ArrowDownTrayIcon className="w-4" />
                {t("Download")}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardTopBar;
