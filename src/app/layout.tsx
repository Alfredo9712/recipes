import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { auth } from "../../auth";

import AuthProvider from "@/components/providers/AuthProvider";
import Navbar from "@/components/ui/navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  const { user } = session || {};

  const { name, image } = user || {};
  console.log(image);
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className={cn(
            "container bg-[#202124] text-[#ecebe9]",
            nunito.className
          )}
        >
          <Navbar {...{ name, image }} />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
