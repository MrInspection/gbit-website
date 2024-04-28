

import * as React from "react";
import {Button} from "@/components/ui/button";
import {MainNav} from "@/components/main-nav";
import {MobileNav} from "@/components/mobile-nav";
import {LoginLink, RegisterLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "@/components/user-nav";

export async function SiteHeader() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background
             backdrop-blur supports-[backdrop-filter]:bg-background">
                <div className="container flex h-14 max-w-screen-2xl items-center">
                    <MainNav/>
                    <MobileNav/>
                    <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                        </div>
                        <nav className="flex items-center gap-2">

                            {user ? (
                                // @ts-ignore
                                <UserNav />
                            ) : (
                                <div className={"space-x-2"}>
                                    <Button size={"sm"} variant={"outline"} asChild={true}>
                                        <LoginLink>Login</LoginLink>
                                    </Button>
                                    <Button size={"sm"} variant={"default"} asChild={true}>
                                        <RegisterLink>Sign Up</RegisterLink>
                                    </Button>
                                </div>
                            )}
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}