import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import Image from "next/image"; // Importing Image component from Next.js for optimized image loading
// import { useRouter } from "next/router";
// RootLayout component that sets up the main layout of the application
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode; // The child components to be rendered inside this layout
}>) {
  // const router = useRouter();
  // Simulating a logged-in user with example data
  const loggedIn = await getLoggedInUser();
  if (!loggedIn) redirect("/sign-in");

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
