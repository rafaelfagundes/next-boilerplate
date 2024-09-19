"use client";

import { Button, Spacer } from "@nextui-org/react";
import { motion } from "framer-motion";

import Headline from "@/components/ui/headline";
import Subtitle from "@/components/ui/subtitle";

function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-purple-200 to-sky-50 pt-24 dark:from-purple-900 dark:to-violet-950 sm:pb-10 lg:pt-32 xl:pt-48">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center space-y-8 text-center"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Headline className="text-4xl font-extrabold text-purple-700 dark:text-purple-300 md:text-5xl lg:text-6xl">
              Streamline Your Workflow
            </Headline>
            <Subtitle className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
              Boost productivity and simplify your processes with our all-in-one
              SaaS solution.
            </Subtitle>
          </motion.div>
          <Spacer y={4} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-row gap-4"
          >
            <Button
              size="lg"
              color="primary"
              variant="shadow"
              className="font-semibold"
            >
              Get Started
            </Button>
            <Button size="lg" variant="bordered" className="font-semibold">
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
