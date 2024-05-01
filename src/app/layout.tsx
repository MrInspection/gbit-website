import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import {SiteHeader} from "@/components/site-header";
import {Toaster} from "@/components/ui/toaster";
import SiteFooter from "@/components/site-footer";
import {Broadcast} from "@/components/projectultron-broadcast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GBIT - ProjectUltron Labs",
  description: "©️ ProjectUltron Argumentum 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <Broadcast />
        <SiteHeader />
        {children}
        <Toaster />
        <SiteFooter />
        </body>
        </html>
  );
}
