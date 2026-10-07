import { For } from "solid-js";

import jpg from "../assets/parade.jpg";
import webp from "../assets/parade.webp";
import { EXPERIENCE, PARADE_POST } from "../content.ts";
import Highlight from "./Highlight.tsx";
import Starburst from "./Starburst.tsx";

export default function Experience() {
  return (
    <section class="section section-cream" id="experience">
      <div class="section-inner">
        <p class="eyebrow">Experience</p>
        <h2 class="section-title">Proven Campaign Experience</h2>
        <p class="lede">
          Shane is no stranger to the campaign trail. In 2023, he was on the ground for a{" "}
          <mark class="highlight">
            <strong>Republican</strong>
          </mark>{" "}
          presidential campaign.
        </p>
        <div class="experience">
          <figure class="parade">
            <div class="photo-frame photo-frame-tilt-left">
              <picture>
                <source srcset={webp} type="image/webp" />
                <img
                  src={jpg}
                  width="1600"
                  height="1200"
                  loading="lazy"
                  alt="Marchers in Fire Biden T-shirts carrying a President 2024 Perry Johnson banner and signs in a rainy Fourth of July parade for Perry Johnson’s Republican presidential campaign. Shane Dedrick is circled, holding a Perry Johnson sign."
                />
              </picture>
              <svg class="annotation" viewBox="0 0 1600 1200" aria-hidden="true">
                <defs>
                  <marker
                    id="arrowhead"
                    viewBox="0 0 10 10"
                    refX="5"
                    refY="5"
                    markerWidth="4"
                    markerHeight="4"
                    orient="auto-start-reverse"
                  >
                    <path d="M0 0 L10 5 L0 10 z" fill="var(--yellow)" />
                  </marker>
                </defs>
                <ellipse class="annotation-ring" cx="398" cy="676" rx="62" ry="96" />
                <path
                  class="annotation-arrow"
                  d="M 520 300 Q 540 470 440 572"
                  marker-end="url(#arrowhead)"
                />
                <text class="annotation-label" x="520" y="270" text-anchor="middle">
                  Shane
                </text>
              </svg>
              <Starburst class="starburst-parade">
                Two Cents
                <br />
                to Save
                <br />
                America!
              </Starburst>
            </div>
            <figcaption>
              <a class="post" href={PARADE_POST.url} target="_blank" rel="noopener">
                <span class="post-author">
                  {PARADE_POST.author} <span class="post-handle">{PARADE_POST.handle}</span>
                </span>
                <span class="post-text">“{PARADE_POST.text}”</span>
                <span class="post-date">Posted {PARADE_POST.date} · View on X →</span>
              </a>
            </figcaption>
          </figure>
          <ol class="timeline">
            <For each={EXPERIENCE}>
              {(item) => (
                <li>
                  <span class="timeline-date">{item.date}</span>
                  <span class="timeline-entry">
                    <Highlight text={item.entry} />
                  </span>
                </li>
              )}
            </For>
          </ol>
        </div>
      </div>
    </section>
  );
}
