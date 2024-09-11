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
import {Card, CardContent, CardFooter, CardTitle, CardHeader, CardDescription} from "@/components/ui/card";

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
            <div className={""}>
                <div className={"container max-w-3xl h-[53rem] items-center justify-items-center justify-center"}>
                    <div className={"py-24 align-middle"}>
                        <form className={"my-6"} action={formAction}>
                            <Card>
                                <CardHeader>
                                    <CardTitle className={"text-lg font-semibold"}>Create a Community</CardTitle>
                                </CardHeader>
                                <CardContent className={"border-t-2 py-6 mb-6"}>
                                    <div className={"border-2 rounded-xl px-4 py-3 text-sm mb-6 flex items-center justify-center gap-3"}>
                                        <p className={""}>
                                            Creating a community is a prerequisite for creating messages. Before
                                            creating a community, make sure your class already has one. We ask that
                                            only
                                            the class delegate create a community for his/her class. By creating a
                                            community, you agree to our terms of use.
                                        </p>
                                    </div>
                                    <Label className={"text-lg font-semibold"}>Community Name </Label>
                                    <p className={"text-sm text-muted-foreground"}>
                                        The community name must not be in uppercase and cannot be modified!
                                    </p>
                                    <div className={"relative mt-4"}>
                                        <p className={"absolute left-0 w-8 flex items-center justify-center h-full text-muted-foreground"}> r/</p>
                                        <Input name={"name"} required={true} className={"pl-6"} min={5} maxLength={20}/>
                                    </div>
                                    {state.status === "error" && (
                                        <p className={"text-destructive mt-1 text-sm"}>{state.message}</p>)}
                                </CardContent>
                                <CardFooter className="border-t px-6 py-4 flex justify-end gap-2 bg-muted/40">
                                    <div className={"w-full flex gap-2 justify-end"}>
                                        <Link href={"/community"} className={cn(buttonVariants({variant: "outline"}))}>
                                            Cancel
                                        </Link>
                                        <SubmitButton text={"Create Community"}/>
                                    </div>
                                </CardFooter>
                            </Card>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
