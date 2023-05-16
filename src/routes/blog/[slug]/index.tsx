import {
  component$,
  useResource$,
  Resource,
  useStylesScoped$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import styles from "./index.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const { params } = useLocation();
  const contents = useResource$<any>(async () => {
    const res = await fetch(
      `https://nancomcy54-blogaleoapi.pf3000.wpserveur.net/wp-json/wp/v2/posts?slug=${params.slug}`
    );
    const data = res.json();
    return data;
  });
  return (
    <article class="section py-20">
      <div class="row">
        <div class="container-article">
          <Resource
            value={contents}
            onResolved={(post) => {
              return (
                <>
                  <h1 class="text-[56px] italic leading-[110%] font-extrabold text-primary-500 mb-8">
                    {post[0].title.rendered}
                  </h1>
                  <div>
                    <p dangerouslySetInnerHTML={post[0].content.rendered}></p>
                  </div>
                </>
              );
            }}
          />
        </div>
      </div>
    </article>
  );
});
