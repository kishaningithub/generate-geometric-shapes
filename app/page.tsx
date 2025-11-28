"use client";

import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-full">
      <div>
        <h2 className="text-center p-10">
          What shape would you like to generate?
        </h2>
        <div className="grid">
          <Link href="/regular-polygons" role="button">
            Regular polygons
          </Link>
          <Link href="/rectangle" role="button">
            Rectangle
          </Link>
          <Link href="/circle" role="button">
            Circle
          </Link>
        </div>
      </div>
    </div>
  );
}
