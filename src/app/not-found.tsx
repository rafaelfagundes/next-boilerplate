import Link from "next/link";

import { Button } from "@nextui-org/react";
import { IconArrowLeft, IconMoodLookDown } from "@tabler/icons-react";

import Title from "@/components/ui/title";

export default function NotFound() {
  return (
    <div className="to-muted mt-16 flex flex-col items-center justify-center bg-gradient-to-b from-background p-4 text-foreground sm:mt-20">
      <div className="w-full max-w-md space-y-6 text-center">
        <span className="text-7xl font-extrabold tracking-tight text-red-400 sm:text-8xl">
          404
        </span>
        <div className="space-y-2">
          <Title>Page not found</Title>
          <p className="text-muted-foreground text-xl">
            {"We couldn't find the page you're looking for."}
          </p>
        </div>

        <IconMoodLookDown
          className="mx-auto h-16 w-16"
          stroke={1}
        ></IconMoodLookDown>
        <div className="space-y-4">
          <p className="text-muted-foreground opacity-75">
            {`It seems you've ventured into uncharted territory. Let's get you
            back on track.`}
          </p>
          <Button size="lg" className="font-medium">
            <Link href="/" className="flex items-center gap-2">
              <IconArrowLeft className="mr-2 h-4 w-4" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
