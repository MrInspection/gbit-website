import prisma from "@/lib/db";
import {notFound} from "next/navigation";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import {Button, buttonVariants} from "@/components/ui/button";
import {HandleVote} from "@/lib/actions";
import {DownVote, UpVote} from "@/components/submit-button";
import {ChevronLeft, MessageCircle, Share2} from "lucide-react";
import {CopyLink} from "@/components/copy-link";
import {RenderToJson} from "@/components/render-to-json";
import {CommentForm} from "@/components/forms/comment-form";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"


async function getData(id: string) {
    const data = await prisma.post.findUnique({
        where: {id: id},
        select: {
            createAt: true,
            subName: true,
            title: true,
            textContent: true,
            id: true,
            Subreddit: {
                select: {
                    name: true,
                    createdAt: true,
                    description: true,
                }
            },
            Vote: {
                select: {
                    voteType: true,
                }
            },
            User: {
                select: {
                    userName: true,
                    imageUrl: true,
                }
            },
            Comment: {
                orderBy: {
                    createdAt: "desc"
                },
                select: {
                    id: true,
                    text: true,
                    createdAt: true,
                    User: {
                        select: {
                            imageUrl: true,
                            userName: true,
                        }
                    }
                }
            }
        }
    })

    if (!data) {
        return notFound()
    }
    return data
}

export default async function PostPage({params}: { params: { id: string } }) {
    const data = await getData(params.id)
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className={"container max-w-7xl mt-10"}>
                    <div className={"flex gap-3 items-center"}>
                        <Link href={`/r/${data.subName}`}
                              className={cn(buttonVariants({variant: "outline", size: "default"}))}>
                            <ChevronLeft className={"h-4 w-4 mr-2"}/> Retour
                        </Link>
                    </div>

                    <div className={"flex max-sm:flex-col gap-x-6 max-sm:gap-y-6 mt-4 mb-40"}>
                        <div className={"md:w-[70%] flex flex-col gap-y-6"}>
                            <Card>
                                <div className={"p-9"}>
                                    <div className={"flex items-center"}>
                                        <div className={"flex gap-2.5 items-center"}>
                                            <Avatar>
                                                <AvatarImage src="/placeholder-avatar.png"/>
                                                <AvatarFallback>A</AvatarFallback>
                                            </Avatar>
                                            <div className={"grid"}>
                                                <p className={"text-sm font-medium text-primary"}>{data.User?.userName}</p>
                                                <p className={"text-muted-foreground text-xs font-medium"}> Le
                                                    {" " + new Date(data?.createAt as Date).toLocaleDateString('fr-fr', {
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
                                    <div className={"mt-4 max-md:text-balance"}>
                                        <h1 className={"mb-2 text-xl font-bold"}>{data.title}</h1>
                                        <p className={"font-medium max-sm:text-sm"}><RenderToJson
                                            data={data.textContent}/></p>
                                    </div>
                                    <div className={"mt-5 flex space-x-6 items-center"}>
                                        <div
                                            className={"flex space-x-1.5 items-center justify-items-center bg-muted px-2 py-1 rounded-xl"}>
                                            <form action={HandleVote}>
                                                <input type={"hidden"} name={"voteDirection"} value={"UP"}/>
                                                <input type={"hidden"} name={"postID"} value={data.id}/>
                                                <UpVote/>
                                            </form>
                                            <p className={"text-muted-foreground text-sm font-medium"}>
                                                {data.Vote.reduce((acc, vote) => {
                                                    if (vote.voteType === "UP") return acc + 1;
                                                    if (vote.voteType === "DOWN") return acc - 1;
                                                    return acc
                                                }, 0)} Votes
                                            </p>
                                            <form action={HandleVote}>
                                                <input type={"hidden"} name={"voteDirection"} value={"DOWN"}/>
                                                <input type={"hidden"} name={"postID"} value={data.id}/>
                                                <DownVote/>
                                            </form>
                                        </div>
                                        <div className={"flex gap-1.5 items-center"}>
                                            <MessageCircle
                                                className={"h-4 w-4 text-muted-foreground"}/>
                                            <p className={"text-muted-foreground text-sm font-medium"}>
                                                {data.Comment?.length} <span className={"max-sm:hidden"}>Commentaires</span>
                                            </p>
                                        </div>
                                        <div className={"max-sm:hidden"}>
                                            <CopyLink id={params.id}/>
                                        </div>
                                    </div>
                                    <div className={"mt-5"}>
                                        <Separator className={"my-8"}/>
                                        <CommentForm postId={params.id}/>
                                        <Separator className={"my-8"}/>
                                        <div className={"flex mb-4 flex-col space-y-9"}>
                                            {data.Comment.map((item) => (
                                                <>
                                                    <div className={"flex gap-3 items-start"} key={item.id}>
                                                        <Avatar>
                                                            <AvatarImage
                                                                src={data.User?.imageUrl ?? "/placeholder-avatar.png"}/>
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                        <div className={"grid"}>
                                                            <p className={"text-sm font-medium text-primary"}>{item.User?.userName}</p>
                                                            <p className={"text-muted-foreground text-xs font-medium"}> Le
                                                                {" " + new Date(item?.createdAt as Date).toLocaleDateString('fr-fr', {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "2-digit",
                                                                    hour: "numeric",
                                                                    minute: "numeric"
                                                                })}</p>
                                                            <p className={"mt-2.5 text-md"}>{item.text}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className={"md:w-[30%]"}>
                            <Card>
                                <CardHeader className="flex flex-row items-start bg-muted/70 rounded-t-xl">
                                    <CardTitle>À propos de la Communauté</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className={"my-6 flex items-center gap-x-3"}>
                                        <Image
                                            src={`https://avatar.vercel.sh/${data?.subName}`}
                                            alt={"SubReddit Image"} width={60} height={60}
                                            className={"rounded-full h-14 w-14"}
                                        />
                                        <div>
                                            <Link href={`/r/${data?.subName}`} className={"font-bold text-lg"}>
                                                r/{data?.subName}
                                            </Link>
                                            <p className={"text-muted-foreground text-xs font-medium"}> Créé le
                                                {" " + new Date(data?.Subreddit?.createdAt as Date).toLocaleDateString('fr-fr', {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "2-digit",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    <p className={"mt-2.5 text-sm"}>{data?.Subreddit?.description}</p>
                                    <Separator className={"my-5"}/>
                                    <Link href={`/r/${data?.subName}/create`}
                                          className={cn(buttonVariants({size: "sm"}), "w-full")}>Créer un post
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}