import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

// eslint-disable-next-line qwik/loader-location
export const getContentsPost = routeLoader$(async () => {
  const res = await fetch(
    `https://nancomcy54-blogaleoapi.pf3000.wpserveur.net/wp-json/wp/v2/posts`
  );
  const post = await res.json();
  return post;
});

export default component$(() => {
  useStylesScoped$(styles);
  const signal = getContentsPost();
  return (
    <>
      <section class="px-20">
        <div> Liste des articles </div>
        <div class="grid grid-cols-4 gap-4 mt-4">
          {signal.value.map((post: any, i: number) => (
            <div
              class="border-[1px] border-gray-aleo-200  p-8 rounded-lg"
              key={"post-" + i}
            >
              <a href={post.slug}>
                <img
                  class="object-cover h-[280px]"
                  src={
                    post.featured_media_src_url || "https://placehold.co/4000"
                  }
                  alt="thumbnail post"
                  width={400}
                  height={280}
                />
              </a>

              <h2 class="text-2xl mt-6 font-semibold text-primary-500">
                <a href={post.slug}>{post.title.rendered}</a>
              </h2>
              <div class="mt-4 text-purple-brand font-medium">
                <p dangerouslySetInnerHTML={post.excerpt.rendered}></p>
              </div>
              <a href={post.slug} class="font-semibold text-primary-500">
                Lire plus
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
});
