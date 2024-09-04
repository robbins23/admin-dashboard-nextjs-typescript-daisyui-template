"use client";
import TitleCard from "@/components/cards/title-card";
import { Bill, getBills } from "@/helper/dummy-data";
import React, { useState } from "react";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("billing");

const Billing: React.FC = () => {
  const [bills, setBills] = useState<Bill[]>(getBills());

  const getPaymentStatus = (status: string) => {
    if (status === "Paid") {
      return <div className="badge badge-success">{t(status)}</div>;
    }
    if (status === "Pending") {
      return <div className="badge badge-primary">{t(status)}</div>;
    } else return <div className="badge badge-ghost">{t(status)}</div>;
  };

  return (
    <>
      <TitleCard title={t("Billing History")} topMargin="mt-2">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>{t("Invoice No")}</th>
                <th>{t("Invoice Generated On")}</th>
                <th>{t("Description")}</th>
                <th>{t("Amount")}</th>
                <th>{t("Status")}</th>
                <th>{t("Invoice Paid On")}</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.invoiceNo}</td>
                  <td>{bill.generatedOn}</td>
                  <td>{bill.description}</td>
                  <td>${bill.amount}</td>
                  <td>{getPaymentStatus(bill.status)}</td>
                  <td>{bill.paidOn}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
};

export default Billing;
