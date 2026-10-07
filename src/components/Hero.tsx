import jpg from "../assets/shane-jet.jpg";
import webp from "../assets/shane-jet.webp";

export default function Hero() {
  return (
    <section class="hero" id="top">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="eyebrow">★ Michigan’s 7th Congressional District ★</p>
          <h1>
            Shane
            <br />
            Dedrick
          </h1>
          <p class="hero-office">for Congress</p>
          <p class="hero-slogan">Putting Michigan First.</p>
          <p class="hero-party">
            <span class="green">Green Party</span>
            <sup class="green">*</sup> candidate
          </p>
          <div class="hero-ctas">
            <a class="btn btn-red btn-lg" href="#donate">
              Chip In $6
            </a>
            <a class="btn btn-outline btn-lg" href="#fake-news">
              Debunk the Fake News
            </a>
          </div>
          <p class="fine-print">
            <span class="green">*</span> For ballot purposes.
          </p>
        </div>
        <figure class="hero-photo">
          <picture>
            <source srcset={webp} type="image/webp" />
            <img
              src={jpg}
              width="1600"
              height="1200"
              alt="Shane Dedrick smiling in sunglasses and a cap, standing in front of a private jet on an airport apron."
            />
          </picture>
          <figcaption>
            A humble, working-class mover, standing next to a humble, working-class Gulfstream.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
