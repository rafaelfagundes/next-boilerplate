import { NextUIProvider } from "@nextui-org/react";

function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default Providers;
