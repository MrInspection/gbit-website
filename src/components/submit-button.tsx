"use client"

import {Button} from "@/components/ui/button";
import { useFormStatus} from "react-dom"
import {ArrowBigDown, ArrowBigUp, Loader2, Send} from "lucide-react";

export function SubmitButton({text} : {text : string}) {
    const {pending} = useFormStatus()
    return (
        <>
            {pending ? (
                <Button disabled={true}>
                    <Loader2 className={"h-4 w-4 mr-2 animate-spin"} /> Please wait...
                </Button>
                ) : (
                <Button type={"submit"}>{text}</Button>
            )}
        </>
    )
}

export function SaveButton() {
    const {pending} = useFormStatus()
    return (
        <>
            {pending ? (
                <Button className={"w-full"} disabled={true} size={"sm"} variant={"outline"}>
                    <Loader2 className={"h-4 w-4 mr-2 animate-spin"} /> Please wait...
                </Button>
            ) : (
                <Button size={"sm"} className={"w-full"} type={"submit"} variant={"outline"}>
                    Sauvegarder la description
                </Button>
            )}
        </>
    )
}

export function CreatePostButton() {
    const {pending} = useFormStatus()
    return (
        <>
            {pending ? (
                <Button className={"w-full"} disabled={true} >
                    <Loader2 className={"h-4 w-4 mr-2 animate-spin"} /> Please wait...
                </Button>
            ) : (
                <Button className={"w-full"} type={"submit"}>
                    <Send className={"h-4 w-4 mr-2"} />
                    Publier
                </Button>
            )}
        </>
    )
}

export function CreateCommentButton() {
    const {pending} = useFormStatus()
    return (
        <>
            {pending ? (
                <Button className={"w-full"} disabled={true} >
                    <Loader2 className={"h-4 w-4 mr-2 animate-spin"} /> Please wait...
                </Button>
            ) : (
                <Button className={"w-full"} type={"submit"}>
                    <Send className={"h-4 w-4 mr-2"} />
                    Commenter
                </Button>
            )}
        </>
    )
}



export function UpVote() {
    const {pending} = useFormStatus()
    return (
        <>
            {pending ? (
                <>
                    <button className={"py-1 px-0.5 group"} type={"submit"} disabled={true}>
                        <Loader2 className={"h-5 w-5 text-primary animate-spin"}/>
                    </button>
                </>
            ) : (
                <>
                    <button className={"py-1 px-0.5 group"} type={"submit"}>
                        <ArrowBigUp className={"h-5 w-5 text-primary"}/>
                    </button>
                </>
                )}
        </>
    )
}

export function DownVote() {
    const {pending} = useFormStatus()
    return (
        <>
            {pending ? (
                <>
                    <button className={"py-1 px-0.5 group"} type={"submit"} disabled={true}>
                        <Loader2 className={"h-5 w-5 text-primary animate-spin"}/>
                    </button>
                </>
            ) : (
                <>
                    <button className={"py-1 px-0.5 group"} type={"submit"}>
                        <ArrowBigDown className={"h-5 w-5 text-primary"}/>
                    </button>
                </>
            )}
        </>
    )
}