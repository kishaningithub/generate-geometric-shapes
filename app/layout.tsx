import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Generate geometric shapes",
  description:
    "Generate precise shapes. Eg. regular polygons, triangle, rectangle etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="container">
        <header>
          <nav>
            <ul>
              <li>
                <strong>Generate geometric shapes</strong>
              </li>
            </ul>
            <ul>
              <li>
                <Link href="/regular-polygons">Regular polygons</Link>
              </li>
              <li>
                <Link href="/rectangle">Rectangle</Link>
              </li>
              <li>
                <Link href="/circle">Circle</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
