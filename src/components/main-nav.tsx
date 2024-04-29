"use client"

import Link from "next/link"
import * as React from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {DraftingCompass, GraduationCap} from "lucide-react";
import {siteConfig} from "@/config/siteConfig";

export function MainNav() {
    const pathname = usePathname()

    return (
        <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
                <GraduationCap className="h-5 w-5" />
                <span className="hidden font-bold sm:inline-block">
                {siteConfig.name}
                </span>
            </Link>
            <nav className="flex items-center gap-4 text-sm font-semibold lg:gap-6">
                <Link href="/#about" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/#about" ? "text-foreground" : "text-foreground/60")}> About
                </Link>
                <Link href="/#faq" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/#faq" ? "text-foreground" : "text-foreground/60")}> FAQ
                </Link>
                <Link href="/community" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/community" ? "text-foreground" : "text-foreground/60")}> Community
                </Link>
                <Link href="/#contact" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/#contact" ? "text-foreground" : "text-foreground/60")}> Contact
                </Link>
            </nav>
        </div>
    )
}