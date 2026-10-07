import { For } from "solid-js";

import { ARTICLE, RECORD } from "../content.ts";
import Highlight from "./Highlight.tsx";
import Starburst from "./Starburst.tsx";

export default function InTheNews() {
  return (
    <section class="section" id="news">
      <div class="section-inner">
        <p class="eyebrow">In the News</p>
        <h2 class="section-title">Setting the Record Straight</h2>
        <p class="lede">
          Shane’s campaign has received statewide media attention. Here is what was reported, and
          what the record shows.
        </p>

        <a class="clipping" href={ARTICLE.url} target="_blank" rel="noopener">
          <Starburst class="starburst-news">
            As Seen
            <br />
            on TV!
          </Starburst>
          <span class="clipping-outlet">{ARTICLE.outlet}</span>
          <span class="clipping-lede">{ARTICLE.lede}</span>
          <span class="clipping-byline">
            By {ARTICLE.author} · {ARTICLE.date}
          </span>
          <span class="clipping-cta">Read the full article →</span>
        </a>

        <ol class="record">
          <For each={RECORD}>
            {(item) => (
              <li class="record-item">
                <p class="record-report">
                  <span class="record-tag">Reported</span>
                  <Highlight text={item.report} />
                </p>
                <p class="record-fact">
                  <span class="record-tag record-tag-red">The Record</span>
                  {item.record}
                </p>
              </li>
            )}
          </For>
        </ol>
        <p class="fine-print">
          The same report notes that no allegation suggests Dedrick violated campaign finance or
          election laws, and that there is no direct evidence he coordinated with Republicans.
        </p>
      </div>
    </section>
  );
}
