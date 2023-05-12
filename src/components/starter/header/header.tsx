import { component$, useStylesScoped$ } from "@builder.io/qwik";
import Logo from "../../logo/logo.module";
import styles from "./header.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  return (
    <header class="pt-5 absolute top-0 left-0 w-full">
      <div class="flex justify-between items-center w-full">
        <div>
          <Logo color="fill-white" />
        </div>
        <div class="hidden lg:block">
          <nav>
            <ul class="menu-wrapper">
              <li>Solutions</li>
              <li>Témoignages</li>
              <li>À propos</li>
              <li>FAQ</li>
            </ul>
          </nav>
        </div>
        <div>
          <button class="hidden lg:inline-block btn-primary">
            Contacte-nous
          </button>
          <button class="btn-tertiary-white">Rappel gratuit</button>
        </div>
      </div>
    </header>
  );
});
