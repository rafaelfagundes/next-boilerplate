"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
      <NextUIProvider className="flex h-full w-full flex-col">
        {children}
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default Providers;
