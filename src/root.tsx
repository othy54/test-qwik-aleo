import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";

import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/800.css";
import "@fontsource/nunito/900.css";
import "@fontsource/nunito/900-italic.css";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KL52VP3');`;

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <QwikPartytown forward={["dataLayer.push"]} />
        <script async type="text/partytown" dangerouslySetInnerHTML={script} />
        <script
          async
          type="text/partytown"
          src="https://www.googleoptimize.com/optimize.js?id=OPT-KTZZC5K"
        ></script>

        <RouterHead />
      </head>
      <body lang="fr" data-barba="wrapper">
        <div
          class="transition-el h-screen w-full fixed top-0 left-0 bg-primary-500 z-50"
          style="clip-path: inset(0 100% 0 0)"
        ></div>
        <main data-barba="container">
          <RouterOutlet />
          <ServiceWorkerRegister />
        </main>
      </body>
    </QwikCityProvider>
  );
});
