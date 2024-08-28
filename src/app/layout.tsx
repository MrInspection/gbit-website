import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "../styles/globals.css";
import {SiteHeader} from "@/components/site-header";
import {Toaster} from "@/components/ui/toaster";
import SiteFooter from "@/components/site-footer";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "GBIT Website • Spectron Labs",
    description: "A school project aiming to create a website for the GBIT organization.",
    openGraph: {
        images: [
            {
                url: "/spectronlabs.png",
                width: 1200,
                height: 630,
                alt: "Moussax • Website",
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>
        <SiteHeader/>
        {children}
        <Toaster/>
        <SiteFooter/>
        </body>
        </html>
    );
}
