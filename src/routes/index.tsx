import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import styles from "./home.css?inline";

import Header from "~/components/starter/header/header";
import Lotties from "~/components/lotties/lotties.module";
import Testimonial from "~/components/testimonial/testimonial.module";

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({
    newspapers: [
      {
        link: "https://www.lefigaro.fr/services/aleo-l-agence-web-n01-dans-la-creation-de-sites-internet-pour-les-tpe-pme-20210716",
        src: "/img/logo-figaro.svg",
        alt: "logo figaro",
      },
      {
        link: "https://www.bfmtv.com/economie/professionnels/aleo-l-agence-de-communication-pour-tpe-pme-qui-va-propulser-votre-activite_AN-202107290333.html",
        src: "/img/logo-bfm.svg",
        alt: "logo bfm",
      },
      {
        link: "https://www.challenges.fr/entreprise/aleo-l-agence-de-communication-100-dediee-aux-tpe-pme_773971",
        src: "/img/logo-challenges.svg",
        alt: "logo challenges",
      },
      {
        link: "https://www.latribune.fr/supplement/comment-l-agence-web-aleo-souhaite-booster-la-presence-en-ligne-des-tpe-pme-890514.html",
        src: "/img/logo-la-tribune.svg",
        alt: "logo la tribune",
      },
      {
        link: "https://www.forbes.fr/brandvoice/10000-entreprises-conquises-pour-aleo-lagence-web-n1-des-tpe-pme/",
        src: "/img/logo-forbes.svg",
        alt: "logo forbes",
      },
    ],

    activities: [
      {
        link: "/site-internet",
        emoji: "/img/emojis/emoji-laptop.png",
        label: "Créer ton site web",
        alt: "emoji laptop",
      },
      {
        link: "/",
        emoji: "/img/emojis/emoji-megaphone.png",
        label: "Conquérir plus de clients",
        alt: "emoji megaphone",
      },
      {
        link: "/",
        emoji: "/img/emojis/emoji-hearts.png",
        label: "Développer tes réseaux sociaux",
        alt: "emoji hearts",
      },
      {
        link: "/",
        emoji: "/img/emojis/emoji-pen.png",
        label: "Améliorer ton image",
        alt: "emoji pen",
      },
      {
        link: "/",
        emoji: "/img/emojis/emoji-chat.png",
        label: "Échanger gratuitement avec nos experts",
        alt: "emoji chat",
      },
    ],

    lottieVisibility: {
      listLotties: [
        "ameliore-image",
        "multiplie-contacts",
        "notoriete",
        "fidelisation",
      ],
      list: [
        {
          title: "Améliore ton image",
          content:
            "Améliorer la manière dont tes clients te perçoivent te permettra de sortir du lot et de dépasser la concurrence.",
        },
        {
          title: "Multiplie tes contacts",
          content:
            "Les demandes de devis sont le moteur du développement commercial de ton entreprise. Avec ALEO, génère un maximum d’opportunités.",
        },
        {
          title: "Augmente ta notoriété",
          content:
            "Une bonne notoriété est indispensable pour ton business. Alors sois présent et actif pour marquer les esprits de tes futurs clients !",
        },
        {
          title: "Fidélise tes clients",
          content:
            "Loin des yeux, loin du cœur… Noue une relation durable et de confiance avec ta clientèle grâce à une communication régulière et des actions ciblées.",
        },
      ],
      title: "Propulse ta visibilité et atteins tes objectifs",
    },

    lottieCommunication: {
      listLotties: ["team", "tarifs", "sans-engagement", "gestion-distance"],
      list: [
        {
          title: "Une équipe d’experts à ton service",
          content:
            "Nos experts ALEO, spécialisés dans chaque domaine, s’imprègnent de ton identité pour t’accompagner dans tous tes projets.",
        },
        {
          title: "Les meilleurs tarifs du marché",
          content:
            "Les solutions les plus attractives du marché pour garantir un accès à la communication à tous les professionnels.",
        },
        {
          title: "Des offres sans engagement",
          content:
            "Pour communiquer en toute liberté, ALEO te permet d’adapter la durée de tes offres selon tes besoins et ton budget.",
        },
        {
          title: "Une gestion à distance sur tout le territoire national",
          content:
            "Sur Terre (ou sur toute autre planète), l’ère du digital règne. Raison pour laquelle notre agence de communication met un point d’honneur à créer une relation sans frontières qui garantira ton plus grand confort.",
        },
      ],
      title: "Crée le big bang dans ta communication",
    },

    ctaSteps: [
      {
        img: "https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683883492/etape-1_b8ahdu.png",
        title: "Découverte",
        content:
          "Obtiens un RDV téléphonique gratuit de 10 à 15 minutes pour parler de ton projet",
      },
      {
        img: "https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683883492/etape-2_d5txpv.png",
        title: "Conseil",
        content: "Proposition des offres les plus adaptés",
      },
      {
        img: "https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683883492/etape-3_hghzun.png",
        title: "Lancement",
        content:
          "3, 2, 1… Deviens Aleonaute et attache ta ceinture ! C’est le moment de propulser ton activité",
      },
      {
        img: "https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683883492/etape-4_rnnzg4.png",
        title: "Suivi",
        content:
          "Bénéficie d’un accompagnement personnalisé tout au long de ton projet",
      },
    ],
  });

  return (
    <>
      <section class="section section-hero w-full bg-primary-500">
        <div class="container relative">
          <Header />

          <div class="row">
            <div class="grid grid-cols-12">
              <div class="col-span-12 lg:col-span-6 relative pb-[220px] lg:pb-[100px]">
                <div class="mt-40 lg:mt-52">
                  <h1 class="uppercase text-xs font-extrabold tracking-[0.12em] text-white">
                    L'agence de communication des Pros
                  </h1>
                  <h2 class="mt-4 italic font-black text-[30px] lg:text-[55px] leading-[105%] text-white">
                    ALEO, la communication enfin accessible à toutes les
                    entreprises !
                  </h2>
                  <button class="mt-8 btn-tertiary-white">
                    Prend rendez-vous gratuitement
                  </button>
                </div>
                <div class="wrapper-see-videos w-fit-content absolute bottom-0 right-0 translate-y-1/2 hidden lg:block">
                  <div class="relative">
                    <img
                      class="camera-video absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/img/icon-camera.svg"
                      alt="icone camera"
                      width={68}
                      height={68}
                    />
                    <img
                      class="circle-videos"
                      src="/img/circle-voir-videos.svg"
                      alt="cercle voir vidéos"
                      width={156}
                      height={156}
                    />
                  </div>
                </div>
              </div>
              <div class="col-span-12 lg:col-span-6 relative">
                <Image
                  src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto,q_60,w_350/v1683726098/denis-hero-home.png"
                  class="absolute -bottom-32"
                  priority={true}
                  breakpoints={[350, 700, 674, 1490]}
                  height={626}
                  width={674}
                  sizes="(max-width:768px) 350px, (max-width:1536px) 600px, (max-width:1920px) 674px, 1490px"
                  alt="denis"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ACTIVITE  */}

      <section class="section section-activite py-32 rounded-b-[80px]">
        <div class="row">
          <div class="container wrapper-talk-about pt-12 pb-[68px] rounded-t-[48px] overflow-hidden">
            <p class="font-extrabold text-sm text-center uppercase text-accent-700 tracking-[0.08em]">
              Ils parlent de nous
            </p>
            <ul class="flex gap-6 mt-7 marquee">
              {state.newspapers.concat(state.newspapers).map((item, i) => (
                <li class="flex-shrink-0" key={"newspaper-" + i}>
                  <a href={item.link} target="_blank">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={248}
                      height={100}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div class="row mt-20">
          <div class="container">
            <p class="font-extrabold text-sm text-center uppercase text-accent-700 tracking-[0.08em]">
              POUR BOOSTER TON ACTIVITÉ, TU PEUX :
            </p>
            <div class="flex flex-wrap justify-center max-w-[850px] mx-auto gap-4 mt-10">
              {state.activities.map((activity, i) => (
                <div key={"activity-" + i} class="group w-full lg:w-[unset]">
                  <a
                    class="flex  items-start lg:items-center bg-accent-100 py-6 px-8 rounded-2xl gap-4 transition-[background-color] duration-300 group-hover:bg-purple-brand"
                    href={activity.link}
                  >
                    <img
                      src={activity.emoji}
                      alt={activity.alt}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                    <h3 class="italic font-black text-purple-brand text-xl  lg:text-2xl transition-[color] duration-300 group-hover:text-accent-500">
                      {" "}
                      {activity.label}{" "}
                    </h3>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION DECOLLAGE  */}

      <section class="bg-purple-brand relative overflow-hidden z-[2]">
        <img
          class="absolute -top-10 -right-10 blur-[110px]"
          src="/img/blobs-blur.svg"
          loading="lazy"
          alt="blob blurs"
          width={666}
          height={557}
        />
        <div class="section section-decollage pt-40 pb-40 overflow-hidden relative z-[4]">
          <div class="row">
            <div class="container">
              <div class="grid grid-cols-12">
                <div class="col-span-12 lg:col-span-5 lg:col-start-2 order-2 lg:order-1 mt-20 lg:mt-0">
                  <p class="text-accent-200 font-extrabold text-xs uppercase tracking-[0.12em]">
                    3, 2, 1 ... DÉCOLLAGE
                  </p>
                  <h2 class="mt-4 italic font-black text-3xl lg:text-5xl text-accent-500 leading-[108%]">
                    À partir de{" "}
                    <span class="text-white">
                      49 € <sup>HT/mois </sup>
                    </span>
                    et sans engagement
                  </h2>
                  <div class="mt-4">
                    <p class="font-medium text-lg text-accent-200 leading-[156%]">
                      Indépendant, petite ou moyenne entreprise, découvre ALEO,
                      l’offre qui va révolutionner la manière dont tu fais ta
                      pub.
                    </p>
                    <p class="mt-2 font-medium text-lg text-accent-200 leading-[156%]">
                      Des solutions digitales, professionnelles et clés en main
                      pour booster ton activité.
                    </p>
                    <p class="mt-2 font-medium text-lg text-accent-200 leading-[156%]">
                      Attache ta ceinture !
                    </p>
                  </div>
                  <div class="relative w-fit-content">
                    {/* <img
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/img/belt.png"
                      alt="belt off"
                      loading="lazy"
                      width={137}
                      height={27}
                    /> */}
                    <Image
                      src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683895509/belt_uzbyzw.png"
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      height={27}
                      width={137}
                      alt="belt off"
                    />
                    {/* <img
                      class="relative z-[2] belt-on opacity-0"
                      src="/img/belt-on.png"
                      alt="belt off"
                      loading="lazy"
                      width={169}
                      height={69}
                    /> */}
                    <Image
                      src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683895509/belt-on_lnmd5t.png"
                      class="relative z-[2] belt-on opacity-0"
                      height={69}
                      width={169}
                      alt="belt"
                    />
                  </div>
                </div>
                <div class="col-span-12 lg:col-span-6 relative order-1 lg:order-2">
                  <Image
                    src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683789845/visuel-decollage.png"
                    class="lg:absolute lg:right-[-120px] scale-[1.2] lg:scale-1"
                    breakpoints={[775, 1550]}
                    height={553}
                    width={775}
                    sizes="(max-width:1536px) 600px, 775px"
                    alt="Mockup science de la beauté"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="row py-[200px] my-20">
            <div class="container">
              <div class="italic font-black text-[44px] lg:text-[66px] text-accent-100 text-center relative">
                + de <span class="ten-k">10 000</span> entreprises accompagnées
              </div>
            </div>
          </div>

          <div class="row">
            <div class="container">
              <Lotties
                listLotties={state.lottieVisibility.listLotties}
                list={state.lottieVisibility.list}
                title={state.lottieVisibility.title}
                label={"lottie-1"}
              />
            </div>
          </div>

          <div class="row mt-40">
            <div class="container">
              <Lotties
                listLotties={state.lottieCommunication.listLotties}
                list={state.lottieCommunication.list}
                title={state.lottieCommunication.title}
                label={"lottie-2"}
                invert={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ARTISAN  */}

      <section class="-mt-10 hidden lg:block">
        <Image
          src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto,q_50/v1683874941/artisan.png"
          class="w-full rounded-b-[56px] artisan-picture"
          breakpoints={[1920, 2880]}
          height={1105}
          width={1905}
          sizes="(max-width:1920px) 1920px, 2880px"
          alt="artisan"
        />
      </section>

      {/* SECTION SOLUTIONS  */}

      <section class="section section-solutions mt-28">
        <div class="row">
          <div class="container">
            <h2 class="italic font-black text-purple-brand text-center text-[32px] lg:text-[40px] leading-[110%]">
              Nos offres clés en main <br class="hidden lg:block" /> et sans
              engagement
            </h2>
            <div class="grid grid-cols-1 gap gap-20 md:gap-8 md:grid-cols-12 mt-20">
              <div class="section-solutions__card md:col-span-7">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683875357/mockup-solution-1.png"
                    breakpoints={[302, 538]}
                    height={429}
                    width={538}
                    sizes="(max-width: 768px) 302px, 538px"
                    alt="mockup pc"
                  />
                </div>

                <div>
                  <h3 class="section-solutions__card-title">
                    Site web et référencement
                  </h3>
                  <p class="section-solutions__card-text">
                    Booste ton activité grâce à ton site internet vitrine clé en
                    main.
                  </p>
                  <div class="section-solutions__card-link">
                    <span>Découvrir</span>
                  </div>
                </div>
              </div>

              <div class="section-solutions__card md:col-span-5">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683875357/mockup-solution-2.png"
                    breakpoints={[302, 414]}
                    height={392}
                    width={414}
                    sizes="(max-width: 768px) 302px ,414px"
                    alt="mockup pc"
                  />
                </div>
                <div>
                  <h3 class="section-solutions__card-title">
                    Publicité sur Google
                  </h3>
                  <p class="section-solutions__card-text">
                    Génère plus de contacts en passant de visible à
                    incontournable.
                  </p>
                  <div class="section-solutions__card-link">
                    <span>Découvrir</span>
                  </div>
                </div>
              </div>
              <div class="section-solutions__card md:col-span-5">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683875358/mockup-solution-3.png"
                    breakpoints={[302, 628]}
                    height={535}
                    width={628}
                    sizes="(max-width: 768px) 302px ,628px"
                    alt="mockup pc"
                  />
                </div>
                <div>
                  <h3 class="section-solutions__card-title">Réseaux sociaux</h3>
                  <p class="section-solutions__card-text">
                    Développe ta notoriété et gagne en crédibilité pour attirer
                    de nouveaux clients.
                  </p>
                  <div class="section-solutions__card-link">
                    <span>Découvrir</span>
                  </div>
                </div>
              </div>
              <div class="section-solutions__card md:col-span-7">
                <div>
                  <Image
                    src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683875357/mockup-solution-4.png"
                    breakpoints={[302, 399]}
                    height={419}
                    width={399}
                    sizes="(max-width: 768px) 302px, 399px"
                    alt="mockup pc"
                  />
                </div>
                <div>
                  <h3 class="section-solutions__card-title">Graphisme</h3>
                  <p class="section-solutions__card-text">
                    Laisse une image stratosphérique dans l’esprit de tes
                    clients avec une identité visuelle unique.
                  </p>
                  <div class="section-solutions__card-link">
                    <span>Découvrir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TESTIMONIAL  */}

      <section class="section section-testimonial mt-52">
        <div class="row">
          <div class="container">
            <Testimonial />
          </div>
        </div>
      </section>

      {/* SECTION CTA  */}

      <section class="section section-cta pt-40 pb-40 lg:pt-56 lg:pb-64 relative">
        {/* <picture>
            <source :srcset="bgAvif" type="image/avif" />
            <source :srcset="bgWebp" type="image/webp" />
            <img class="object-cover w-full absolute top-0 left-0 h-full z-[-1] lg:object-right"
                src="../assets/images/bg-cta.png" alt="etapes" loading="lazy" width="1905" height="950" />
        </picture> */}
        <div class="row">
          <div class="container">
            <h2 class="italic font-black text-[40px] text-accent-500 text-center">
              Choisir ALEO ?
            </h2>
            <p class="italic font-black text-[32px] text-accent-500 text-center mt-2">
              Rien de plus simple :
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-11 lg:w-[80%] mx-auto mt-10">
              {state.ctaSteps.map((step, i) => (
                <div key={"step-" + i}>
                  <Image
                    src={step.img}
                    breakpoints={[80]}
                    height={97}
                    width={80}
                    sizes="80px"
                    alt="mockup pc"
                  />
                  <p class="italic text-primary-500 font-black text-xl mt-4 text-center lg:text-left">
                    {step.title}
                  </p>
                  <p class="font-medium text-accent-500 mt-4 text-center lg:text-left">
                    {step.content}
                  </p>
                </div>
              ))}
            </div>

            <button class="mx-auto block mt-8 btn-primary">Je me lance</button>
          </div>
        </div>
      </section>

      {/* SECTION FOOTER  */}

      <footer>
        <section class="section section-footer bg-purple-brand pt-16 pb-14 rounded-t-[40px] -mt-12 relative">
          <div class="container">
            <div class="row">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <img
                    loading="lazy"
                    src="/img/logo-aleo-slogan.svg"
                    alt="logo aleo slogan"
                    class="mx-auto lg:ml-0 lg:w-[340px]"
                    width={340}
                    height={116}
                  />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div>
                    <p class="section-footer__list-title">Solutions</p>
                    <ul class="section-footer__list-items">
                      <li>Site web et sa visibilité</li>
                      <li>Publicité sur Google</li>
                      <li>Réseaux sociaux</li>
                      <li>Logo et supports imprimés</li>
                    </ul>
                  </div>
                  <div>
                    <p class="section-footer__list-title">À propos</p>
                    <ul class="section-footer__list-items">
                      <li>ALEO</li>
                      <li>L'équipage</li>
                      <li>
                        <a
                          href="https://jobs.aleo.agency/"
                          target="_blank"
                          rel="noopener"
                          aria-label="lien jobs"
                        >
                          ALEO Jobs
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p class="section-footer__list-title">En savoir +</p>
                    <ul class="section-footer__list-items">
                      <li>Témoignages</li>
                      <li>
                        <a
                          href="https://blog.aleo.agency/"
                          target="_blank"
                          rel="noopener"
                          aria-label="lien blog"
                        >
                          Blog
                        </a>
                      </li>
                      <li>FAQ</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-10 lg:mt-16">
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="lg:order-2">
                  <p class="font-extrabold text-center lg:text-left text-white">
                    Se lancer dans l’expérience ALEO dès maintenant
                  </p>
                </div>
                <div class="lg:order-1">
                  <div class="flex justify-center items-start lg:justify-start gap-x-8">
                    <a
                      href="https://www.facebook.com/aleo.agency/"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="link facebook"
                    >
                      <img
                        width="30"
                        height="30"
                        src="/img/facebook.svg"
                        loading="lazy"
                        alt="logo facebook"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/aleo.agency/?hl=fr"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="link facebook"
                    >
                      <img
                        width="30"
                        height="30"
                        src="/img/instagram.svg"
                        loading="lazy"
                        alt="logo instagram"
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/aleo-agency/"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="link linkedin"
                    >
                      <img
                        width="30"
                        height="30"
                        src="/img/linkedin.svg"
                        loading="lazy"
                        alt="logo linkedin"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC4GBqxVpyYLiZGHRiA2RbPQ"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="link youtube"
                    >
                      <img
                        width="30"
                        height="30"
                        src="/img/youtube.svg"
                        loading="lazy"
                        alt="logo youtube"
                      />
                    </a>
                  </div>
                  <p class="font-medium text-sm text-white mt-5 text-center lg:text-left">
                    2023 ALEO. Tous droits réservés — Mentions légales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Aleo in Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
