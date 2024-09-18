import React from "react";

function Title({ children }: Readonly<{ children: React.ReactNode }>) {
  return <h1 className="text-3xl font-semibold tracking-tight">{children}</h1>;
}

export default Title;
