import {TriangleAlert} from "lucide-react";

export default function NotFound() {
    return (
        <>
            <div className={"container relative my-8 cursor-not-allowed"}>
                <div className="flex h-[780px] shrink-0 items-center justify-center rounded-md border border-dashed">
                    <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
                        <TriangleAlert className={"h-10 w-10 text-muted-foreground"}/>
                        <h3 className="mt-4 text-2xl font-bold text-muted-foreground">Page not found</h3>
                        <p className="mb-4 mt-2 text-sm text-muted-foreground">
                            This is perhaps a mistake, please come back at a later time ={"'"}(
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}