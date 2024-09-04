import React, { ReactNode } from "react";
import Subtitle from "../typography/subtitle";

interface TitleCardProps {
  title: string;
  children: ReactNode;
  topMargin?: string;
  TopSideButtons?: ReactNode;
}

function TitleCard(
  { title, children, topMargin, TopSideButtons }: TitleCardProps,
) {
  return (
    <div
      className={"card w-full p-6 bg-base-100 shadow-xl " +
        (topMargin || "mt-6")}
    >
      {/* Title for Card */}
      <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
        {title}

        {/* Top side button, show only if present */}
        {TopSideButtons && (
          <div className="inline-block float-right">{TopSideButtons}</div>
        )}
      </Subtitle>

      <div className="divider mt-2"></div>

      {/** Card Body */}
      <div className="h-full w-full pb-6 bg-base-100">
        {children}
      </div>
    </div>
  );
}

export default TitleCard;
