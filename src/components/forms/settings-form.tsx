"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button, buttonVariants} from "@/components/ui/button";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {UpdateUsername} from "@/lib/actions";
import {SubmitButton} from "@/components/submit-button";
import {useFormState} from "react-dom";
import {useEffect} from "react";
import {toast} from "@/components/ui/use-toast";
import {TriangleAlert} from "lucide-react";

const initialState = {
    message: "",
    status: ""
}

export function SettingsForm({username} : {username: string | null | undefined}) {
    const [state, formAction] = useFormState(UpdateUsername, initialState);

    useEffect(() => {
        if(state?.status === 'green') {
            toast({
                title: "Profile Update",
                description: state.message
            })
        } else if (state?.status === 'error') {
            toast({
                variant: "destructive",
                description: state.message
            })
        }
    }, [state, toast])

    return (
        <>
            <form action={formAction}>
                <Label className={"text-lg"}>Username</Label>
                <Input
                    defaultValue={username ?? undefined}
                    name={"username"}
                    required={true}
                    className={"my-2"}
                    min={2} maxLength={20}
                />

                {state?.status === 'error' && (<p className={"text-destructive mt-1 text-sm"}>{state.message}</p>)}
                <div className={"flex gap-2 justify-end"}>
                    <Link href={"/community"} className={cn(buttonVariants({variant: "destructive"}))}>
                        Cancel
                    </Link>
                    <SubmitButton text={"Change Username"} />
                </div>
            </form>
        </>
    )
}