"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { IconQuote } from "@tabler/icons-react";
import { motion } from "framer-motion";

import SectionTitle from "@/components/ui/section-title";

const MotionCard = motion(Card);

function Testimonials() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="flex w-full flex-col items-center justify-center bg-gradient-to-b from-sky-50 to-indigo-50 pt-8 dark:from-violet-950 dark:to-indigo-950 md:pt-16 lg:pt-24">
      <div className="container px-4 md:px-6">
        <SectionTitle className="mb-12">What Our Customers Say</SectionTitle>
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <MotionCard
              isBlurred={true}
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              className="bg-background/60 p-4 dark:bg-default-100/50 sm:p-6"
            >
              <CardHeader className="flex items-center gap-4">
                <Avatar src={testimonial.avatar} size="lg" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.title}
                  </p>
                </div>
              </CardHeader>
              <CardBody>
                <IconQuote className="mb-4 text-2xl text-gray-400" />
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {testimonial.quote}
                </p>
              </CardBody>
              <CardFooter>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {testimonial.company}
                </p>
              </CardFooter>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Emily Chen",
    title: "COO",
    company: "InnoTech Solutions",
    quote:
      "This platform has streamlined our project management process incredibly. We've cut meeting times by 40% and increased overall team efficiency.",
    avatar: "https://i.pravatar.cc/150?u=emilychen",
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO",
    company: "DataDrive Inc.",
    quote:
      "The AI-powered analytics have given us insights we never knew we needed. It's like having a data scientist working 24/7 for our company.",
    avatar: "https://i.pravatar.cc/150?u=marcusrodriguez",
  },
  {
    name: "Pamela Winchester",
    title: "Head of Product",
    company: "Nexus Innovations",
    quote:
      "The customization options are unparalleled. We've been able to tailor the software to fit our unique workflow, saving us from expensive custom development.",
    avatar: "https://i.pravatar.cc/150?u=aishapatel",
  },
];

export default Testimonials;
