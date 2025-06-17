'use client';

export default function LinkButton({ onclick }: { onclick?: () => void }) {
  return (
    <div
      onClick={onclick}
      className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-base h-12 px-6 w-full sm:w-auto"
    >
      アプリで開く
    </div>
  );
}