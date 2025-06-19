'use client';

export default function LinkButton({ code }: { code: string; }) {
  const appStoreUrl = "https://apps.apple.com/jp/app/youpace-fans/id6466339433";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.youpacefans.app";

  const redirectToApp = () => {
    const deepLinkUrl = `youpacefans://invitation/${code}`;
    console.log("[DEBUG_LOG] Redirecting to deep link URL:", deepLinkUrl);
    window.location.href = deepLinkUrl;

    // Detect user agent to determine which store URL to use
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const storeUrl = isIOS ? appStoreUrl : playStoreUrl;

    // Fallback to appropriate app store if deep link fails
    setTimeout(() => {
      console.log("[DEBUG_LOG] Redirecting to app store URL:", storeUrl);
      window.location.href = storeUrl;
    }, 500);

  }

  return (
    <div
      onClick={redirectToApp}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6 w-full sm:w-auto"
    >
      アプリで開く
    </div>
  );
}
