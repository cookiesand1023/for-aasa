"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RedirectContent() {
  const params = useSearchParams();

  useEffect(() => {
    const path = params.get("path");
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
