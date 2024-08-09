export default function TermsOfUsePage() {
    return (
        <>

            <div className={"md:border-r-2 md:border-l-2 container max-w-4xl max-md:px-8 px-20 py-20"}>
                <div className={"border-2 rounded-2xl px-4 py-1.5 flex items-center w-fit"}>
                    <p className={"text-xs font-medium"}>Legal Information</p>
                </div>
                <h1 className={"font-bold text-4xl mt-6"}>User Agreement</h1>
                <p className={"mt-2"}>Last Update: August 9th, 2024</p>
                <article className={"mt-10"}>
                    <section>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>Préambule</h3>
                        <p className={"mt-6"}>
                            Cet Accord Utilisateur (ci-après dénommé &quot;l&apos;Accord&quot; ) régit
                            l&apos;utilisation de l&apos;espace communautaire (ci-après dénommé
                            &quot;l&apos;Espace Communautaire&quot; ) fourni par [Nom du Lycée]
                            (ci-après dénommé &quot;le Lycée&quot;).
                        </p>
                        <p className={"mt-6"}>
                            En accédant à l{"'"}Espace Communautaire et en y contribuant, vous
                            acceptez les termes de cet Accord. Si vous n{"'"}acceptez pas ces
                            termes, veuillez ne pas utiliser l{"'"}Espace Communautaire.
                        </p>
                    </section>
                    <section className={"mt-10"}>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>1. Utilisation de l&apos;Espace
                            Communautaire</h3>
                        <p className={"mt-6"}>
                            1.1. <strong>Contenu des Contributions :</strong> Vous êtes seul
                            responsable du contenu que vous publiez dans l&apos;Espace
                            Communautaire. Vous vous engagez à ne pas publier de contenu qui est
                            diffamatoire, offensant, illégal, ou qui viole les règles de conduite
                            établies par le Lycée.
                        </p>
                        <p className={"mt-6"}>
                            1.2. <strong>Respect des Règles Communautaires :</strong> Vous acceptez
                            de respecter les règles établies par le Lycée pour l&apos;utilisation
                            de l&apos;Espace Communautaire. Ces règles peuvent inclure des
                            directives sur le langage approprié, la conduite respectueuse envers
                            les autres utilisateurs, et l&apos;interdiction de contenu à caractère
                            politique ou toute autre forme de prosélytisme.
                        </p>
                    </section>
                    <section className={"mt-10"}>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>2. Responsabilité</h3>
                        <p className={"mt-6"}>
                            2.1. <strong>Exclusion de Responsabilité :</strong> Le Lycée ne peut
                            être tenu responsable du contenu publié par les utilisateurs dans
                            l&apos;Espace Communautaire. Vous utilisez l&apos;Espace Communautaire
                            à vos propres risques et le Lycée décline toute responsabilité pour
                            tout dommage résultant de votre utilisation de l&apos;Espace
                            Communautaire.
                        </p>
                        <p className={"mt-6"}>
                            2.2. <strong>Modération :</strong> Le Lycée se réserve le droit de
                            modérer le contenu publié dans l&apos;Espace Communautaire et de
                            supprimer tout contenu qui enfreint cet Accord ou les règles
                            communautaires.
                        </p>
                    </section>
                    <section className={"mt-10"}>
                        <h3 className={"font-bold text-2xl pb-4 border-b-2"}>3. Dispositions Générales</h3>
                        <p className={"mt-6"}>
                            3.1. <strong>Modification de l&apos;Accord :</strong> Le Lycée se
                            réserve le droit de modifier cet Accord à tout moment. Les
                            modifications prendront effet dès leur publication dans l&apos;Espace
                            Communautaire. Il est de votre responsabilité de consulter
                            régulièrement cet Accord pour prendre connaissance des éventuelles
                            modifications.
                        </p>
                        <p className={"mt-6"}>
                            3.2. <strong>Droit Applicable :</strong> Cet Accord est régi par les
                            lois en vigueur en France.
                        </p>
                    </section>
                </article>
            </div>
        </>
    )
}
