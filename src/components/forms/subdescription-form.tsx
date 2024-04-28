"use client"

import {UpdateSubDescription} from "@/lib/actions";
import {Textarea} from "@/components/ui/textarea";
import {SaveButton} from "@/components/submit-button";
import {useFormState} from "react-dom";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";

interface iAppProps {
    subName: string,
    description: string | null | undefined,
}

const initialState = {
    message: "",
    status: "",
}

export function SubDescriptionForm({description, subName} : iAppProps) {
    const [state, formAction] = useFormState(UpdateSubDescription, initialState)
    const {toast} = useToast()

    useEffect(() => {
        if(state.status === "green") {
            toast({
                title: "Description updated",
                description: state.message,
            })
        } else if(state.status === "error") {
            toast({
                description: state.message,
                variant: "destructive",
            })
        }
    }, [state, toast])

    return (
        <>
            <form action={formAction}>
                <input type={"hidden"} name={"subName"} value={subName}/>
                <Textarea
                    className={"mb-2.5 resize-none min-h-20 h-40 focus:ring-purple-400 focus:ring-offset-2 focus:ring-2"}
                    placeholder={"Description of your community"}
                    maxLength={150} name={"description"}
                    defaultValue={description ?? undefined}
                />
                <SaveButton/>
            </form>
        </>
    )
}