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


            <div className={"md:border-r-2 md:border-l-2 container max-w-4xl max-md:px-8 px-20 py-24"}>


                <h1 className={"bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-5xl  font-extrabold text-center"}>Contacter le GBIT</h1>
                <p className={"mt-8 text-center max-md:text-sm md:px-14"}>
                    Vous avez des questions ou des demandes de renseignements ? Nous sommes là pour vous aider. Veuillez remplir le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </p>


                <section className={"mt-14"}>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 md:p-10 space-y-6 border-2 rounded-2xl">
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
                </section>





            </div>










        </>
    )
}
