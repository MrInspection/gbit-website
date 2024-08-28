import {GitHubLogoIcon} from "@radix-ui/react-icons";
import Link from "next/link";

export function GithubIndicator() {
    return (
        <>
            <Link href={"https://github.com/MrInspection/gbit-website"} target={"_blank"}
                className={"fixed bottom-6 right-6 z-50 size-12 border flex items-center justify-center rounded-full bg-background hover:bg-muted transition"}>
                <GitHubLogoIcon className={"size-6"}/>
            </Link>
        </>
    )
}
