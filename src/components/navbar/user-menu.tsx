"use client";

import { useRouter } from "next/navigation";

import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { IconUserSquareRounded } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";

export default function UserMenu() {
  const router = useRouter();
  const { data, status } = useSession();

  if (status === "unauthenticated" || status === "loading") {
    return (
      <Button
        size="md"
        variant="light"
        color="primary"
        onClick={() => router.push("/sign-up")}
      >
        Sign Up
      </Button>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data?.user?.image}
            fallback={<IconUserSquareRounded className="h-5 w-5" />}
            src={data?.user?.image || undefined}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            {data?.user?.name && (
              <p className="font-semibold">{data?.user?.name}</p>
            )}
            {data?.user?.email && (
              <p className="font-light text-gray-400 dark:text-gray-500">
                {data?.user?.email}
              </p>
            )}
          </DropdownItem>
          <DropdownItem key="profile" onClick={() => router.push("/profile")}>
            Profile
          </DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
