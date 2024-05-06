import React from 'react';

interface DashboardStatsProps {
    title: string;
    icon: React.ReactNode;
    value: string | number;
    description: string;
    colorIndex: number;
}

const DashboardStats: React.FC<DashboardStatsProps> = ({ title, icon, value, description, colorIndex }) => {
    const COLORS: string[] = ["primary", "primary"];

    const getDescStyle = () => {
        if (description.includes("↗︎")) return "font-bold text-green-600";
        else if (description.includes("↙")) return "font-bold text-red-400";
        else return "";
    }

    return (
        <div className="stats shadow">
            <div className="stat">
                <div className={`stat-figure `}>{icon}</div>
                <div className="stat-title ">{title}</div>
                <div className={`stat-value mt-2`}>{value}</div>
                <div className={"stat-desc " + getDescStyle()}>{description}</div>
            </div>
        </div>
    );
}

export default DashboardStats;
