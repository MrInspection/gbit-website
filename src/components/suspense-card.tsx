import {Skeleton} from "@/components/ui/skeleton";

export default function SuspenseCard() {
    return (
        <>
            <div className="flex flex-col space-y-3">
                <Skeleton className="h-[300px] w-full rounded-xl"/>
                <Skeleton className="h-[300px] w-full rounded-xl"/>
                <Skeleton className="h-[300px] w-full rounded-xl"/>
                <Skeleton className="h-[300px] w-full rounded-xl"/>
            </div>
        </>
    )
}