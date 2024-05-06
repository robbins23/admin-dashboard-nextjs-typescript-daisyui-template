"use client"
import TitleCard from "@/components/cards/title-card";
import DummyData from "@/helper/dummy-data";
import dummyData, { TeamMember } from "@/helper/dummy-data";
import { useAppDispatch } from "@/lib/hooks";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { showNotification } from "../common/headerSlice";


const TopSideButtons: React.FC = () => {
    const dispatch = useAppDispatch();

    const addNewTeamMember = () => {
        dispatch(showNotification({ message: "Add New Member Clicked", status: 1 }));
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={addNewTeamMember}>Invite New</button>
        </div>
    );
}

const Team: React.FC = () => {
    const [members, setMembers] = useState<TeamMember[]>(DummyData.TEAM_MEMBERS_LIST);

    const getRoleComponent = (role: string) => {
        if (role === "Admin") return <div className="badge badge-secondary">{role}</div>;
        if (role === "Manager") return <div className="badge">{role}</div>;
        if (role === "Owner") return <div className="badge badge-primary">{role}</div>;
        if (role === "Support") return <div className="badge badge-accent">{role}</div>;
        else return <div className="badge badge-ghost">{role}</div>;
    }

    return (
        <>
            <TitleCard title="Active Members" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Joined On</th>
                        <th>Role</th>
                        <th>Last Active</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            members.map((l, k) => {
                                return(
                                    <tr key={k}>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-circle w-12 h-12">
                                                    <img src={l.avatar} alt="Avatar" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{l.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{l.email}</td>
                                    <td>{l.joinedOn}</td>
                                    <td>{getRoleComponent(l.role)}</td>
                                    <td>{l.lastActive}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </TitleCard>
            </>
    )
}

export default Team