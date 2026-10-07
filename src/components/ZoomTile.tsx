import { createMemo, createSignal } from "solid-js";

import { ZOOM_REPLIES } from "../content.ts";

export default function ZoomTile() {
  const [asks, setAsks] = createSignal(0);
  const reply = createMemo(() => ZOOM_REPLIES[Math.min(asks(), ZOOM_REPLIES.length) - 1]);
  const left = createMemo(() => asks() >= ZOOM_REPLIES.length);

  return (
    <div class="zoom">
      <div class="zoom-bar">
        <span class="zoom-dot" />
        <span class="zoom-dot" />
        <span class="zoom-dot" />
        <span class="zoom-title">Green Party of Michigan — Nominating Convention</span>
      </div>
      <div class={["zoom-tile", { "zoom-left": left() }]}>
        <span class="zoom-avatar" aria-hidden="true">
          SD
        </span>
        <span class="zoom-name">
          <span class="zoom-muted" aria-hidden="true">
            ⊘
          </span>
          Shane Dedrick
        </span>
      </div>
      <p class="zoom-status" aria-live="polite">
        {reply() ?? "Camera is off. It has always been off."}
      </p>
      <button
        class="btn btn-navy"
        type="button"
        disabled={left()}
        onClick={() => setAsks((n) => n + 1)}
      >
        {left() ? "Meeting ended" : "Ask Shane to turn on his camera"}
      </button>
    </div>
  );
}
