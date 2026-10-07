import { For } from "solid-js";

import { PAID_FOR_BY, SOURCES } from "../content.ts";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer-inner">
        <div class="disclaimer">
          <p>
            <strong>This website is a parody.</strong> It is satire and commentary about a candidate
            for public office. It is not affiliated with, authorized by, or paid for by Shane
            Dedrick, any candidate, any candidate’s committee, the Green Party, or the Republican
            Party. No money is collected on this site.
          </p>
          <p class="paid-for">
            Paid for by {PAID_FOR_BY}. Not authorized by any candidate or candidate’s committee.
          </p>
        </div>
        <div>
          <h2 class="footer-heading">Sources (the “fake news”)</h2>
          <ul class="sources">
            <For each={SOURCES}>
              {(source) => (
                <li>
                  <a href={source.url} target="_blank" rel="noopener">
                    {source.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </footer>
  );
}
