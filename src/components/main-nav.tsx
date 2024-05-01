"use client"

import Link from "next/link"
import * as React from "react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import {GraduationCap} from "lucide-react";
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
                <Link href="/" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/" ? "text-primary" : "text-foreground/60")}> Accueil
                </Link>
                <Link href="/community" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/community" ? "text-primary" : "text-foreground/60")}> Espace Communautaire
                </Link>
                <Link href="/#contact" className={cn("transition-colors hover:text-foreground/80",
                    pathname === "/#contact" ? "text-primary" : "text-foreground/60")}> Contact
                </Link>
            </nav>
        </div>
    )
}