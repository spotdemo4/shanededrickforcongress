import { For, Show, createSignal } from "solid-js";

const AMOUNTS = [
  { amount: 1, note: "" },
  { amount: 5, note: "" },
  { amount: 6, note: "The Perry Johnson Special" },
];

export default function Donate() {
  const [picked, setPicked] = createSignal<number>();

  return (
    <section class="section donate" id="donate">
      <div class="section-inner donate-inner">
        <p class="eyebrow">★ Join the Movement ★</p>
        <h2>Chip In to Keep Shane on the Ballot</h2>
        <p class="lede">(He can’t get off the ballot anyway. Michigan law says so. But still.)</p>
        <div class="donate-amounts">
          <For each={AMOUNTS}>
            {(option) => (
              <button
                class={["donate-amount", { active: picked() === option.amount }]}
                type="button"
                onClick={() => setPicked(option.amount)}
              >
                <span class="donate-dollars">${option.amount}</span>
                <Show when={option.note}>
                  <span class="donate-note">{option.note}</span>
                </Show>
              </button>
            )}
          </For>
        </div>
        <Show when={picked()}>
          {(amount) => (
            <p class="donate-result" aria-live="polite">
              Thank you, patriot! Your ${amount()} has been routed to… nowhere. This is a parody
              site, and it doesn’t collect money. As of WLNS’s August reporting, there wasn’t even
              an FEC-registered campaign committee to give it to.
            </p>
          )}
        </Show>
      </div>
    </section>
  );
}
