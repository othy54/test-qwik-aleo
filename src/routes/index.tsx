import { component$, useStylesScoped$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import styles from "./index-scoped-style.css?inline";

import Header from "~/components/starter/header/header";
// import Footer from '~/components/starter/footer/footer';

export default component$(() => {
  useStylesScoped$(styles);
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
                  src="https://res.cloudinary.com/dhnxwmjgn/image/upload/f_auto/v1683726098/denis-hero-home.png"
                  class="absolute -bottom-32"
                  priority={true}
                  breakpoints={[350, 700, 745, 1490]}
                  height={720}
                  width={669}
                  sizes="(max-width:768px) 350px, (max-width:1536px) 600px, 745px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
