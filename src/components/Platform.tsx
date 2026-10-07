import { For } from "solid-js";

import { PLATFORM } from "../content.ts";

export default function Platform() {
  return (
    <section class="section section-blue" id="platform">
      <div class="section-inner">
        <p class="eyebrow eyebrow-yellow">The Platform</p>
        <h2 class="section-title loud">Coming Soon</h2>
        <p class="lede">
          Shane has not published a platform. Until he does, here is everything he has said about
          the issues on the record, in full, from his April 25 nominating convention.
        </p>
        <div class="platform-grid">
          <For each={PLATFORM}>
            {(item) => (
              <figure class="platform-card">
                <figcaption>{item.topic}</figcaption>
                <blockquote>“{item.quote}”</blockquote>
              </figure>
            )}
          </For>
        </div>
        <p class="updated">Last updated: April 25, 2026</p>
      </div>
    </section>
  );
}
