"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RedirectContent() {
  console.log("[DEBUG_LOG] RedirectContent client component mounted");

  const params = useSearchParams();

  useEffect(() => {
    console.log("[DEBUG_LOG] RedirectContent useEffect triggered");

    const path = params.get("path");
    console.log("[DEBUG_LOG] Received path parameter:", path);

    const decodedPath = path ? decodeURIComponent(path) : null;
    console.log("[DEBUG_LOG] Decoded path:", decodedPath);

    if (decodedPath?.startsWith("invitation/")) {
      const redirectUrl = `https://www.cookiesand1023.com/${decodedPath}`;
      console.log("[DEBUG_LOG] Redirecting to:", redirectUrl);
      window.location.href = redirectUrl;
    } else {
      console.log("[DEBUG_LOG] No redirection - path doesn't start with 'invitation/'");
    }
  }, [params]);

  return <div>Redirecting...</div>;
}
