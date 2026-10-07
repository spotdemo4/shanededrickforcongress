import jpg from "../assets/shane-jet.jpg";
import webp from "../assets/shane-jet.webp";
import { ELECTION_DAY } from "../content.ts";
import Starburst from "./Starburst.tsx";

export default function Hero() {
  return (
    <section class="hero" id="top">
      <div class="hero-inner">
        <div class="hero-copy">
          <p class="ribbon">Michigan’s 7th Congressional District</p>
          <h1 class="loud">
            Shane
            <br />
            Dedrick
          </h1>
          <p class="hero-office">for Congress</p>
          <p class="hero-slogan">Putting Michigan First.</p>
          <p class="hero-party">Green Party nominee · On the ballot {ELECTION_DAY}</p>
          <div class="hero-ctas">
            <a class="btn btn-yellow btn-lg" href="#donate">
              Chip In $6
            </a>
            <a class="btn btn-outline btn-lg" href="#news">
              Read the Record
            </a>
          </div>
        </div>
        <figure class="hero-photo">
          <div class="photo-frame">
            <picture>
              <source srcset={webp} type="image/webp" />
              <img
                src={jpg}
                width="1600"
                height="1200"
                alt="Shane Dedrick smiling in sunglasses and a cap, standing in front of Perry Johnson’s campaign jet, tail number N7DK, on an airport apron."
              />
            </picture>
            <Starburst class="starburst-a">
              Vote
              <br />
              Nov. 3!
            </Starburst>
            <Starburst class="starburst-b">
              On the
              <br />
              Ballot!
            </Starburst>
          </div>
          <figcaption>Shane Dedrick with Perry Johnson’s campaign jet, July 3, 2023.</figcaption>
        </figure>
      </div>
    </section>
  );
}
