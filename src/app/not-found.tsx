import Link from "next/link";

import { Button } from "@nextui-org/react";
import { IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
  return (
    <div className="to-muted mt-16 flex flex-col items-center justify-center bg-gradient-to-b from-background p-4 text-foreground sm:mt-20">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-8xl font-extrabold tracking-tight text-red-400 sm:text-9xl">
          404
        </h1>
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Page not found
          </h2>
          <p className="text-muted-foreground text-xl">
            {"We couldn't find the page you're looking for."}
          </p>
        </div>
        <div className="bg-border h-px w-full" />
        <div className="space-y-4">
          <p className="text-muted-foreground">
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
