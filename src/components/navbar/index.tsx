"use client";

import { useRouter } from "next/navigation";
import React from "react";

import {
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/react";

import { Logo } from "../logo";
import { ThemeSwitcher } from "./theme-switcher";
import UserMenu from "./user-menu";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const menuItems = [
    {
      name: "Features",
      href: "/features",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
    {
      name: "Support",
      href: "/support",
    },
  ];

  return (
    <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand
          onClick={() => router.push("/")}
          className="cursor-pointer"
        >
          <Logo />
          <p className="ml-1 font-bold text-inherit text-purple-700 dark:text-purple-500">
            NextBoilerplate
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden gap-8 sm:flex md:gap-16"
        justify="center"
      >
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              color="foreground"
              href={item.href}
              className="text-sm hover:font-medium hover:underline"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <ThemeSwitcher className="hidden sm:flex"></ThemeSwitcher>
        <NavbarItem>
          <UserMenu></UserMenu>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              className="w-full"
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem className="mt-6">
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
}
