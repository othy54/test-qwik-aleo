import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

// eslint-disable-next-line qwik/loader-location
export const getContentsPost = routeLoader$(async (requestEvent) => {
  const res = await fetch(
    `https://nancomcy54-blogaleoapi.pf3000.wpserveur.net/wp-json/wp/v2/posts?slug=${requestEvent.params.slug}`
  );
  const post = await res.json();
  return post;
});

export default component$(() => {
  const signal = getContentsPost();
  useStylesScoped$(styles);

  return (
    <article class="section py-20">
      <div class="row">
        <div class="container-article">
          <h1 class="text-[56px] italic leading-[110%] font-extrabold text-primary-500 mb-8">
            {signal.value[0].title.rendered}
          </h1>
          <div>
            <p dangerouslySetInnerHTML={signal.value[0].content.rendered}></p>
          </div>
        </div>
      </div>
    </article>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const contents = resolveValue(getContentsPost);
  return {
    title: contents[0].yoast_head_json.title,
    meta: [
      {
        name: "description",
        content: contents[0].yoast_head_json.description,
      },
    ],
  };
};
