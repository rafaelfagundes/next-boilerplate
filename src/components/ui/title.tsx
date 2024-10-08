import React from "react";

function Title({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <h1 className={`text-3xl font-semibold tracking-tight ${className}`}>
      {children}
    </h1>
  );
}

export default Title;
