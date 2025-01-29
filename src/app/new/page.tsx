'use client';

import Link from "next/link";

export default function Page() {
  return (
    <div className="p-4">
      <Link
        href="/"
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
