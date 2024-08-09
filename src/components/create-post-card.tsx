import {Card} from "@/components/ui/card";

import {Input} from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {buttonVariants} from "@/components/ui/button";
import {Send} from "lucide-react";
import {cn} from "@/lib/utils";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export async function CreatePostCard({community} : {community: string}) {
    const {getUser} = getKindeServerSession()
    const user = await getUser()
    return (
        <>
            <Card className={"px-4 py-3 flex gap-2.5 items-center"}>
                <Image
                    src={"/placeholder-avatar.png"}
                    alt={"P"} width={50} height={50}
                    className={"h-8 w-8 rounded-3xl ring-2 ring-primary"}
                />
                <Link href={user?.id ? `/r/${community}/create` : 'api/auth/login'} className={"w-full"}>
                    <Input placeholder={"Create a new post..."} />
                </Link>

                <Link href={user?.id ? `/r/${community}/create` : 'api/auth/login'} className={cn(buttonVariants({variant: "default"}))}>
                    <Send className={"h-4 w-4"} />
                </Link>
            </Card>
        </>
    )
}
