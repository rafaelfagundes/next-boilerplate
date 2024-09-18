"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextUIProvider className="flex h-full w-full flex-col">
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default Providers;
