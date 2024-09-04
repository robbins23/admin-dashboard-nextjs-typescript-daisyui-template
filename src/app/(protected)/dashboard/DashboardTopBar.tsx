"use client";
import ArrowDownTrayIcon from "@heroicons/react/24/outline/ArrowDownTrayIcon";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon";
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import React, { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

// const periodOptions = [
//   { name: "Hoje", value: "TODAY" },
//   { name: "Ontem", value: "YESTERDAY" },
//   { name: "Esta semana", value: "THIS_WEEK" },
//   { name: "Semana passada", value: "LAST_WEEK" },
//   { name: "Este mês", value: "THIS_MONTH" },
//   { name: "Mês passado", value: "LAST_MONTH" },
// ];

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
          displayFormat="DD/MM/YYYY"
          inputClassName="input input-bordered w-72"
          popoverDirection={"down"}
          toggleClassName="invisible"
          onChange={handleDatePickerValueChange}
          showShortcuts={true}
          i18n="pt-BR"
          configs={{
            shortcuts: {
              today: "Hoje",
              yesterday: "Ontem",
              past: (period) => `Últimos ${period} dias`,
              currentMonth: "Este mês",
              pastMonth: "Mês passado",
            },
          }}
          // primaryColor={"blue"}
        />
        {
          /* <SelectBox
                options={periodOptions}
                labelTitle="Period"
                placeholder="Select date range"
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
          Atualizar
        </button>
        <button className="btn btn-ghost btn-sm normal-case  ml-2">
          <ShareIcon className="w-4 mr-2" />
          Compartilhar
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
                Enviar resumo por e-mail
              </a>
            </li>
            <li>
              <a>
                <ArrowDownTrayIcon className="w-4" />
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DashboardTopBar;
