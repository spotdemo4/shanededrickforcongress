import { For } from "solid-js";

import { ISSUES } from "../content.ts";

export default function Issues() {
  return (
    <section class="section section-cream" id="issues">
      <div class="section-inner">
        <p class="eyebrow eyebrow-red">The Issues</p>
        <h2>Where Shane Stands*</h2>
        <p class="lede">
          Every position below comes straight from Shane’s own words at his nominating convention.
          <span class="fine-print"> *Camera off. Exact location unknown.</span>
        </p>
        <div class="issue-grid">
          <For each={ISSUES}>
            {(issue) => (
              <article class="issue">
                <h3>{issue.title}</h3>
                <blockquote>“{issue.quote}”</blockquote>
                <p>{issue.body}</p>
              </article>
            )}
          </For>
        </div>
      </div>
    </section>
  );
}
