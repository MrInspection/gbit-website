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

            <div className={"bg-muted/40"}>
                <div className={"container max-w-3xl h-[53rem] items-center justify-items-center justify-center"}>
                    <div className={"pt-4"}>
                        <div className={"my-12"}>
                            <div className={"mb-8"}>
                                <h1 className={"font-extrabold text-3xl tracking-tight"}>Mes paramètres</h1>
                                <p>Gérer les paramètres de votre compte GBIT.</p>
                            </div>
                            <SettingsForm username={data?.userName}/>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}