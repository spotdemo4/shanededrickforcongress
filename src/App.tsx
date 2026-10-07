import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Donate from "./components/Donate.tsx";
import Endorsements from "./components/Endorsements.tsx";
import Experience from "./components/Experience.tsx";
import FastFacts from "./components/FastFacts.tsx";
import Footer from "./components/Footer.tsx";
import Hero from "./components/Hero.tsx";
import InTheNews from "./components/InTheNews.tsx";
import Nav from "./components/Nav.tsx";
import ParodyBanner from "./components/ParodyBanner.tsx";
import Platform from "./components/Platform.tsx";

export default function App() {
  return (
    <>
      <div class="masthead">
        <ParodyBanner />
        <Nav />
      </div>
      <main>
        <Hero />
        <FastFacts />
        <About />
        <Experience />
        <Platform />
        <InTheNews />
        <Endorsements />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
