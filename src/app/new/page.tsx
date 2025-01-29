'use client';

import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <Link
        href="/"
        className="mb-4 inline-block rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 flex items-center"
      >
        Back to Home
      </Link>
      
      <div>
        {Array.from({ length: 20_000 }).map((_, i) => (
          <div key={i}>Div {i + 1}</div>
        ))}
      </div>
    </div>
  );
}
