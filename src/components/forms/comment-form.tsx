"use client"

import {Label} from "@/components/ui/label";
import {Textarea} from "@/components/ui/textarea";
import {CreateCommentButton, SubmitButton} from "@/components/submit-button";
import {CreateComment} from "@/lib/actions";
import {useRef} from "react";

interface iAppProps {
    postId: string,
}

export function CommentForm({postId}: iAppProps) {
    const ref = useRef<HTMLFormElement>(null)
    return (
        <>
            <form className={"my-2"} action={async (formData) => {
                await CreateComment(formData)
                ref.current?.reset()
            }} ref={ref}>
                <input type={"hidden"} name={"postId"} value={postId}/>
                <div className={"grid gap-3"}>
                    <Label className={"text-md"}>Rédiger un commentaire</Label>
                    <Textarea
                        className={"mb-2.5 resize-none min-h-20 h-40 w-full"}
                        placeholder={"Ajouter un commentaire"}
                        name={"comment"}
                    />
                </div>
                <CreateCommentButton />
            </form>
        </>
    )
}