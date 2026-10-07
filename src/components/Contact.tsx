import { For } from "solid-js";

import { CONTACT } from "../content.ts";

export default function Contact() {
  return (
    <section class="section contact" id="contact">
      <div class="section-inner">
        <p class="eyebrow">Contact</p>
        <h2 class="section-title loud">Call Shane Today!</h2>
        <dl class="contact-list">
          <For each={CONTACT}>
            {(item) => (
              <div class="contact-row">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            )}
          </For>
        </dl>
      </div>
    </section>
  );
}
