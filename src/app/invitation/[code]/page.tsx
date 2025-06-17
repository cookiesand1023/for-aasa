import { Metadata } from "next";
import Image from "next/image";
import LinkButton from "@/app/invitation/[code]/LinkButton";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Open in App - YouPace",
  description: "Open this invitation in the YouPace app for the best experience",
};

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  console.log("[DEBUG_LOG] Rendering InvitationPage");

  const { code } = await params;
  console.log("[DEBUG_LOG] Invitation code parameter:", code);

  const appStoreUrl = "https://apps.apple.com/jp/app/youpace-fans/id6466339433";
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.youpacefans.app";

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

  const deepLinkUrl = `youpacefans://invitation/testtesttest`;
  console.log("[DEBUG_LOG] Generated deep link URL:", deepLinkUrl);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        {/* Logo */}
        <Image
          className="dark:invert"
          src="/next.svg" // Replace with your app logo
          alt="YouPace logo"
          width={180}
          height={38}
          priority
        />

        {/* Title and description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">アプリで開く</h1>
          <p className="text-gray-600 dark:text-gray-400">
            より良い体験のために、YouPaceアプリでこの招待を開いてください。
          </p>
        </div>

        {/* Open in App button */}
        <LinkButton onclick={redirectToApp} />

        {/* App store links */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            アプリをインストールしていない場合:
          </p>
          <div className="flex gap-4">
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm h-10 px-4"
            >
              App Store
            </a>
            <a
              href={playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm h-10 px-4"
            >
              Google Play
            </a>
          </div>
        </div>
      </main>

      <footer className="row-start-3 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>招待コード: {code}</p>
      </footer>
    </div>
  );
}
