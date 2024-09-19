"use client";

import { Link } from "@nextui-org/react";
import { IconMushroomFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.footer
      initial="initial"
      animate="animate"
      className="w-full border-t border-gray-200 bg-white px-8 dark:border-gray-800 dark:bg-gray-900"
    >
      <div>
        <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-2 md:py-12">
          <div className="flex flex-col gap-4">
            <motion.div {...fadeInUp}>
              <div className="mb-2 flex flex-row items-center gap-2">
                <IconMushroomFilled className="h-8 w-8 text-purple-700 dark:text-purple-500" />
                <p className="text-2xl font-bold text-purple-700 dark:text-purple-500">
                  NextBoilerplate Inc.
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Innovating for a better tomorrow
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <motion.nav {...fadeInUp} className="flex flex-col gap-2">
                <Link href="#" color="primary">
                  Products
                </Link>
                <Link href="#" color="primary">
                  Solutions
                </Link>
                <Link href="#" color="primary">
                  Resources
                </Link>
                <Link href="#" color="primary">
                  Pricing
                </Link>
              </motion.nav>
            </div>
            <div className="flex flex-col gap-4">
              <motion.nav {...fadeInUp} className="flex flex-col gap-2">
                <Link href="#" color="primary">
                  About Us
                </Link>
                <Link href="#" color="primary">
                  Careers
                </Link>
                <Link href="#" color="primary">
                  Press
                </Link>
                <Link href="#" color="primary">
                  Contact
                </Link>
              </motion.nav>
            </div>
          </div>
        </div>
        <motion.div {...fadeInUp}>
          <div className="grid grid-cols-1 gap-4 border-t border-gray-200 py-4 dark:border-gray-800 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © {currentYear} NextBoilerplate Inc. All rights reserved.
              </p>
            </div>
            <div className="order-1 flex flex-row gap-8 md:order-2 md:justify-end">
              <Link href="#" color="primary" size="sm">
                Terms of Service
              </Link>
              <Link href="#" color="primary" size="sm">
                Privacy Policy
              </Link>
              <Link href="#" color="primary" size="sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
