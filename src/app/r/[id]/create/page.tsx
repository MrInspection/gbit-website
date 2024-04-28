"use client"

import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {ChevronLeft, Scale} from "lucide-react";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {TextEditor} from "@/components/text-editor";
import {CreatePostButton, SubmitButton} from "@/components/submit-button";
import {useState} from "react";
import {CreatePost} from "@/lib/actions";
import {JSONContent} from "@tiptap/react";


const Rules= [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet consectetur"
    },
    {
        id: 2,
        text: "adipiscing elit, sed do euismod random bullshit"
    }

]


export default function CreatePostRoute({params} : {params: {id: string}}) {
    const [json, setJson] = useState<null | JSONContent>(null)
    const createPostReddit = CreatePost.bind(null, {jsonContent: json})

    return(
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className={"container max-w-7xl mt-8"}>
                    <div className={"flex max-sm:flex-col gap-x-6 max-sm:gap-y-6 mt-4 mb-40"}>
                        <div className={"md:w-[70%] flex flex-col gap-y-5"}>

                            <Link
                                href={`/r/${params.id}`}
                                className={cn(buttonVariants({variant: "outline"}), "max-w-fit")}
                            >
                                <ChevronLeft className={"h-4 w-4 mr-2"}/> Back to
                                <span className={"font-medium ml-1"}> r/{params.id}</span>
                            </Link>
                            <Card className={"mt-2"}>
                                <form action={createPostReddit}>
                                    <input type={"hidden"} name={"subName"} value={params.id}/>
                                    <CardHeader>
                                        <CardTitle>Create a new post</CardTitle>
                                        <CardDescription>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className={"space-y-1"}>
                                            <Label>Post Title</Label>
                                            <Input name={"title"} placeholder={"Give a title to your post"}
                                                   required={true}/>
                                        </div>
                                        <div className={"mt-4 space-y-1.5"}>
                                            <TextEditor setJson={setJson} json={json}/>
                                        </div>
                                    </CardContent>
                                    <CardFooter className={"-mt-2"}>
                                        <CreatePostButton/>
                                    </CardFooter>
                                </form>
                            </Card>
                        </div>
                        <div className={"md:w-[30%]"}>
                            <Card>
                                <CardHeader className="flex flex-row items-start bg-muted/50 rounded-t-xl">
                                    <CardTitle className={"flex"}>
                                        <Scale className={"h-4 w-4 mr-2"}/> Post Guidelines
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className={"mt-4"}>
                                        {Rules.map((item) => (
                                            <div key={item.id}>
                                                <p className={"text-sm"}>
                                                    #{item.id}. {item.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}