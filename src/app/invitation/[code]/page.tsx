import { Metadata } from "next";
import Image from "next/image";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Generate metadata for SEO
export const metadata: Metadata = {
  title: "Open in App - YouPace",
  description: "Open this invitation in the YouPace app for the best experience",
};

// Function to detect mobile devices based on User-Agent
function isMobileDevice(userAgent: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
}

export default async function InvitationPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  // Get the User-Agent header
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";

  // Redirect mobile users to the specified URL
  if (isMobileDevice(userAgent)) {
    redirect(`https://link.cookiesand1023.com/invitation?code=${code}`);
  }

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
      </main>

      <div>
        Webの招待ページ
      </div>


      <footer className="row-start-3 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>招待コード: {code}</p>
      </footer>
    </div>
  );
}
