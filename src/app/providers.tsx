"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
        <NextUIProvider className="flex h-full w-full flex-col">
          {children}
        </NextUIProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default Providers;
