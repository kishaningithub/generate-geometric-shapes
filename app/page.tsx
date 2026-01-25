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
          <Link href="/rectangles" role="button">
            Rectangle
          </Link>
          <Link href="/square" role="button">
            Square
          </Link>
        </div>
        <div className="grid pt-2">
          <Link href="/circles" role="button">
            Circle
          </Link>
          <Link href="/triangles" role="button">
            Triangles
          </Link>
          <Link href="/trapizium" role="button">
            Trapezium
          </Link>
        </div>
        <div className="grid pt-2">
          <Link href="/kite" role="button">
            Kite
          </Link>
        </div>
      </div>
    </div>
  );
}
