import React from "react";

function Subtitle({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <div className={`text-muted-foreground text-center text-xl ${className}`}>
      {children}
    </div>
  );
}

export default Subtitle;
