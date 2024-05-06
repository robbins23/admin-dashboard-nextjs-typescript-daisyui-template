import React, { ReactNode } from 'react';

interface ErrorTextProps {
  styleClass?: string;
  children: ReactNode;
}

function ErrorText({ styleClass, children }: ErrorTextProps): JSX.Element {
  return (
    <p className={`text-center text-error ${styleClass || ''}`}>{children}</p>
  );
}

export default ErrorText;
