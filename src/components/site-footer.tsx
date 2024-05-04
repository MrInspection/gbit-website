import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {siteConfig} from "@/config/siteConfig";
import {Button} from "@/components/ui/button";
import {BiLogoFacebook, BiLogoFlickr, BiLogoLinkedin, BiLogoYoutube} from "react-icons/bi";
import React from "react";

export default function SiteFooter() {
    return (
        <>
            <footer className="py-2 mt-10 mb-10 md:px-8 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <div className={"text-balance text-center text-sm leading-loose" +
                        " text-muted-foreground md:text-left"}>
                        <p className={"font-bold text-xl"}>{siteConfig.name}</p>
                        <p className={"-mt-0.5 text-sm"}>Avenue Gaston Berger, 59016 Lille Cedex</p>

                        <div className={"mt-3"}>
                            <div className="my-6 sm:my-0 flex h-5 items-center space-x-4 text-sm">
                                <Link href={"/user-agreement"} className={"hover:underline"}>User Agreement</Link>
                                <Separator orientation="vertical"/>
                                <Link href={"/privacy-policy"} className={"hover:underline"}>Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                    <div className={"text-balance text-center text-sm leading-loose" +
                        " text-muted-foreground md:text-left"}>
                        <div className={"grid gap-2 grid-cols-4"}>
                            <Link href={siteConfig.links.facebook}>
                                <Button variant={"secondary"} size="icon">
                                    <BiLogoFacebook className="h-4 w-4"/>
                                </Button>
                            </Link>
                            <Link href={siteConfig.links.youtube}>
                                <Button variant="secondary" size="icon">
                                    <BiLogoYoutube className="h-4 w-4"/>
                                </Button>
                            </Link>
                            <Link href={siteConfig.links.linkedin}>
                                <Button variant="secondary" size="icon">
                                    <BiLogoLinkedin className="h-4 w-4"/>
                                </Button>
                            </Link>
                            <Link href={siteConfig.links.flickr}>
                                <Button variant="secondary" size="icon">
                                    <BiLogoFlickr className="h-4 w-4"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}