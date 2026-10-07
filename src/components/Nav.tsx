import { For } from "solid-js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#platform", label: "Platform" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header class="nav">
      <div class="nav-inner">
        <a class="wordmark" href="#top">
          <span class="wordmark-star" aria-hidden="true">
            ★
          </span>
          Dedrick
          <span class="wordmark-sub">for Congress</span>
        </a>
        <nav aria-label="Main">
          <ul class="nav-links">
            <For each={LINKS}>
              {(link) => (
                <li>
                  <a href={link.href}>{link.label}</a>
                </li>
              )}
            </For>
          </ul>
        </nav>
        <a class="btn btn-yellow" href="#donate">
          Contribute
        </a>
      </div>
    </header>
  );
}
