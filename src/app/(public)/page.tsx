"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { namespaceTranslation } from "@/helper/i18n";

const t = namespaceTranslation("public");

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/login`);
  }, [router]);

  return <div>{t("Loading...")}</div>;
}

export default Page;
