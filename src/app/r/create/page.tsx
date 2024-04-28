"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {CreateCommunity} from "@/lib/actions";
import {useFormState} from "react-dom";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";
import {SubmitButton} from "@/components/submit-button";

const initialState = {
    message: "",
    status: "",
}

export default function CreateSubreddit() {
    const [state, formAction] = useFormState(CreateCommunity, initialState)
    const {toast} = useToast()

    useEffect(() => {
        if(state.status === "error") {
            toast({
                description: state.message,
                variant: "destructive",
            })
        }
    }, [state, toast])

    return (
        <>
            <div className={"max-w-[1000px] mx-auto flex flex-col"}>
                <h1 className={"text-3xl font-extrabold tracking-tight mt-12"}>Create Community</h1>
                <p className={"text-muted-foreground"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <form className={"my-6"} action={formAction}>
                    <Label className={"text-lg font-semibold"}>Name</Label>
                    <p className={"text-sm"}>Community names including capitalization cannot be changed!</p>
                    <div className={"relative mt-3"}>
                        <p className={"absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground"}> r/</p>
                        <Input name={"name"} required={true} className={"pl-6"} min={5} maxLength={20} />
                    </div>
                    {state.status === "error" && (<p className={"text-destructive mt-1 text-sm"}>{state.message}</p>)}

                    <div className={"mt-4 w-full flex gap-2"}>
                        <Link href={"/community"} className={cn(buttonVariants({variant: "destructive"}))}>
                            Cancel
                        </Link>
                        <SubmitButton text={"Create Community"} />
                    </div>
                </form>
            </div>
        </>
    )
}