"use client"
import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {registerContact} from "@/lib/actions";

const FormSchema = z.object({
    name: z.string().min(2, {
        message: "Last Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    subject: z.string().min(5, {
        message: "Subject must be at least 5 characters.",
    }),
    content: z.string().min(10, {
        message: "Content must be at least 10 characters.",
    }),
})

export default function ContactForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            content: "",
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        registerContact(data.name, data.email, data.subject, data.content)
    }

    return (
        <>
            <div className={"bg-muted/45 items-center"}>
                <div className={"container max-w-2xl py-10 items-center justify-items-center pb-28"}>
                    <div className={"my-10 text-center text-balance items-center justify-center"}>
                        <h1 className={"text-5xl font-extrabold"}>Contacter le GBIT</h1>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-5 items-center justify-center">
                            <div className={"grid sm:grid-cols-2 gap-3"}>
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Nom</FormLabel>
                                            <FormControl>
                                                <Input placeholder="John" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="john@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="subject"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Objet</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Objet du message"{...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="content"
                                render={({field}) => (
                                    <FormItem>
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className={"resize-none min-h-40 h-60"}
                                                placeholder="Contenu de votre message" {...field} />
                                        </FormControl>
                                        <FormMessage/>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className={"w-full"}>Send Message</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </>
    )
}
