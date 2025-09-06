"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services/software"); // Redirect users back to services list
  }, [router]);

  return null;
};

export default Page;
