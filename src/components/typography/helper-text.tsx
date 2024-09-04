import React, { ReactNode } from "react";

interface HelperTextProps {
  styleClass?: string;
  children: ReactNode;
}

function HelperText(
  { styleClass, children }: HelperTextProps,
): React.JSX.Element {
  return <div className={`text-slate-400 ${styleClass}`}>{children}</div>;
}

export default HelperText;
