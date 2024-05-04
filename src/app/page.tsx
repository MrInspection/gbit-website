import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {ContainerScroll} from "@/components/tablet-card";

export default function HomePage() {
  return (
      <>
          <div className="max-h-fit w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
              <div className={"container max-md:pt-[25.5rem] pt-14 max-md:pb-[26rem] md:pb-[14rem] lg:pb-24"}>
                  <ContainerScroll titleComponent={
                      <>
                          <div className={"font-extrabold grid items-center text-balance mb-14"}>
                              <p className={"max-md:text-3xl text-6xl text-primary"}>L{"'"}association GBIT</p>
                              <p className={"max-md:text-sm mt-6 font-medium"}>
                                  Nous soutenons l{"'"}épanouissement et la réussite de nos étudiants en offrant un
                                  environnement propice à leur développement personnel et professionnel. Nous
                                  facilitons leur insertion professionnelle et encourageons la réalisation de
                                  projets variés dans les domaines sportifs, culturels et professionnels.
                                  En promouvant l{"'"}ouverture culturelle et en organisant des événements festifs,
                                  nous créons une communauté dynamique et enrichissante pour nos étudiants.
                              </p>
                          </div>
                          <div className={"grid lg:grid-cols-3 gap-4 max-md:mb-24 mb-32 text-left"}>
                              <Card className={"bg-orange-500 hover:bg-orange-400"}>
                                  <CardHeader>
                                      <CardTitle className={"text-xl font-bold text-white"}>
                                          L{"'"}insertion profesionnelle
                                      </CardTitle>
                                      <CardDescription className={"text-white pt-2"}>
                                          Le GBIT œuvre pour favoriser l{"'"}insertion professionnelle des étudiants en
                                          proposant des simulations d{"'"}entretiens d{"'"}embauche et des rencontres
                                          avec
                                          des professionnels. Nous veillons également à promouvoir l{"'"}établissement
                                          afin qu{"'"}il soit reconnu par les entreprises et les institutions.
                                      </CardDescription>
                                  </CardHeader>
                              </Card>
                              <Card className={"bg-orange-500 hover:bg-orange-400"}>
                                  <CardHeader>
                                      <CardTitle className={"text-xl font-bold text-white"}>
                                          Les projets étudiants
                                      </CardTitle>
                                      <CardDescription className={"text-white pt-2"}>
                                          Le GBIT met à disposition les cadres juridique, comptable et matériel requis
                                          pour concrétiser divers projets, qu{"'"}ils relèvent des domaines sportifs
                                          (par exemple, l{"'"}organisation de tournois), culturels (par exemple, le
                                          théâtre)
                                          ou professionnels (par exemple, les missions pour les entreprises).
                                      </CardDescription>
                                  </CardHeader>
                              </Card>
                              <Card className={"bg-orange-500 hover:bg-orange-400"}>
                                  <CardHeader>
                                      <CardTitle className={"text-xl font-bold text-white"}>
                                          La vie culturelle
                                      </CardTitle>
                                      <CardDescription className={"text-white pt-2"}>
                                          Par exemple, le GBIT contribue à l{"'"}ouverture culturelle et internationale
                                          de l{"'"}établissement en facilitant l{"'"}organisation de voyages. De plus,
                                          le GBIT organise divers événements festifs tels que les soirées d{"'"}intégration et
                                          les bals de promo.
                                      </CardDescription>
                                  </CardHeader>
                              </Card>
                          </div>
                      </>
                  }>
                      <Image
                          src={`/images/flyer-gbit.png`}
                          alt="hero"
                          height={750}
                          width={1400}
                          className="mx-auto rounded-2xl object-cover h-full object-left-top"
                          draggable={false}
                      />
                  </ContainerScroll>
              </div>
          </div>
      </>
  );
}