'use client';
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import GettingStartedContent from "@/app/(public)/docs/get-started/GettingStartedContent";
import GettingStartedNav from "@/app/(public)/docs/get-started/GettingStartedNav";
import { setPageTitle } from "@/components/features/common/headerSlice";

function GettingStarted(): React.JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPageTitle({ title: "Documentation" }));
  }, []);

  return (
    <>
      <div
        className="bg-base-100  flex overflow-hidden  rounded-lg"
        style={{ height: "82vh" }}
      >
        <div className="flex-none p-4">
          <GettingStartedNav activeIndex={1} />
        </div>

        <div className="grow pt-16  overflow-y-scroll">
          <GettingStartedContent />
        </div>
      </div>
    </>
  );
}

export default GettingStarted;
