import ZoomTile from "./ZoomTile.tsx";

export default function MeetShane() {
  return (
    <section class="section" id="meet">
      <div class="section-inner split">
        <div>
          <p class="eyebrow eyebrow-red">Meet Shane</p>
          <h2>A Fresh Face You’ve Never Seen</h2>
          <p>
            Shane Dedrick is 25 (“turning 26 in a few months”) and lives in the Brighton-Lansing
            area, a sprawling 45-mile region he calls home. He works at a locally-owned family
            moving company, where, in his words, “there are huge corporations pushing us out.”
          </p>
          <p>
            Like any true grassroots progressive, Shane is also a personal trainer, a cryptocurrency
            “masterclass grad,” and the owner of Sigma Supplements LLC. He played ice hockey about
            10 or 12 years ago.
          </p>
          <p>
            Shane discovered the Green Party the way all great political movements begin: “I was
            just surfing around online, and honestly I didn’t know the right spot to go, and I came
            across a Zoom here.” Thirty minutes later, he was their nominee for Congress.
          </p>
          <blockquote class="pull-quote">
            “Thank you guys very much. I appreciate your patience with me. I look forward to
            winning.”
            <cite>Shane Dedrick, moments before not being heard from again</cite>
          </blockquote>
        </div>
        <ZoomTile />
      </div>
    </section>
  );
}
