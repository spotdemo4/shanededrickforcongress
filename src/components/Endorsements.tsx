import { For } from "solid-js";

import { ENDORSEMENTS } from "../content.ts";

export default function Endorsements() {
  return (
    <section class="section" id="endorsements">
      <div class="section-inner">
        <p class="eyebrow eyebrow-red">Endorsements</p>
        <h2>Trusted by Those Who Know Him Best</h2>
        <p class="lede">Which, per the Green Party, is no one. So we went with what we had.</p>
        <ul class="endorsements">
          <For each={ENDORSEMENTS}>
            {(item) => (
              <li class="endorsement">
                <span class="endorsement-stars" aria-hidden="true">
                  ★★★★★
                </span>
                <h3>{item.who}</h3>
                <p>{item.why}</p>
              </li>
            )}
          </For>
        </ul>
      </div>
    </section>
  );
}
