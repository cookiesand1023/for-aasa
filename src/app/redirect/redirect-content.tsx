"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function RedirectContent() {
  const params = useSearchParams();

  const appStoreUrl = "https://apps.apple.com/jp/app/youpace-fans/id6466339433";

  useEffect(() => {
    const path = params.get("path");
    const decodedPath = path ? decodeURIComponent(path) : null;
    console.log("[DEBUG_LOG] Decoded path:", decodedPath);

    if (decodedPath?.startsWith("/invitation/")) {
      const redirectUrl = `https://www.cookiesand1023.com${decodedPath}`;
      console.log("[DEBUG_LOG] Redirecting to:", redirectUrl);
      window.location.href = redirectUrl;

      // 遷移できなかったらアプリインストールページへ
      setTimeout(() => {
        console.log("[DEBUG_LOG] Redirecting to app store URL:", appStoreUrl);
        window.location.href = appStoreUrl;
      }, 500);

    } else {
      console.log("[DEBUG_LOG] No redirection - path doesn't start with 'invitation/'");
    }
  }, [params]);

  return <div>Redirecting...</div>;
}
