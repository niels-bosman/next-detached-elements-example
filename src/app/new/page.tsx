'use client';

import Link from "next/link";

let renderCount = 0;

export default function Page() {
  const localRenderCount = renderCount++;
  return (
    <div className="p-4">
      <Link
        href="/"
        className="mb-4 inline-block rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 flex items-center"
      >
        Back to Home
      </Link>

      <div className="debug-wrapper">
        {Array.from({ length: 20_000 }).map((_, i) => (
          <div className={`debug-child-${localRenderCount}-${i}`} key={i}>Div {i + 1}</div>
        ))}
      </div>
    </div>
  );
}
