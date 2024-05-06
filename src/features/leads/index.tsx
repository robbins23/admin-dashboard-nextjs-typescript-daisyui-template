"use client"
import moment from "moment";
import { useEffect } from "react";
import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from "@/helper/app-constants";
import TitleCard from "@/components/cards/title-card";
import { getLeadsContent } from "./leadSlice";
import { Lead } from "@/helper/types";
import { openModal } from "../common/modalSlice";


const TopSideButtons = () => {
    const dispatch = useAppDispatch();

    const openAddNewLeadModal = () => {
        dispatch(openModal({ title: "Add New Lead", bodyType: MODAL_BODY_TYPES.LEAD_ADD_NEW }));
    };

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={openAddNewLeadModal}>Add New</button>
        </div>
    );
};

function Leads() {
    const dispatch = useAppDispatch();
    const { leads } = useAppSelector((state) => state.leads);


    useEffect(() => {
        dispatch(getLeadsContent());
    }, [dispatch]);

    const getDummyStatus = (index: number) => {
        if (index % 5 === 0) return <div className="badge">Not Interested</div>;
        else if (index % 5 === 1) return <div className="badge badge-primary">In Progress</div>;
        else if (index % 5 === 2) return <div className="badge badge-secondary">Sold</div>;
        else if (index % 5 === 3) return <div className="badge badge-accent">Need Followup</div>;
        else return <div className="badge badge-ghost">Open</div>;
    };

    const deleteCurrentLead = (index: number) => {
        dispatch(openModal({ title: "Confirmation", bodyType: MODAL_BODY_TYPES.CONFIRMATION, extraObject: { message: `Are you sure you want to delete this lead?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.LEAD_DELETE, index } }));
    };

    return (
        <>
            <TitleCard title="Current Leads" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email Id</th>
                                <th>Created At</th>
                                <th>Status</th>
                                <th>Assigned To</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {leads.map((l: Lead, k: number) => (
                                <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.first_name}</div>
                                                <div className="text-sm opacity-50">{l.last_name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{moment(new Date()).add(-5 * (k + 2), 'days').format("DD MMM YY")}</td>
                                    <td>{getDummyStatus(k)}</td>
                                    <td>{l.last_name}</td>
                                    <td><button className="btn btn-square btn-ghost" onClick={() => deleteCurrentLead(k)}><TrashIcon className="w-5" /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    );
}

export default Leads;
