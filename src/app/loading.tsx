import { CircularProgress } from "@nextui-org/react";

function Loading() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-center p-4">
      <CircularProgress
        classNames={{
          svg: "h-24 w-24 drop-shadow-md",
          indicator: "stroke-blue-400 dark:stroke-white",
          track: "stroke-white/10",
          value: "text-3xl font-semibold text-white",
        }}
        aria-label="Loading..."
      />
    </div>
  );
}

export default Loading;
