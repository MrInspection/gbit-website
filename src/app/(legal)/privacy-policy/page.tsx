export default function PrivacyPolicyPage() {
    return (
        <>
            <div className={"bg-[#FCF1EB] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-12"}>
                        <div className="flex h-5 items-center space-x-3">
                            <div className={"font-bold text-sm"}>Publié 01/05/2024</div>
                        </div>
                        <h1 className=" scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-4xl text-primary">
                            Données personnelles et cookies
                        </h1>
                    </div>
                </div>
            </div>
            <div className={"container relative mx-auto max-w-2xl mb-32"}>
                <div className={"flex-1 mt-24"}>
                    <div>
                        <div className={"mb-10"}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-muted-foreground">
                                Préambule
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:my-4 mb-8 text-muted-foreground">
                                Nous nous engageons à respecter votre vie privée en protégeant les données
                                personnelles que vous nous confiez. Cette politique de confidentialité explique
                                comment nous collectons, utilisons et protégeons vos informations.
                            </p>
                        </div>

                        <div id={""}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
                                À qui sont destinées vos données ?
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:my-4 mb-3">
                                Vos données personnelles sont utilisées exclusivement par notre association
                                et ne sont pas partagées avec des tiers, sauf autorisation expresse de votre
                                part ou exigence légale.
                            </p>
                        </div>

                        <div id={""}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl mt-2">
                                Comment vos données sont-elles collectées ?
                            </h1>
                            <p className="leading-7 [&:not(:first-child)]:my-4 mb-3">
                                Nous collectons les données personnelles suivantes :
                            </p>
                            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                                <li>
                                    Lors de la création d{"'"}un compte : Nous collectons votre adresse e-mail, votre prénom,
                                    votre nom, et toute autre information que vous choisissez de nous fournir, au moment
                                    de la création de votre compte.
                                </li>
                                <li>
                                    Lors de l{"'"}envoi de messages via le formulaire de contact : Nous collectons votre nom,
                                    votre adresse e-mail et toute information que vous choisissez de nous communiquer dans
                                    votre message.
                                </li>
                                <li>
                                    Lors de l{"'"}envoi de messages dans l{"'"}espace communautaire : Nous collectons toute
                                    information que vous choisissez de partager dans vos messages, y compris votre nom
                                    d{"'"}utilisateur si vous êtes connecté.
                                </li>
                            </ul>
                        </div>

                        <div id={""}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl mt-2">
                                Quels sont vos droits sur vos données et comment les exercer ?
                            </h1>

                            <p className="leading-7 [&:not(:first-child)]:my-4 mb-3">
                                En tant que membre de notre association, vous avez le droit d{"'"}accéder à vos
                                données personnelles, de les corriger, de les supprimer ou de limiter leur utilisation.
                                Vous pouvez également vous opposer au traitement de vos données ou demander leur
                                portabilité. Pour exercer ces droits, veuillez nous contacter à [adresse e-mail].
                                Nous répondrons à votre demande dans les meilleurs délais.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}