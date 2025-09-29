"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavItems from "@/components/NavItems";
import { signOut } from "@/lib/actions/auth.actions";

const UserDropdown = ({ user }: { user: User }) => {
  const router = useRouter();

  const handleSignOut = async () => {
    // Implement sign-out logic here (e.g., clear auth tokens, update state)
    // After signing out, redirect to the home page
    await signOut();
    router.push("/sign-in");
  };

  // const user = { name: "John Doe", email: "contact@cwsmastery.com" }; // Replace with actual user data

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex items-center gap-3 text-gray-4 hover:text-yellow-500"
        >
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://img.freepik.com/premium-vector/cws-logo-cws-letter-cws-letter-logo-design-initials-cws-logo-linked-with-circle-uppercase-monogram-logo-cws-typography-technology-business-real-estate-brand_229120-62631.jpg" />
            <AvatarFallback className="text-sm font-bold text-yellow-900 bg-yellow-500">
              {user.name[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-col items-start hidden md:flex">
            <span className="text-base font-medium text-gray-400">
              {user.name}
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-400">
        <DropdownMenuLabel>
          <div className="relative flex items-center gap-3 py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://img.freepik.com/premium-vector/cws-logo-cws-letter-cws-letter-logo-design-initials-cws-logo-linked-with-circle-uppercase-monogram-logo-cws-typography-technology-business-real-estate-brand_229120-62631.jpg" />
              <AvatarFallback className="text-sm font-bold text-yellow-900 bg-yellow-500">
                {user.name[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-base font-medium text-gray-400">
                {user.name}
              </span>
              <span className="text-sm text-gray-500">{user.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem
          onClick={handleSignOut}
          className="font-medium text-gray-100 transition-colors cursor-pointer text-md focus:bg-transparent focus:text-yellow-500"
        >
          <LogOut className="hidden w-4 h-4 mr-2 sm:block" />
          Logout
        </DropdownMenuItem>
        <DropdownMenuSeparator className="hidden bg-gray-600 sm:block" />
        <nav className="sm:hidden">
          <NavItems />
        </nav>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserDropdown;
