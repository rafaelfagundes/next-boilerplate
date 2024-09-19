import Link from "next/link";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { getServerSession } from "next-auth";

// Add this import
import Title from "@/components/ui/title";
import options from "@/config/auth";
import requireAuth from "@/utils/require-auth";

export default async function Profile() {
  await requireAuth();
  const session = await getServerSession(options);

  const user = {
    ...session?.user,
    plan: "7-day Trial",
    billingInfo: {
      cardType: "Visa",
      lastFour: "1234",
      expiryDate: "12/2024",
    },
  };

  return (
    <div className="container mx-auto mt-4 p-4 sm:mt-16">
      <Card className="mx-auto max-w-2xl" shadow="none">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="h-20 w-20" src={user?.image || undefined}></Avatar>
          <div>
            <Title>{user?.name}</Title>
            <p>{user?.email}</p>
          </div>
        </CardHeader>
        <CardBody className="space-y-8">
          <div>
            <p className="text-sm font-medium">Current Plan</p>
            <p className="text-lg font-semibold">{user?.plan}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Billing Information</p>
            <p className="text-lg font-semibold">
              {user?.billingInfo.cardType} **** {user?.billingInfo.lastFour}
            </p>
            <p className="text-muted-foreground text-sm">
              Expires: {user?.billingInfo.expiryDate}
            </p>
            <Link href="#" className="text-sm text-primary hover:underline">
              Change billing information
            </Link>
          </div>
        </CardBody>
        <CardFooter className="mt-4 flex justify-between sm:mt-8">
          <Button variant="bordered">Edit Profile</Button>
          <Button color="primary">Upgrade Plan</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
