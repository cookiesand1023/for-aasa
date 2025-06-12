"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RedirectContent() {
  const params = useSearchParams();

  useEffect(() => {
    const path = params.get("path");
    const decodedPath = path ? decodeURIComponent(path) : null;

    if (decodedPath?.startsWith("invitation/")) {
      window.location.href = `https://www.cookiesand1023.com/${decodedPath}`;
    }
  }, [params]);

  return <div>Redirecting...</div>;
}
