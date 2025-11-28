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
        <div role="group">
          <Link href="/regular-polygons">
            <span role="button">Regular polygons</span>
          </Link>
          <Link href="/rectangle">
            <span role="button">Rectangle</span>
          </Link>
          <Link href="/circle">
            <span role="button">Circle</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
