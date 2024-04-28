import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/db";
import {generateUsername} from "unique-username-generator";
import {NextResponse} from "next/server";

export async function GET() {
    const {getUser} = getKindeServerSession()
    const user = await getUser()

    if(!user || user === null || !user.id)
        throw new Error("Something went wrong, please try again.");

    let dbUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    });

    if(!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                email: user.email ?? "",
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                imageUrl: user.picture,
                userName: generateUsername("-", 3, 15),
            },
        });
    }
    return NextResponse.redirect("http://localhost:3000/community/")
}