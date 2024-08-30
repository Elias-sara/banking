"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Importing utility function for conditionally applying class names
import Footer from "./Footer";
const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            {" "}
            {/* Link to home with logo and title */}
            <Image
              src="/icons/logo.svg" // Path to the logo image
              width={34} // Width of the logo
              height={34} // Height of the logo
              alt="Horizon logo" // Alt text for the logo image
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>{" "}
            {/* Sidebar title */}
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h*full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  // Mapping through sidebarLinks to create navigation items
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`); // Check if the current path matches or starts with the link route
                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route} // Destination route for the link
                        key={item.label} // Unique key for each link item
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })} // Conditionally apply active background class
                      >
                        {" "}
                        {/* Container for the link image */}
                        <Image
                          src={item.imgURL} // Path to the link icon image
                          alt={item.label} // Alt text for the link icon
                          width={20}
                          height={20}
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })} // Conditionally apply image styling based on active state
                        />
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive, // Conditionally apply white text color when active
                          })}
                        >
                          {item.label} {/* Label text for the link */}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            <Footer user={user} type="mobile" />
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
