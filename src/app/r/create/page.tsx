"use client"

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {buttonVariants} from "@/components/ui/button";
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
            <div className={"bg-muted/40"}>
                <div className={"container max-w-3xl h-[53rem] items-center justify-items-center justify-center"}>
                    <div className={"py-24 align-middle"}>
                        <h1 className={"text-3xl font-extrabold tracking-tight mb-4"}>
                            Créer une communauté (groupe)
                        </h1>
                        <p className={"text-muted-foreground max-sm:text-sm"}>
                            La création d{"'"}une communauté est nécessaire pour pouvoir créer des messages.
                            Avant de créer une communauté, assurez-vous que votre classe en a déjà une à votre
                            disposition. Nous demandons que seul le délégué de classe puisse créer une communauté
                            pour sa classe. En créant une communauté, vous acceptez nos {" "}
                            <Link href={"/user-agreement"}
                                  className={"underline underline-offset-4 font-semibold hover:text-orange-500"}>
                                conditions d{"'"}utilisation
                            </Link>
                            .
                        </p>
                        <form className={"my-6"} action={formAction}>
                            <Label className={"text-lg font-semibold"}>Non de la communauté </Label>
                            <p className={"text-sm"}>Les noms des communautés ne doivent pas être en majuscule ne
                                peuvent pas être modifiés !</p>
                            <div className={"relative mt-3"}>
                                <p className={"absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground"}> r/</p>
                                <Input name={"name"} required={true} className={"pl-6"} min={5} maxLength={20}/>
                            </div>
                            {state.status === "error" && (
                                <p className={"text-destructive mt-1 text-sm"}>{state.message}</p>)}

                            <div className={"mt-4 w-full flex gap-2"}>
                                <SubmitButton text={"Créer une communauté"}/>
                                <Link href={"/community"} className={cn(buttonVariants({variant: "outline"}))}>
                                    Annuler
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
