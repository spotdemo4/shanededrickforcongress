import { For, Show, createSignal } from "solid-js";

const AMOUNTS = [1, 5, 6];

export default function Donate() {
  const [picked, setPicked] = createSignal<number>();

  return (
    <section class="section donate" id="donate">
      <div class="section-inner donate-inner">
        <p class="eyebrow eyebrow-yellow">Contribute</p>
        <h2 class="section-title loud">Chip In Today!</h2>
        <p class="lede">Every dollar counts. Six of them, in particular.</p>
        <div class="donate-amounts">
          <For each={AMOUNTS}>
            {(amount) => (
              <button
                class={["donate-amount", { active: picked() === amount }]}
                type="button"
                onClick={() => setPicked(amount)}
              >
                ${amount}
              </button>
            )}
          </For>
        </div>
        <Show when={picked()}>
          <p class="donate-result" aria-live="polite">
            Thank you. This is a parody website and does not accept contributions. As of WLNS’s
            August reporting, Shane Dedrick had no FEC-registered campaign committee.
          </p>
        </Show>
      </div>
    </section>
  );
}
