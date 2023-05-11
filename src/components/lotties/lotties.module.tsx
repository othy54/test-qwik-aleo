import {
  component$,
  useStylesScoped$,
  useVisibleTask$,
  useSignal,
} from "@builder.io/qwik";
import styles from "./lotties.css?inline";
import lottie from "lottie-web";
import { animate } from "motion";

interface List {
  title?: string;
  content?: string;
}

interface ItemProps {
  listLotties?: string[];
  invert?: boolean;
  label?: string;
  title?: string;
  list?: Array<List>;
}

export default component$<ItemProps>((props) => {
  useStylesScoped$(styles);

  const step = useSignal(0);


  useVisibleTask$(() => {
    var animationLottie: any = lottie.loadAnimation;
    document
      .querySelector("." + props.label + "-item-0")
      ?.classList.add("item--active");

    const loadAnimation = () => {
      animationLottie = lottie.loadAnimation({
        container: document.querySelector("." + props.label)!,
        renderer: "svg",
        loop: false,
        autoplay: true,
        // path: `/lotties/${props.listLotties[step.value]}.json`
        path: "/lotties/ameliore-image.json",
      });
    }

    const anim = () => {
      var animation = animate(
        "." + props.label + "-item-" + step.value + " .spin-progress",
        { strokeDashoffset: 0 },
        { duration: 5, easing: "linear" }
      );
      animation.finished.then(() => {
        if (
          document.querySelector<HTMLElement>(
            "." + props.label + "-item-" + step.value + " .spin-progress"
          )!.style.strokeDashoffset === "0"
        ) {
          document.querySelector<HTMLElement>(
            "." + props.label + "-item-" + step.value + " .spin-progress"
          )!.style.strokeDashoffset = "66px";
          document
            .querySelector<HTMLElement>(
              "." + props.label + "-item-" + step.value
            )!
            .classList.remove("item--active");
          step.value++;
          if (step.value > 3) {
            step.value = 0;
          }
          document
            .querySelector<HTMLElement>(
              "." + props.label + "-item-" + step.value
            )!
            .classList.add("item--active");
          reloadAnimation();
          anim();
        }
      });
    };

    const reloadAnimation = () => {
      animationLottie.destroy()
      setTimeout(() => {
        loadAnimation()
      }, 500)
    }

    loadAnimation()
    anim()
  });

  //   const state = useStore({
  //     animationLottie: $(() => {
  //       lottie.loadAnimation({
  //         container: "",
  //       });
  //     }),
  //   });

  return (
    <>
      <div class="grid grid-cols-12">
        <div
          class={[
            "rounded-3xl p-20 column-lottie aspect-square order-2 lg:order-1 mt-8 lg:mt-0",
            props.invert
              ? "lg:order-2 col-span-12 lg:col-span-5 lg:col-start-7"
              : "lg:order-1 col-span-12 lg:col-span-4 lg:col-start-2",
          ]}
        >
          <div class={props.label}></div>
        </div>
        <div
          class={[
            "flex items-center order-1",
            props.invert
              ? "lg:order-1 col-span-12 lg:col-span-4 lg:col-start-2"
              : "col-span-12 lg:col-span-5 lg:col-start-7",
          ]}
        >
          <div>
            <h2 class="italic font-black text-[32px] lg:text-[40px] text-accent-300">
              {props.title}
            </h2>
            <ul class="mt-6 flex flex-col gap-y-6">
              {props.list!.map((item, i) => (
                <>
                  <li
                    key={"visibility-" + i}
                    class={[
                      "flex gap-x-4 item transition-all duration-300",
                      props.label + "-item-" + i + " " + props.label + "-item",
                    ]}
                  >
                    <svg
                      class="flex-shrink-0"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10.5"
                        transform="rotate(-90 12 12)"
                        stroke="#280837"
                        stroke-width="3"
                      ></circle>
                      <circle
                        cx="12"
                        cy="12"
                        r="10.5"
                        transform="rotate(-90 12 12)"
                        stroke="#A2CCEE"
                        stroke-width="3"
                        class="spin-progress"
                        style="stroke-dashoffset: 66px; stroke-dasharray: 66px;"
                      ></circle>
                    </svg>
                    <div class="min-h-0">
                      <h3 class="italic font-black text-xl text-accent-500">
                        {item.title}
                      </h3>
                      <div class="wrapper-content">
                        <p class="mt-2 font-medium text-accent-500 overflow-hidden min-h-0">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
});
