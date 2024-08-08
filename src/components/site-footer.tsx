import Link from "next/link";
import {siteConfig} from "@/config/siteConfig";
import {BiLogoFacebookCircle, BiLogoLinkedinSquare, BiLogoYoutube} from "react-icons/bi";
import React from "react";
import {GraduationCap} from "lucide-react";

export default function SiteFooter() {
    return (
        <>
            <footer className={"border-t-[3px] py-10 bg-background"}>
                <div className={"container max-w-6xl flex flex-col items-center justify-center h-full"}>
                    <section
                        className={"flex max-md:flex-col flex-row items-center justify-between gap-10 w-full px-3 mt-4"}>
                        <div>
                            <div className={"flex flex-col items-center justify-center gap-1.5 "}>
                                <GraduationCap className={"size-10"}/>
                                <p className={"font-bold"}>GBIT & CVLE</p>
                            </div>
                        </div>
                        <nav className={"flex items-center gap-6 max-md:text-center"}>
                            <Link
                                href={"/terms-of-use"}
                                className={"hover:text-primary hover:underline hover:underline-offset-4 text-balance"}
                            >
                                Terms of Use
                            </Link>
                            <Link href={""}
                                  className={"hover:text-primary hover:underline hover:underline-offset-4"}>
                                Legal Mentions
                            </Link>
                            <Link href={"/privacy-policy"}
                                  className={"hover:text-primary hover:underline hover:underline-offset-4"}>
                                Privacy Policy
                            </Link>
                        </nav>
                        <div className={"flex gap-3"}>
                            <Link href={siteConfig.links.linkedin} target={"_blank"}>
                                <BiLogoLinkedinSquare className={"size-8 hover:text-primary"}/>
                            </Link>
                            <Link href={siteConfig.links.facebook} target={"_blank"}>
                                <BiLogoFacebookCircle className={"size-8 hover:text-primary"}/>
                            </Link>
                            <Link href={siteConfig.links.youtube} target={"_blank"}>
                                <BiLogoYoutube className={"size-8 hover:text-primary"}/>
                            </Link>
                        </div>
                    </section>
                    <section className={"mt-5 border-t-2 border-orange-600 pt-4 w-full text-muted-foreground"}>
                        <p className={"w-full text-center"}>Built by {" "}
                            <Link
                                href={"https://github.com/MrInspection"}
                                className={"underline underline-offset-4 font-medium"}>Moussa
                            </Link>
                            . The source code is available on <a
                            href={"https://github.com/MrInspection/pulabs-gbit"}
                            target={"_blank"}
                            rel="noreferrer"
                            className={"font-medium underline underline-offset-4"}
                        >
                            GitHub
                        </a>
                            .
                        </p>
                    </section>
                </div>
            </footer>
        </>
    )
}
