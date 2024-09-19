"use client";

import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  Button,
  Input,
  Textarea,
} from "@nextui-org/react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconSend,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import Subtitle from "@/components/ui/subtitle";
import Title from "@/components/ui/title";

const faqs = [
  {
    question: "How do I reset my password?",
    answer:
      "Click 'Forgot Password' on the login page and follow the email instructions. It's quick and easy!",
  },
  {
    question: "Can I upgrade my account?",
    answer:
      "Visit your account settings and click on the 'Upgrade' button. Follow the simple upgrade process to enhance your experience.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and bank transfers. Choose the option that's most convenient for you!",
  },
  {
    question: "How long does shipping usually take?",
    answer:
      "Shipping times vary, but typically domestic orders arrive in 3-5 business days, while international orders may take 7-14 business days.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Yes, we have a 30-day refund policy. If you're not satisfied, let us know and we'll make it right!",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, we'll send you a tracking number via email. Use this to follow your package's journey to your doorstep!",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "We sure do! We ship to most countries worldwide. Shipping costs and times may vary depending on the destination.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "To cancel, log into your account, go to 'Subscriptions', and click 'Cancel Subscription'. We'll miss you, but we understand!",
  },
  {
    question: "What's your return policy?",
    answer:
      "We accept returns within 14 days of delivery. Items should be unused and in original packaging. Check our returns page for more details.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our friendly support team through the contact form on this page, or by emailing support@example.com. We're here to help!",
  },
];

export default function Support() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto bg-background px-4 py-16">
      <motion.span
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title className="text-center">Support Center</Title>
      </motion.span>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Contact Form and Social Icons */}
        <motion.div
          className="bg-card rounded-lg p-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Subtitle className="mb-6 text-start">Get in Touch</Subtitle>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Textarea
              label="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <Button
              type="submit"
              color="primary"
              size="lg"
              startContent={<IconSend size={24} />}
            >
              Send Message
            </Button>
          </form>

          {/* Social Icons */}
          <div className="mt-8 pt-2">
            <Subtitle className="mb-4 text-start">Connect With Us</Subtitle>
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandFacebook size={32} stroke={1.2} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandTwitter size={32} stroke={1.2} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandInstagram size={32} stroke={1.2} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2 }}
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <IconBrandLinkedin size={32} stroke={1.2} />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div
          className="bg-card rounded-lg p-8"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Subtitle className="mb-6 text-start">
            Frequently Asked Questions
          </Subtitle>
          <Accordion
            variant="bordered"
            isCompact
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  height: "auto",
                  transition: {
                    height: {
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      duration: 1,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 1,
                    },
                  },
                },
                exit: {
                  y: -10,
                  opacity: 0,
                  height: 0,
                  transition: {
                    height: {
                      easings: "ease",
                      duration: 0.25,
                    },
                    opacity: {
                      easings: "ease",
                      duration: 0.3,
                    },
                  },
                },
              },
            }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                title={faq.question}
              >
                <p className="text-muted-foreground py-4">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
