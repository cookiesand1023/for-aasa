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
      // Time to wait before redirecting to App Store (in milliseconds)
      const timeoutDuration = 2000; // 2 seconds

      // Set up a timer for the fallback
      const appStoreRedirectTimer = setTimeout(() => {
        console.log("[DEBUG_LOG] App not opened, redirecting to App Store");
        window.location.href = appStoreUrl;
      }, timeoutDuration);

      // Try to open the app with universal link
      const redirectUrl = `https://www.cookiesand1023.com${decodedPath}`;
      console.log("[DEBUG_LOG] Attempting to open app with:", redirectUrl);
      window.location.href = redirectUrl;

      // If the page is hidden/blurred, it means the app was successfully opened
      // In that case, clear the timer to prevent the App Store redirect
      const handleVisibilityChange = () => {
        if (document.hidden) {
          console.log("[DEBUG_LOG] App opened successfully, clearing redirect timer");
          clearTimeout(appStoreRedirectTimer);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // Clean up event listener when component unmounts
      return () => {
        clearTimeout(appStoreRedirectTimer);
        document.removeEventListener("visibilitychange", handleVisibilityChange);
      };
    } else {
      console.log("[DEBUG_LOG] No redirection - path doesn't start with 'invitation/'");
    }
  }, [params]);

  return <div>Redirecting...</div>;
}
