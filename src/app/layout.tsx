import type { Metadata } from "next";
import { DM_Sans as SansSerif } from "next/font/google";
import { Suspense } from "react";

import NavBar from "@/components/navbar";

import "./globals.css";
import Providers from "./providers";

const sansSerif = SansSerif({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Next.js Boilerplate",
  description: "A powerful boilerplate for Next.js made by Rafael Fagundes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍄</text></svg>"
        />
      </head>
      <body
        className={`${sansSerif.className} h-screen w-screen flex-grow antialiased`}
      >
        <Providers>
          <NavBar></NavBar>
          <main className="flex-grow">
            <Suspense>{children}</Suspense>
          </main>
        </Providers>
      </body>
    </html>
  );
}
