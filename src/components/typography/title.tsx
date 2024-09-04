import React, { ReactNode } from "react";

interface TitleProps {
  styleClass?: string;
  children: ReactNode;
}

function Title({ styleClass, children }: TitleProps): React.JSX.Element {
  return <p className={`text-2xl font-bold  ${styleClass}`}>{children}</p>;
}

export default Title;
