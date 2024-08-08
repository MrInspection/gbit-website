import {Separator} from "@/components/ui/separator";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {SubDescriptionForm} from "@/components/forms/subdescription-form";
import {buttonVariants} from "@/components/ui/button";
import {CreatePostCard} from "@/components/create-post-card";
import {PostCard} from "@/components/post-card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import prisma from "@/lib/db";
import Link from "next/link";
import Pagination from "@/components/pagination";
import {ChevronLeft, MessageSquareOff} from "lucide-react";
import {unstable_noStore as noStore} from "next/cache"

async function getData(name: string, searchParam: string) {
    noStore()
    const [count, data] = await prisma.$transaction([
        prisma.post.count({
            where: { subName: name }
        }),
        prisma.subreddit.findUnique({
            where: {
                name: name,
            },
            select: {
                name: true,
                description: true,
                createdAt: true,
                userId: true,
                posts: {
                    take: 6,
                    skip: searchParam ? (Number(searchParam) - 1) * 6 : 0,
                    select: {
                        title: true,
                        id: true,
                        textContent: true,
                        createAt: true,
                        Vote: {
                            select: {
                                userId: true,
                                voteType: true,
                            }
                        },
                        User: {
                            select: {
                                userName: true,
                                imageUrl: true,
                            }
                        },
                        Comment: {}
                    },
                },
            },
        })
    ])
    return {data, count}
}

export default async function SubRedditRoute({params, searchParams} : {params: {id: string}, searchParams: {page: string}}) {

    const {data, count} = await getData(params.id, searchParams.page)
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    return (
        <>
            <div className="flex min-h-screen w-full flex-col">
                <div className={"container max-w-7xl"}>
                    <div className={"mt-10 mb-5"}>
                        <Link href={"/community"}
                              className={cn(buttonVariants({variant: "outline", size: "default"}))}>
                            <ChevronLeft className={"h-4 w-4 mr-2"}/> Retour
                        </Link>
                    </div>
                    <div className={"flex max-sm:flex-col gap-x-6 max-sm:gap-y-6 mt-4 mb-40"}>
                        <div className={"md:w-[70%] flex flex-col gap-y-6"}>
                            <CreatePostCard community={data?.name as string} />

                            {data?.posts.length === 0 ? (
                                <>
                                    <div
                                        className="flex h-[600px] shrink-0 items-center justify-center rounded-xl border border-dashed">
                                        <div
                                            className="mx-2 flex max-w-[420px] flex-col items-center justify-center text-center">
                                            <MessageSquareOff className={"h-10 w-10 text-muted-foreground"}/>
                                            <h3 className="mt-4 text-2xl font-bold text-muted-foreground">
                                                Aucun post n{"'"}a été ajouté
                                            </h3>
                                            <p className="mb-4 mt-2 text-sm text-muted-foreground">
                                                Vous n{"'"}avez ajouté aucun message. Ajoutez-en un ci-dessous.
                                            </p>
                                            <Link href={user?.id ? `/r/${data?.name}/create` : 'api/auth/login'} className={cn(buttonVariants({size: "sm"}))}>
                                                Ajouter un post
                                            </Link>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {data?.posts.map((post) => (
                                        <PostCard
                                            key={post.id} title={post.title} jsonContent={post.textContent}
                                            id={post.id} subName={data.name} userName={post.User?.userName as string}
                                            createdAt={post.createAt} comments={post.Comment.length}
                                            voteCount={post.Vote.reduce((acc, vote) => {
                                                if (vote.voteType === "UP") return acc + 1;
                                                if (vote.voteType === "DOWN") return acc - 1;
                                                return acc
                                            }, 0)}
                                        />
                                    ))}
                                    <Pagination totalPages={Math.ceil(count / 6)}/>
                                </>
                            )}

                        </div>
                        <div className={"md:w-[30%]"}>
                            <Card>
                                <CardHeader className="flex flex-row items-start bg-muted/50 rounded-t-xl">
                                    <CardTitle>À propos de la Communauté</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className={"my-6 flex items-center gap-x-3"}>
                                        <Image
                                            src={`https://avatar.vercel.sh/${data?.name}`}
                                            alt={"SubReddit Image"} width={60} height={60}
                                            className={"rounded-full h-14 w-14"}
                                        />
                                        <div>
                                            <Link href={`/r/${data?.name}`} className={"font-bold text-lg"}>
                                                r/{data?.name}
                                            </Link>
                                            <p className={"text-muted-foreground text-xs font-medium"}> Crée le
                                                {" " + new Date(data?.createdAt as Date).toLocaleDateString('fr-fr', {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "2-digit",
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                    {user?.id === data?.userId ? (
                                        <>
                                            <p className={"mt-2.5 text-sm"}>{data?.description}</p>
                                            <Separator className={"my-5"}/>
                                            <h1 className={"mb-3 font-bold"}>Modifier la description</h1>
                                            <SubDescriptionForm subName={params.id} description={data?.description}/>
                                        </>
                                    ) : (
                                        <p className={"mt-2.5 text-sm"}>{data?.description}</p>
                                    )}
                                    <Separator className={"my-5"}/>
                                    <Link href={user?.id ? `/r/${data?.name}/create` : 'api/auth/login'}
                                          className={cn(buttonVariants({size: "default"}), "w-full")}>Créer un post</Link>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}