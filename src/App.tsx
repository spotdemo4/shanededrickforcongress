import Donate from "./components/Donate.tsx";
import Endorsements from "./components/Endorsements.tsx";
import FakeNews from "./components/FakeNews.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import Issues from "./components/Issues.tsx";
import MeetShane from "./components/MeetShane.tsx";
import Nav from "./components/Nav.tsx";
import ParodyBanner from "./components/ParodyBanner.tsx";
import Stats from "./components/Stats.tsx";

export default function App() {
  return (
    <>
      <div class="masthead">
        <ParodyBanner />
        <Nav />
      </div>
      <main>
        <Hero />
        <Stats />
        <MeetShane />
        <Issues />
        <FakeNews />
        <Endorsements />
        <Donate />
      </main>
      <Footer />
    </>
  );
}
