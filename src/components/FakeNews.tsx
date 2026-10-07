import { For } from "solid-js";

import { ARTICLE, CLAIMS } from "../content.ts";

export default function FakeNews() {
  return (
    <section class="section section-navy" id="fake-news">
      <div class="section-inner">
        <p class="eyebrow">★ Truth Alert ★</p>
        <h2>The Fake News Media Is Attacking Shane</h2>
        <p class="lede">
          The “journalists” at {ARTICLE.outlet} published a so-called “news article” about Shane,
          full of so-called “facts,” “public records,” and “video of the actual event.” Very
          suspicious. Read it yourself and see how FAKE it is.
        </p>

        <a class="clipping" href={ARTICLE.url} target="_blank" rel="noopener">
          <span class="stamp" aria-hidden="true">
            Fake News!
          </span>
          <span class="clipping-outlet">{ARTICLE.outlet}</span>
          <span class="clipping-lede">{ARTICLE.lede}</span>
          <span class="clipping-byline">
            By {ARTICLE.author} · {ARTICLE.date}
          </span>
          <span class="clipping-cta">Read the fake news →</span>
        </a>

        <h3 class="claims-heading">What the Fake News Claims — and the TRUTH</h3>
        <ol class="claims">
          <For each={CLAIMS}>
            {(item) => (
              <li class="claim">
                <p class="claim-text">
                  <span class="claim-tag">They say</span>
                  {item.claim}
                </p>
                <p class="claim-rebuttal">
                  <span class="claim-tag claim-tag-red">Sad!</span>
                  {item.rebuttal}
                </p>
              </li>
            )}
          </For>
        </ol>
        <p class="fine-print fine-print-light">
          In fairness to the fake news, the same article notes that no allegation suggests Dedrick
          violated campaign finance or election laws. Which is exactly what fake news would say.
        </p>
      </div>
    </section>
  );
}
