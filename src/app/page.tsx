import Image from "next/image";
import {Separator} from "@/components/ui/separator";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {Card, CardHeader} from "@/components/ui/card";
import {ArrowRightIcon} from "lucide-react";

export default function Home() {
  return (
      <>
        <div
            className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div
              className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Backgrounds
          </p>
        </div>
          <ContentSection />
      </>
  );
}


function ContentSection() {
    return (
        <>
            <div className={"container relative max-w-6xl mt-10"}>

                <Separator/>

                <div className={"flex flex-col justify-center items-center w-full h-full sm:py-10 text-center"}>
                    <section className="max-w-[980px] flex-col items-center
                         justify-items-center gap-6 pt-2 my-10 md:my-4">
                        <div className="flex flex-col items-center justify-items-center gap-2">
                            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter lg:text-5xl mb-2">
                                Notre mission<br className="hidden sm:inline"/>
                            </h1>
                            <p className="max-w-5xl text-lg text-muted-foreground">
                                Nous soutenons l'épanouissement et la réussite de nos étudiants en offrant un
                                environnement propice à leur développement personnel et professionnel. Nous
                                facilitons leur insertion professionnelle et encourageons la réalisation de
                                projets variés dans les domaines sportifs, culturels et professionnels.
                                En promouvant l'ouverture culturelle et en organisant des événements festifs,
                                nous créons une communauté dynamique et enrichissante pour nos étudiants.
                            </p>
                        </div>
                    </section>
                </div>

                <div className={"my-4"}>
                    <div className={""}>
                        <div className={"mt-10 mb-10 grid gap-9 grid-cols-1 md:grid-cols-2"}>
                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/illustrations/illustration-business.jpg"}
                                         alt={"Portfolio Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-60  w-full "}>
                                    </img>
                                </CardHeader>
                            </Card>
                            <div className={"flex justify-center items-center"}>
                                <div>
                                    <h2 className="scroll-m-20 pb-2 text-4xl font-black tracking-tight first:mt-0">
                                        L'insertion professionnelle
                                    </h2>
                                    <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground text-lg">
                                        Le GBIT œuvre pour favoriser l'insertion professionnelle des étudiants en
                                        proposant des simulations d'entretiens d'embauche et des rencontres avec
                                        des professionnels. Nous veillons également à promouvoir l'établissement
                                        afin qu'il soit reconnu par les entreprises et les institutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"mt-10 mb-10 grid gap-9 grid-cols-1 md:grid-cols-2"}>
                            <div className={"flex justify-center items-center"}>
                                <div>
                                    <h2 className="scroll-m-20 pb-2 text-4xl font-black tracking-tight first:mt-0">
                                        Les projets étudiants
                                    </h2>
                                    <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground text-lg">
                                        Le GBIT met à disposition les cadres juridique, comptable et matériel requis
                                        pour concrétiser divers projets, qu'ils relèvent des domaines sportifs
                                        (par exemple, l'organisation de tournois), culturels (par exemple, le théâtre)
                                        ou professionnels (par exemple, les missions pour les entreprises).
                                    </p>
                                </div>
                            </div>
                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/illustrations/illustration-projects.jpg"}
                                         alt={"Portfolio Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-60  w-full "}>
                                    </img>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                    <div className={""}>
                        <div className={"mt-10 mb-10 grid gap-9 grid-cols-1 md:grid-cols-2"}>
                            <Card>
                                <CardHeader className={"my-0"}>
                                    <img src={"/illustrations/illustration-paris.jpg"}
                                         alt={"Portfolio Thumbnail Project"}
                                         className={"rounded-md object-cover aspect-video h-60  w-full "}>
                                    </img>
                                </CardHeader>
                            </Card>
                            <div className={"flex justify-center items-center"}>
                                <div>
                                    <h2 className="scroll-m-20 pb-2 text-4xl font-black tracking-tight first:mt-0">
                                        La vie culturelle
                                    </h2>
                                    <p className="leading-7 [&:not(:first-child)]:mt-3 text-muted-foreground text-lg">
                                        Par exemple, le GBIT contribue à l'ouverture culturelle et internationale
                                        de l'établissement en facilitant l'organisation de voyages. De plus, le GBIT
                                        organise divers événements festifs tels que les soirées d'intégration et les
                                        bals de promo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Temp() {
    return (
        <>
            <div className={"container relative max-w-6xl mt-10 mb-36"}>
                <Separator/>

                <div className={"mt-7"} id={"faq"}>
                    <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl mb-8">
                        Questions fréquentes
                    </h1>

                    <div className={"container max-w-5xl"}>
                        <Separator/>
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                                <AccordionTrigger>Quels types de projets soutient le GBIT ?</AccordionTrigger>
                                <AccordionContent>
                                    Le GBIT soutient une variété de projets, tels que des initiatives
                                    culturelles, des voyages, des sorties, des concerts, des actions
                                    humanitaires, des tournois sportifs, et contribue au développement
                                    de l'image de l'établissement.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2">
                                <AccordionTrigger>Comment puis-je adhérer au GBIT et combien cela coûte-t-il
                                    ?</AccordionTrigger>
                                <AccordionContent>
                                    L'adhésion est ouverte à tout moment pendant la scolarité au lycée et coûte 35 € par
                                    personne pour deux ans.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3">
                                <AccordionTrigger>Comment puis-je obtenir le soutien du GBIT pour un projet
                                    ?</AccordionTrigger>
                                <AccordionContent>
                                    Chaque section est libre d'organiser ses projets, mais peut solliciter le
                                    Bureau du GBIT pour un soutien financier, logistique et juridique, y compris
                                    une assurance pour couvrir d'éventuels dommages.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}
