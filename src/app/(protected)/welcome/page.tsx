import IntroPointers from "@/components/features/login/intro-pointers";
import Link from "next/link";
import React from "react";
import { namespaceTranslation } from "@/helper/i18n";
const t = namespaceTranslation("welcome");

function Welcome() {
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <IntroPointers />
          <Link href="/dashboard">
            <button className="btn bg-base-100 btn-outline">{t("Get Started")}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
