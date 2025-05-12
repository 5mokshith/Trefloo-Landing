import Nav from "./UI/Nav";
import Hero from "./UI/Hero";
import Features from "./UI/Features";
import Faq from "./UI/Faq";
import Wcu from "./UI/Wcu";
import FaqImg from "./assets/Faq.png"; // <-- Import the background image
import { linearGradient } from "framer-motion/client";

function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      
      <section id="hero" className="relative min-h-screen mb-80">
        <Hero />
      </section>
      <Features></Features>
      <Wcu></Wcu>
      <Faq></Faq>

    </div>
  );
}

export default App;