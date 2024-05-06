"use client"
import TitleCard from "@/components/cards/title-card";
import DummyData from "@/helper/dummy-data";
import  { Bill } from "@/helper/dummy-data";
import React, { useState } from "react";


const Billing: React.FC = () => {
    const [bills, setBills] = useState<Bill[]>(DummyData.BILLS);

    const getPaymentStatus = (status: string) => {
        if (status === "Paid") return <div className="badge badge-success">{status}</div>;
        if (status === "Pending") return <div className="badge badge-primary">{status}</div>;
        else return <div className="badge badge-ghost">{status}</div>;
    }

    return (
        <>
            <TitleCard title="Billing History" topMargin="mt-2">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Invoice No</th>
                                <th>Invoice Generated On</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Invoice Paid On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bills.map((bill, index) => (
                                    <tr key={index}>
                                        <td>{bill.invoiceNo}</td>
                                        <td>{bill.generatedOn}</td>
                                        <td>{bill.description}</td>
                                        <td>${bill.amount}</td>
                                        <td>{getPaymentStatus(bill.status)}</td>
                                        <td>{bill.paidOn}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default Billing;
