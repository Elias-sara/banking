"use client"; // Ensures that this component is rendered on the client side

import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
import { sidebarLinks } from "@/constants"; // Importing sidebarLinks from constants file
import { cn } from "@/lib/utils"; // Importing utility function for conditionally applying class names
import { usePathname } from "next/navigation"; // Importing hook to get the current pathname
import Footer from "./Footer";

const Sidebar = ({ user }: SiderbarProps) => {
  // Sidebar component accepting user as a prop
  const pathname = usePathname(); // Hook to get the current URL path

  return (
    <section className="sidebar">
      {" "}
      {/* Sidebar section container */}
      <nav className="flex flex-col gap-4">
        {" "}
        {/* Navigation container with vertical layout and spacing */}
        <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
          {" "}
          {/* Link to home with logo and title */}
          <Image
            src="/icons/logo.svg" // Path to the logo image
            width={34} // Width of the logo
            height={34} // Height of the logo
            alt="Horizon logo" // Alt text for the logo image
            className="size-[24px] max-xl:size-14" // Conditional size classes for different screen sizes
          />
          <h1 className="sidebar-logo">Horizon</h1> {/* Sidebar title */}
        </Link>
        {sidebarLinks.map((item) => {
          // Mapping through sidebarLinks to create navigation items
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`); // Check if the current path matches or starts with the link route
          return (
            <Link
              href={item.route} // Destination route for the link
              key={item.label} // Unique key for each link item
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })} // Conditionally apply active background class
            >
              <div className="relative size-6">
                {" "}
                {/* Container for the link image */}
                <Image
                  src={item.imgURL} // Path to the link icon image
                  alt={item.label} // Alt text for the link icon
                  fill // Make the image fill its container
                  className={cn({ "brightness-[3] invert-0": isActive })} // Conditionally apply image styling based on active state
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "text-white": isActive, // Conditionally apply white text color when active
                })}
              >
                {item.label} {/* Label text for the link */}
              </p>
            </Link>
          );
        })}
        USER
      </nav>
      <Footer user={user}/>
    </section>
  );
};

export default Sidebar; // Exporting the Sidebar component for use in other parts of the application
