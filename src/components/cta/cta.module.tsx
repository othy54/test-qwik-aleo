import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

export default component$(() => {
  const state = useStore({
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

    bgCta: "/img/1kb.jpg",
  });

  useVisibleTask$(() => {
    import("../../assets/images/bg-cta.png?format=webp").then(
      ({ default: Image }) => {
        state.bgCta = Image;
      }
    );
  });
  return (
    <section
      class="section section-cta pt-40 pb-40 lg:pt-56 lg:pb-64 relative"
      style={`background-image: url(${state.bgCta})`}
    >
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
  );
});
