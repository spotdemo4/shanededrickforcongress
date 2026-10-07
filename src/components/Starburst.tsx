import type { ParentComponent } from "solid-js";

const Starburst: ParentComponent<{ class?: string }> = (props) => (
  <span class={["starburst", props.class]}>
    <span class="starburst-text">{props.children}</span>
  </span>
);

export default Starburst;
