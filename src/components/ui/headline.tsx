import React from "react";

function Headline({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <span
      className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none ${className}}`}
    >
      {children}
    </span>
  );
}

export default Headline;
