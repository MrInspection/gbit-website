import {buttonVariants} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Frown, OctagonAlert, School, Users} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import prisma from "@/lib/db";
import {PostCard} from "@/components/post-card";
import {Suspense} from "react";
import SuspenseCard from "@/components/suspense-card";
import Pagination from "@/components/pagination";
import {unstable_noStore as noStore} from "next/cache"
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {InfoCircledIcon} from "@radix-ui/react-icons";
import {Warning} from "postcss";

async function getData(searchParam: string) {
    noStore()
    const [count, data] = await prisma.$transaction([
        prisma.post.count(),
        prisma.post.findMany({
            take: 6,
            skip: searchParam ? (Number(searchParam) - 1) * 6 : 0,
            select: {
                title: true,
                createAt: true,
                textContent: true,
                id: true,
                User: {
                    select: {
                        userName: true,
                        imageUrl: true,
                    }
                },
                Vote: {
                    select: {
                        userId: true,
                        voteType: true,
                        postId: true,
                    }
                },
                Comment: true,
                subName: true,
            },
            orderBy: {
                createAt: "desc",
            }
        })
    ])
    return {data, count}
}

export default async function CommunityPage({searchParams}: {searchParams: {page: string}}) {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return (
        <>
            <div className="flex min-h-screen w-full flex-col bg-muted/40">
                <div className={"container max-w-7xl mt-8"}>
                    <div className={"flex max-sm:flex-col gap-x-6 max-sm:gap-y-6 mt-4 mb-40"}>
                        <div className={"md:w-[70%] flex flex-col gap-y-5"}>
                            <Suspense fallback={<SuspenseCard key={searchParams.page}/>}>
                                <ShowItems searchParams={searchParams}/>
                            </Suspense>
                        </div>
                        <div className={"md:w-[30%]"}>
                            <Card>
                                <CardHeader className="flex flex-row items-start bg-muted/50 rounded-t-xl border-b-2">
                                    <CardTitle className={"flex"}>
                                        <School className={"size-4 mr-2"}/> Community Space
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={"mt-5 text-sm"}>
                                        The home page of your community space. Come here to consult all the content published by the various communities.
                                    </p>
                                    <div className={"mt-5 grid gap-2"}>
                                        <Link href={user?.id ? `/r/create` : 'api/auth/login'}
                                              className={cn(buttonVariants({variant: "default", size: "sm"}))}>
                                             Create Community
                                        </Link>
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

async function ShowItems({searchParams}: { searchParams: { page: string } }) {
    const {count, data} = await getData(searchParams.page)
    return (
        <>
            {data.length === 0 ? (
                <>
                    <div
                        className="flex h-[800px] shrink-0 items-center justify-center rounded-2xl border-2 bg-background">
                        <div className="mx-2 flex max-w-[420px] flex-col items-center justify-center text-center">
                            <OctagonAlert className={"size-10 text-muted-foreground"}/>
                            <h3 className="mt-4 text-2xl font-bold">
                                Your feed is empty
                            </h3>
                            <p className="mt-1.5 text-sm text-muted-foreground">
                                Create a community and post a message to see it here
                            </p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    {data.map((post) => (
                        <>
                            <PostCard
                                id={post.id} title={post.title} jsonContent={post.textContent}
                                subName={post.subName as string} userName={post.User?.userName as string}
                                key={post.id} createdAt={post.createAt} comments={post.Comment.length}
                                voteCount={post.Vote.reduce((acc, vote) => {
                                    if (vote.voteType === "UP") return acc + 1;
                                    if (vote.voteType === "DOWN") return acc - 1;
                                    return acc
                                }, 0)}
                            />
                        </>
                    ))}
                    <Pagination totalPages={Math.ceil(count / 6)}/>
                </>
            )}
        </>
    )
}

