import { component$, useStylesScoped$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import styles from "./home.css?inline";

import Header from "~/components/starter/header/header";
import Lotties from "~/components/lotties/lotties.module";
// import Footer from '~/components/starter/footer/footer';

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
  });

  return (
    <>
      <section class="section section-hero w-full bg-primary-500">
        <div class="container relative">
          <Header />

          <div class="row">
            <div class="grid grid-cols-12">
              <div class="col-span-12 lg:col-span-6 relative pb-[220px] lg:pb-[100px]">
                <div class="mt-52">
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
                  src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_webp,q_60/v1683726098/denis-hero-home.png"
                  class="absolute -bottom-32"
                  breakpoints={[350, 700, 674, 1490]}
                  height={626}
                  width={674}
                  sizes="(max-width:768px) 350px, (max-width:1536px) 600px, 745px"
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
                  {/* <Belt client:visible /> */}
                  <div class="relative w-fit-content">
                    <img
                      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      src="/img/belt.png"
                      alt="belt off"
                      loading="lazy"
                      width={137}
                      height={27}
                    />

                    <img
                      class="relative z-[2] belt-on opacity-0"
                      src="/img/belt-on.png"
                      alt="belt off"
                      loading="lazy"
                      width={169}
                      height={69}
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
              {/* <Animation label="lottie-1" client:visible /> */}
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
              {/* <Animation
                list-lotties={lotties}
                invert={true}
                list={bigBang}
                title="Crée le big bang dans ta communication"
                label="lottie-2"
                client:visible
              /> */}
            </div>
          </div>
        </div>
      </section>
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
