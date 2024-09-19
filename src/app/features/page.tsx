"use client";

import { motion } from "framer-motion";

import FeaturesList from "@/components/features-list";
import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";

function Features() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title className="text-center">Features</Title>
        <Subtitle className="mb-12 mt-4">
          Check out our list of features and capabilities
        </Subtitle>
      </motion.div>
      <FeaturesList></FeaturesList>
    </div>
  );
}

export default Features;
