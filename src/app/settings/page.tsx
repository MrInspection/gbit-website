import prisma from "@/lib/db";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import {redirect} from "next/navigation";
import {SettingsForm} from "@/components/forms/settings-form";

async function getData(userId: string) {
    const data = await prisma.user.findUnique({
        where: {
            id: userId
        }, select: {
            userName: true,
        },
    });
    return data;
}

export default async function SettingsPage() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user) { return redirect("/api/auth/login") }

    const data = await getData(user.id)
    return (
        <>
            <div className={"container max-w-[1000px] mx-auto flex flex-col mt-4"}>
                <div className={"my-12"}>
                    <div className={"mb-8"}>
                        <h1 className={"font-extrabold text-3xl tracking-tight"}>Settings</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    <SettingsForm username={data?.userName}/>
                </div>
            </div>
        </>
    )
}