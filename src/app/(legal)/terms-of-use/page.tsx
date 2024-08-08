export default function AgreementPage() {
    return (
        <>
            <div className={"bg-[#FCF1EB] h-full justify-center"}>
                <div className={"container relative mx-auto max-w-6xl mb-10"}>
                    <div className={"py-12"}>
                        <div className="flex h-5 items-center space-x-3">
                            <div className={"font-bold text-sm"}>Publié 20/02/2024</div>
                        </div>
                        <h1 className=" scroll-m-20 text-2xl font-extrabold tracking-tight md:text-4xl lg:text-4xl text-primary">
                            User Agreement
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
                                Cet Accord Utilisateur (ci-après dénommé{"'"}l{"'"}Accord{"'"} ) régit
                                l{"'"}utilisation de l{"'"}espace communautaire (ci-après dénommé
                                {"'"}l{"'"}Espace Communautaire{"'"} ) fourni par [Nom du Lycée]
                                (ci-après dénommé {"'"}le Lycée{"'"}).
                            </p>
                            <p className={"leading-7 [&:not(:first-child)]:my-4 mb-8 text-muted-foreground"}>
                                En accédant à l{"'"}Espace Communautaire et en y contribuant, vous
                                acceptez les termes de cet Accord. Si vous n{"'"}acceptez pas ces
                                termes, veuillez ne pas utiliser l{"'"}Espace Communautaire.
                            </p>
                        </div>

                        <div id={"user-agreement"}>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl">
                                1. Utilisation de l{"'"}Espace Communautaire
                            </h1>
                            <p className={"mt-4"}>
                                1.1. <strong>Contenu des Contributions :</strong> Vous êtes seul
                                responsable du contenu que vous publiez dans l{"'"}Espace
                                Communautaire. Vous vous engagez à ne pas publier de contenu qui est
                                diffamatoire, offensant, illégal, ou qui viole les règles de conduite
                                établies par le Lycée.
                            </p>
                            <p className={"mt-4"}>
                                1.2. <strong>Respect des Règles Communautaires :</strong> Vous acceptez
                                de respecter les règles établies par le Lycée pour l{"'"}utilisation
                                de l{"'"}Espace Communautaire. Ces règles peuvent inclure des
                                directives sur le langage approprié, la conduite respectueuse envers
                                les autres utilisateurs, et l{"'"}interdiction de contenu à caractère
                                politique ou toute autre forme de prosélytisme.
                            </p>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl mt-6">
                                2. Responsabilité
                            </h1>
                            <p className={"mt-4"}>
                                2.1. <strong>Exclusion de Responsabilité :</strong> Le Lycée ne peut
                                être tenu responsable du contenu publié par les utilisateurs dans
                                l{"'"}Espace Communautaire. Vous utilisez l{"'"}Espace Communautaire
                                à vos propres risques et le Lycée décline toute responsabilité pour
                                tout dommage résultant de votre utilisation de l{"'"}Espace
                                Communautaire.
                            </p>
                            <p className={"mt-4"}>
                                2.2. <strong>Modération :</strong> Le Lycée se réserve le droit de
                                modérer le contenu publié dans l{"'"}Espace Communautaire et de
                                supprimer tout contenu qui enfreint cet Accord ou les règles
                                communautaires.
                            </p>
                            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-2xl mt-6">
                                3. Dispositions Générales
                            </h1>
                            <p className={"mt-4"}>
                                3.1. <strong>Modification de l{"'"}Accord :</strong> Le Lycée se
                                réserve le droit de modifier cet Accord à tout moment. Les
                                modifications prendront effet dès leur publication dans l{"'"}Espace
                                Communautaire. Il est de votre responsabilité de consulter
                                régulièrement cet Accord pour prendre connaissance des éventuelles
                                modifications.
                            </p>
                            <p className={"mt-4"}>
                                3.2. <strong>Droit Applicable :</strong> Cet Accord est régi par les
                                lois en vigueur en France.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}