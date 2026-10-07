import { CONVENTION_URL } from "../content.ts";

export default function About() {
  return (
    <section class="section" id="about">
      <div class="section-inner split">
        <div>
          <p class="eyebrow">About Shane</p>
          <h2 class="section-title">A Michigan Mover</h2>
          <p>
            Shane Dedrick lives in the Brighton–Lansing area, where he works for a locally-owned
            family moving company. He has also worked as a personal trainer, owns Sigma Supplements
            LLC, and is a graduate of a cryptocurrency masterclass. He played ice hockey about 10 or
            12 years ago.
          </p>
          <p>
            In April 2026, Shane came across the Green Party of Michigan’s nominating convention
            online and asked to run for Congress in the 7th District. He was not a member of the
            party, and told delegates that no one in the party could vouch for him. He was nominated
            about 30 minutes later.
          </p>
          <p>Party officials say they have not heard from him since.</p>
          <blockquote class="pull-quote">
            “I look forward to winning.”
            <cite>Shane Dedrick, April 25, 2026</cite>
          </blockquote>
        </div>
        <a class="nomination" href={CONVENTION_URL} target="_blank" rel="noopener">
          <span class="nomination-bar">Green Party of Michigan · Nominating Convention</span>
          <span class="nomination-tile">
            <span class="nomination-avatar" aria-hidden="true">
              SD
            </span>
            <span class="nomination-name">Shane Dedrick</span>
          </span>
          <span class="nomination-caption">
            <strong>Watch the nomination</strong>
            April 25, 2026 · Camera off
          </span>
        </a>
      </div>
    </section>
  );
}
