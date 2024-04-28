import {Card} from "@/components/ui/card";
import {MessageCircle, Users} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {CopyLink} from "@/components/copy-link";
import {HandleVote} from "@/lib/actions";
import {DownVote, UpVote} from "@/components/submit-button";
import {RenderToJson} from "@/components/render-to-json";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface iAppProps {
    title: string;
    jsonContent: any;
    id: string;
    createdAt: Date;
    subName: string;
    userName: string;
    voteCount: number;
    comments: number;
}

export function PostCard({title, jsonContent, id, subName, userName, voteCount, createdAt, comments} : iAppProps) {
    return (
        <>
            <Card className={"flex relative overflow-hidden"}>
                <div className={"p-9"}>
                    <div className={"flex items-center"}>
                        <div className={"flex gap-2.5 items-center"}>
                            <Avatar>
                                <AvatarImage src="/placeholder-avatar.png"/>
                                <AvatarFallback>A</AvatarFallback>
                            </Avatar>
                            <div className={"grid"}>
                                <p className={"text-sm font-medium text-primary"}>{userName}</p>
                                <p className={"text-muted-foreground text-xs font-medium"}> Le
                                    {" " + new Date(createdAt as Date).toLocaleDateString('fr-fr', {
                                        year: "numeric",
                                        month: "long",
                                        day: "2-digit",
                                        hour: "numeric",
                                        minute: "numeric"
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-4"}>
                        <Link href={`/post/${id}`}>
                            <h1 className={"mb-2 text-xl font-bold"}>{title}</h1>
                            <p className={"font-medium max-sm:text-sm"}><RenderToJson data={jsonContent}/></p>
                        </Link>
                    </div>
                    <div className={"mt-5 -mb-1 flex space-x-6 items-center"}>
                        <div
                            className={"flex space-x-1.5 items-center justify-items-center bg-muted px-2 py-1 rounded-xl"}>
                            <form action={HandleVote}>
                                <input type={"hidden"} name={"voteDirection"} value={"UP"}/>
                                <input type={"hidden"} name={"postID"} value={id}/>
                                <UpVote/>
                            </form>
                            <p className={"text-muted-foreground text-sm font-medium"}>
                                {voteCount} Votes
                            </p>
                            <form action={HandleVote}>
                                <input type={"hidden"} name={"voteDirection"} value={"DOWN"}/>
                                <input type={"hidden"} name={"postID"} value={id}/>
                                <DownVote />
                            </form>
                        </div>
                        <div className={"flex gap-1.5 items-center"}>
                            <MessageCircle
                                className={"h-4 w-4 text-muted-foreground"}/>
                            <p className={"text-muted-foreground text-sm font-medium"}>
                                {comments} <span className={"max-sm:hidden"}>Commentaires</span>
                            </p>
                        </div>
                        <div className={"max-sm:hidden"}>
                            <CopyLink id={id}/>
                        </div>
                        <Link href={`/r/${subName}`} className={"max-sm:hidden"}>
                            <div className={"flex gap-1.5 items-center group"}>
                                <Users className={"h-4 w-4 text-muted-foreground group-hover:text-primary"}/>
                                <p className={"text-muted-foreground text-sm font-medium group-hover:text-primary"}>r/{subName}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </Card>
        </>
    )
}