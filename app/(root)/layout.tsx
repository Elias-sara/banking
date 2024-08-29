import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
// RootLayout component that sets up the main layout of the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // The child components to be rendered inside this layout
}>) {
  // Simulating a logged-in user with example data
  const loggedIn = { firstName: "Elias", lastName: "JSM" };

  return (
    <main className="flex h-screen w-full font-inter">
      {/* Render the Sidebar component and pass the logged-in user data as a prop */}
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>

      {/* Render the child components inside the main container */}
    </main>
  );
}
