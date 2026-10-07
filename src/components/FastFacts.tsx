import { For } from "solid-js";

import { FAST_FACTS } from "../content.ts";
import Highlight from "./Highlight.tsx";

export default function FastFacts() {
  return (
    <section class="facts" aria-labelledby="facts-heading">
      <div class="facts-inner">
        <h2 class="facts-heading" id="facts-heading">
          Fast Facts
        </h2>
        <dl class="facts-list">
          <For each={FAST_FACTS}>
            {(fact) => (
              <div class="fact">
                <dt>{fact.label}</dt>
                <dd>
                  <Highlight text={fact.value} />
                </dd>
              </div>
            )}
          </For>
        </dl>
      </div>
    </section>
  );
}
