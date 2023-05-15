import {
  component$,
  useResource$,
  Resource,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const posts = useResource$<any[]>(async () => {
    const res = await fetch(
      "https://nancomcy54-blogaleoapi.pf3000.wpserveur.net/wp-json/wp/v2/posts"
    );
    const data = res.json();
    return data;
  });
  return (
    <>
      <section class="px-20">
        <div> Liste des articles </div>
        <Resource
          value={posts}
          onResolved={(data) => {
            return (
              <div class="grid grid-cols-4 gap-4 mt-4">
                {data.map((post, i) => (
                  <div
                    class="border-[1px] border-gray-aleo-500 p-8 rounded-lg"
                    key={i}
                  >
                    <img
                      class="object-cover h-[280px]"
                      src={
                        post.featured_media_src_url ||
                        "https://placehold.co/4000"
                      }
                      alt="hey"
                      width={400}
                      height={80}
                    />

                    <h2 class="text-2xl mt-6 font-semibold text-primary-500">
                      <a href={post.id}>{post.title.rendered}</a>
                    </h2>
                    <div class="mt-4 text-purple-brand font-medium">
                      <p dangerouslySetInnerHTML={post.excerpt.rendered}></p>
                    </div>
                    <a href={post.id} class="font-semibold text-primary-500">
                      Lire plus
                    </a>
                  </div>
                ))}
              </div>
            );
          }}
        />
      </section>
    </>
  );
});
