import Nav from "./UI/Nav";
import Hero from "./UI/Hero";
import Features from "./UI/Features";
import Faq from "./UI/Faq";
import Wcu from "./UI/Wcu";
import HowItWorks from "./UI/Hiw";
import Voyana from "./UI/voyana";
import Feedback from "./UI/Feedback";
import Waitlist from "./UI/Waitlist";
import Footer from "./UI/Footer";
import { Analytics } from "@vercel/analytics/react";
function App() {
  return (
    <div className="relative min-h-screen">

      <Analytics/>
        <Nav />

      <section id="hero" className="relative min-h-screen mb-80">
        <Hero />
      </section>

      <section id="features">
        <Features></Features>
      </section>

      <section id="wcu">
        <Wcu></Wcu>
      </section>

      <section>
        <Voyana></Voyana>
      </section>

      <section id="faq">
        <Faq></Faq>
      </section>

      <section id="how-it-works">
        <HowItWorks />
      </section>


      <section id="feedback" className="w-full h-full">
        <Feedback></Feedback>
      </section>

      <section id="waitlist">
        <Waitlist></Waitlist>
      </section>

    
      <section>
        <Footer></Footer>
      </section>


    </div>
  );
}

export default App;