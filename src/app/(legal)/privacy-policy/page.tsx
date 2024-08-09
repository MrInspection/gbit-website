export default function PrivacyPolicyPage() {
    return (
        <>
            <div className={"md:border-r-2 md:border-l-2 container max-w-4xl max-md:px-8 px-20 py-20"}>
                <div className={"border-2 rounded-2xl px-4 py-1.5 flex items-center w-fit"}>
                    <p className={"text-xs font-medium"}>Legal Information</p>
                </div>
                <h1 className={"font-bold text-4xl mt-6"}>Personal Data and Cookies</h1>
                <p className={"mt-2"}>Last Update: August 9th, 2024</p>
                <article className={"mt-10"}>
                    <section>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>Préambule</h3>
                        <p className={"mt-6"}>
                            Nous nous engageons à respecter votre vie privée en protégeant les données
                            personnelles que vous nous confiez. Cette politique de confidentialité explique
                            comment nous collectons, utilisons et protégeons vos informations.
                        </p>
                    </section>
                    <section className={"mt-10"}>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>À qui sont destinées vos données ?</h3>
                        <p className={"mt-6"}>
                            Vos données personnelles sont utilisées exclusivement par notre association
                            et ne sont pas partagées avec des tiers, sauf autorisation expresse de votre
                            part ou exigence légale.
                        </p>
                    </section>
                    <section className={"mt-10"}>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>Comment vos données sont-elles collectées
                            ?</h3>
                        <p className={"mt-6"}>
                            Nous collectons les données personnelles suivantes :
                        </p>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>
                                Lors de la création d&apos;un compte : Nous collectons votre adresse e-mail, votre
                                prénom, votre nom, et toute autre information que vous choisissez de nous fournir, au
                                moment de la création de votre compte.
                            </li>
                            <li>
                                Lors de l&apos;envoi de messages via le formulaire de contact : Nous collectons votre
                                nom, votre adresse e-mail et toute information que vous choisissez de nous communiquer
                                dans votre message.
                            </li>
                            <li>
                                Lors de l&apos;envoi de messages dans l&apos;espace communautaire : Nous collectons
                                toute information que vous choisissez de partager dans vos messages, y compris votre nom
                                d&apos;utilisateur si vous êtes connecté.
                            </li>
                        </ul>
                    </section>
                    <section className={"mt-10"}>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>Quels sont vos droits sur vos données et
                            comment les exercer ?</h3>
                        <p className={"mt-6"}>
                            En tant que membre de notre association, vous avez le droit d&apos;accéder à vos données
                            personnelles, de les corriger, de les supprimer ou de limiter leur utilisation. Vous pouvez
                            également vous opposer au traitement de vos données ou demander leur portabilité. Pour
                            exercer ces droits, veuillez nous contacter à <span className={"text-orange-500"}>example@example.com</span>. Nous répondrons à votre
                            demande dans les meilleurs délais.
                        </p>
                    </section>
                </article>
            </div>
        </>
    )
}
