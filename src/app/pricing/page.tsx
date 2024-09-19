"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "framer-motion";

import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";

const plans = [
  {
    title: "Free",
    price: "$0",
    description: "For individuals just getting started",
    features: ["Basic features", "1 user", "100 MB storage", "Email support"],
  },
  {
    title: "Premium",
    price: "$19",
    description: "For growing teams and businesses",
    features: [
      "All Free features",
      "5 users",
      "5 GB storage",
      "Priority email support",
      "Advanced analytics",
    ],
    popular: true,
  },
  {
    title: "Ultimate",
    price: "$49",
    description: "For large enterprises and power users",
    features: [
      "All Premium features",
      "Unlimited users",
      "100 GB storage",
      "24/7 phone support",
      "Custom integrations",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title className="text-center">Choose Your Plan</Title>
        <Subtitle className="mb-12 mt-4">
          Select the perfect plan for your needs
        </Subtitle>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-8 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.title}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="relative flex h-full flex-col overflow-visible p-4 sm:p-8">
              {plan.popular && (
                <div className="absolute right-4 top-1 -translate-y-1/2 translate-x-1/4 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground shadow-md">
                  Most Popular
                </div>
              )}
              <CardHeader className="flex flex-col items-start justify-center gap-2">
                <h3 className="text-2xl font-bold">{plan.title}</h3>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardBody className="flex-grow">
                <div className="mb-4 text-4xl font-bold">
                  {plan.price}
                  <span className="text-muted-foreground text-xl font-normal">
                    /month
                  </span>
                </div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <IconCheck className="mr-2 h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  className="w-full"
                  color={plan.popular ? "primary" : "default"}
                  variant={plan.popular ? "solid" : "flat"}
                >
                  {plan.title === "Free" ? "Get Started" : "Upgrade Now"}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
