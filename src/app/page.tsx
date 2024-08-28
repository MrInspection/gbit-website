import {ArrowRight, Briefcase, Hammer, Theater} from "lucide-react";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {GithubIndicator} from "@/components/github-indicator";

export default function HomePage() {
    return (
        <>
            <main className={"container max-w-6xl"}>
                <div className={"flex flex-col items-center justify-center my-28"}>
                    <div className={"border-2 border-gray-900/10 rounded-3xl px-5 py-1.5 shadow-2xl mb-8"}>
                        <p className={"text-muted-foreground font-medium text-center max-md:text-xs"}>Lycée Gaston Berger</p>
                    </div>
                    <h1 className={"bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl font-extrabold text-center"}>L&apos;association
                        GBIT</h1>
                    <p className={"mt-6 text-center max-md:text-sm md:w-[74%]"}>
                        Nous soutenons l&apos;épanouissement et la réussite de nos étudiants en offrant un
                        environnement propice à leur développement personnel et professionnel. Nous
                        facilitons leur insertion professionnelle et encourageons la réalisation de
                        projets variés dans les domaines sportifs, culturels et professionnels.
                        En promouvant l&apos;ouverture culturelle et en organisant des événements festifs,
                        nous créons une communauté dynamique et enrichissante pour nos étudiants.
                    </p>
                    <Button className={"mt-9 bg-black hover:bg-black/80"} size={"lg"}>
                        Rejoindre l&apos;association
                        <ArrowRight className={"ml-2 size-4"}/>
                    </Button>
                </div>
                <div>
                    <div className={"relative isolate"}>
                        <div
                            aria-hidden='true'
                            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
                            <div
                                style={{
                                    clipPath:
                                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                                }}
                                className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
                            />
                        </div>
                        <div>
                            <div className={"mt-16 flow-root sm:mt-24"}>
                                <div
                                    className={"-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4"}>
                                    <Image
                                        src={`/images/flyer-gbit.png`}
                                        alt="GBIT Flyer"
                                        height={866} width={1364} quality={100}
                                        className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
                                        draggable={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"mt-28 mb-40"}>
                    <div className={"flex max-md:flex-col md:justify-between gap-6"}>
                        <h1 className={"max-md:text-3xl text-4xl font-bold max-md:text-center max-md:mx-5"}>Que vas vous apporter le GBIT ? </h1>
                        <Image
                            src={"/images/illustration-1.webp"}
                            alt={"Image"}
                            width={120}
                            height={120}
                            className={
                                "z-10 -mb-1.5 mr-8 max-md:ml-8 max-md:h-[80px] max-md:w-fit"
                            }
                        />
                    </div>
                    <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                        <section className={"border-2 p-8 rounded-2xl flex items-center justify-center"}>
                            <div>
                                <Briefcase className={"size-5 text-primary"}/>
                                <h1 className={"text-lg font-bold mt-3"}>Insertion professionnelle</h1>
                                <p className={"text-sm mt-3"}>
                                    Nous facilitons l&apos;insertion professionnelle des étudiants avec des simulations
                                    d&apos;entretiens et des rencontres avec des professionnels. Nous renforçons également
                                    la
                                    visibilité de l&apos;établissement auprès des entreprises pour mieux valoriser nos
                                    diplômés.
                                </p>
                            </div>
                        </section>
                        <section className={"border-2 p-8 rounded-2xl flex items-center justify-center"}>
                            <div>
                                <Hammer className={"size-5 text-primary"}/>
                                <h1 className={"text-lg font-bold mt-3"}>Projets étudiants</h1>
                                <p className={"text-sm mt-3"}>
                                    On fournit les cadres juridiques, comptables et matériels nécessaires pour réaliser
                                    divers
                                    projets, qu&apos;ils soient sportifs (comme l&apos;organisation de tournois), culturels
                                    (comme des
                                    représentations théâtrales) ou professionnels (comme des missions pour les entreprises).
                                </p>
                            </div>

                        </section>
                        <section className={"border-2 p-8 rounded-2xl md:col-span-2 lg:col-span-1 flex items-center justify-center"}>
                            <div>
                                <Theater className={"size-5 text-primary"}/>
                                <h1 className={"text-lg font-bold mt-3"}>Vie Culturelle</h1>
                                <p className={"text-sm mt-3"}>
                                    Nous contribuons à l&apos;ouverture culturelle et internationale de l&apos;établissement
                                    en
                                    facilitant l&apos;organisation de voyages. Nous organisons également divers événements
                                    festifs, tels que les soirées d&apos;intégration et les bals de promo.
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <GithubIndicator />
        </>
    );
}
