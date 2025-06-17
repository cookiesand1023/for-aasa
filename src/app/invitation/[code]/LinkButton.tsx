'use client';

export default function LinkButton({ code }: { code: string; }) {
  const appStoreUrl = "https://apps.apple.com/jp/app/youpace-fans/id6466339433";

  const redirectToApp = () => {
    const deepLinkUrl = `youpacefans://invitation/${code}`;
    console.log("[DEBUG_LOG] Redirecting to deep link URL:", deepLinkUrl);
    window.location.href = deepLinkUrl;

    // Fallback to app store if deep link fails
    setTimeout(() => {
      console.log("[DEBUG_LOG] Redirecting to app store URL:", appStoreUrl);
      window.location.href = appStoreUrl;
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