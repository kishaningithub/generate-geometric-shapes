import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import DarkModeToggleButton from "@/app/components/DarkModeToggleButton";

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
    <html lang="en" suppressHydrationWarning>
      <body className="container">
        <ThemeProvider attribute="data-theme">
          <header>
            <nav>
              <ul>
                <li>
                  <strong>
                    <Link href="/">Generate geometric shapes</Link>
                  </strong>
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
                <li>
                  <DarkModeToggleButton />
                </li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
