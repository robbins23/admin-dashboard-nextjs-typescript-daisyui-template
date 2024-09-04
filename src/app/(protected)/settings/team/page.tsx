"use client";
import TitleCard from "@/components/cards/title-card";
import { showNotification } from "@/components/features/common/headerSlice";
import { getTeamMembers, TeamMember } from "@/helper/dummy-data";
import { useAppDispatch } from "@/lib/hooks";
import { useState } from "react";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("team");

const TopSideButtons: React.FC = () => {
  const dispatch = useAppDispatch();

  const addNewTeamMember = () => {
    dispatch(
      showNotification({ message: t("Add New Member Clicked"), status: 1 }),
    );
  };

  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={addNewTeamMember}
      >
        {t("Invite New")}
      </button>
    </div>
  );
};

const Team: React.FC = () => {
  const [members, setMembers] = useState<TeamMember[]>(getTeamMembers());

  const getRoleComponent = (role: string) => {
    if (role === "Admin") {
      return <div className="badge badge-secondary">{t(role)}</div>;
    }
    if (role === "Manager") return <div className="badge">{t(role)}</div>;
    if (role === "Owner") {
      return <div className="badge badge-primary">{t(role)}</div>;
    }
    if (role === "Support") {
      return <div className="badge badge-accent">{t(role)}</div>;
    } else return <div className="badge badge-ghost">{t(role)}</div>;
  };

  return (
    <>
      <TitleCard
        title={t("Active Members")}
        topMargin="mt-2"
        TopSideButtons={<TopSideButtons />}
      >
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>{t("Name")}</th>
                <th>{t("Email Id")}</th>
                <th>{t("Joined On")}</th>
                <th>{t("Role")}</th>
                <th>{t("Last Active")}</th>
              </tr>
            </thead>
            <tbody>
              {members.map((l, k) => {
                return (
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
                );
              })}
            </tbody>
          </table>
        </div>
      </TitleCard>
    </>
  );
};

export default Team;
