import { For } from "solid-js";

import { STATS } from "../content.ts";

export default function Stats() {
  return (
    <section class="stats" aria-label="By the numbers">
      <ul class="stats-inner">
        <For each={STATS}>
          {(stat) => (
            <li>
              <span class="stat-value">{stat.value}</span>
              <span class="stat-label">{stat.label}</span>
            </li>
          )}
        </For>
      </ul>
    </section>
  );
}
