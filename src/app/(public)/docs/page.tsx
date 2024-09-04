'use client';
import Link from "next/link";
import React from "react";
import DocComponentsContent from "./components/DocComponentsContent";
import DocComponentsNav from "./components/DocComponentsNav";
import FeaturesContent from "./features/FeaturesContent";
import FeaturesNav from "./features/FeaturesNav";
import GettingStartedContent from "./get-started/GettingStartedContent";
import GettingStartedNav from "./get-started/GettingStartedNav";
import { APP_NAME } from "@/helper/app-constants";

function Documentation(): React.JSX.Element {
  return (
    <>
      <div className="min-h-screen bg-base-200 flex items-center">
        <div className="card mx-auto w-full max-w-4xl  shadow-xl">
          <div className="py-12 p-10 h-screen flex overflow-hidden  bg-base-100 rounded-xl">
            <div className="flex-none p-4 overflow-y-scroll gap-6 ">
              <h1 className="text-3xl font-bold mb-2">{APP_NAME}</h1>
              <Link href="/login">
                <button
                  type="submit"
                  className={"btn normal-case btn-xs btn-primary"}
                >
                  Live Preview
                </button>
              </Link>

              <GettingStartedNav activeIndex={1} />
              <FeaturesNav activeIndex={1} />
              <DocComponentsNav activeIndex={1} />
            </div>

            <div className="grow pt-16  overflow-y-scroll">
              <GettingStartedContent />
              <FeaturesContent />
              <DocComponentsContent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documentation;
