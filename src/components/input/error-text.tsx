import React from "react";

interface Props {
    styleClass?: string;
    children: React.ReactNode;
}

function ErrorText({ styleClass = "", children }: Props) {
    return (
        <p className={`text-center text-error ${styleClass}`}>{children}</p>
    );
}

export default ErrorText;
