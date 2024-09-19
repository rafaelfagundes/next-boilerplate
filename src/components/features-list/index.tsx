"use client";

import { useRef } from "react";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  IconChartBar,
  IconDevices,
  IconPuzzle,
  IconRocket,
  IconShieldLock,
  IconUsers,
} from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";

import Title from "../ui/title";

const MotionCard = motion(Card);

function FeatureCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <MotionCard
      ref={ref}
      isBlurred
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
      transition={{ duration: 0.1, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-background/60 p-4 dark:bg-default-100/50 sm:p-6"
    >
      <CardHeader>
        <div className="flex items-start gap-2">
          {icon}
          <Title className="text-lg">{title}</Title>
        </div>
      </CardHeader>
      <CardBody>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </CardBody>
    </MotionCard>
  );
}

function FeaturesList() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          index={index}
        />
      ))}
    </div>
  );
}

const features = [
  {
    title: "Seamless Integration",
    description:
      "Easily connect with your favorite tools and platforms for a smooth workflow.",
    icon: <IconPuzzle />,
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain valuable insights with our powerful data analysis and visualization tools.",
    icon: <IconChartBar />,
  },
  {
    title: "Collaboration Tools",
    description:
      "Work together seamlessly with your team using our built-in collaboration features.",
    icon: <IconUsers />,
  },
  {
    title: "Responsive Design",
    description:
      "Create beautiful, responsive layouts that adapt seamlessly to any device or screen size.",
    icon: <IconDevices />,
  },
  {
    title: "Performance",
    description:
      "Boost your application's speed and efficiency with our advanced performance tuning tools.",
    icon: <IconRocket />,
  },
  {
    title: "Security Features",
    description:
      "Protect your data and users with our robust, built-in security measures and best practices.",
    icon: <IconShieldLock />,
  },
];

export default FeaturesList;
