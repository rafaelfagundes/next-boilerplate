"use client";

import { Button } from "@nextui-org/react";

import SectionTitle from "@/components/ui/section-title";

function GetStarted() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-indigo-50 to-purple-200 py-16 dark:from-indigo-950 dark:to-purple-900 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10 text-center">
          <div className="space-y-4">
            <SectionTitle>Ready to Get Started?</SectionTitle>
            <p className="mx-auto max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
              Join thousands of satisfied users and take your productivity to
              the next level.
            </p>
          </div>
          <div className="flex flex-row items-center justify-center space-x-4">
            <Button size="lg" color="primary">
              Sign Up Now
            </Button>
            <Button size="lg" variant="solid">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
