import React, { ReactNode } from "react";

interface SubtitleProps {
    styleClass?: string;
    children: ReactNode;
}

function Subtitle({ styleClass, children }: SubtitleProps) {
    return (
        <div className={`text-xl font-semibold ${styleClass}`}>{children}</div>
    );
}

export default Subtitle;
