"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`/login`);
  }, [router]);

  return <div>Loading...</div>;
}

export default Page;
