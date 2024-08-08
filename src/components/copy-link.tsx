"use client"

import {Share2} from "lucide-react";
import {useToast} from "@/components/ui/use-toast";

export function CopyLink({id}: {id: string}) {

    const { toast } = useToast()

    async function CopyToClipboard() {
        await navigator.clipboard.writeText(`${location.origin}/post/${id}`)
        toast({
            title: "Le lien a été copié dans votre presse-papiers.",
        })
    }

    return(
        <>
            <button className={"flex gap-1.5 items-center group"} onClick={CopyToClipboard}>
                <Share2 className={"h-4 w-4 text-muted-foreground group-hover:text-primary"} />
                <p className={"text-muted-foreground text-sm font-medium group-hover:text-primary"}>Share</p>
            </button>
        </>
    )
}
