import Nav from "./UI/Nav";
import Hero from "./UI/Hero";
import Features from "./UI/Features";
import Faq from "./UI/Faq";
import Wcu from "./UI/Wcu";
import HowItWorks from "./UI/Hiw";
import Feedback from "./UI/Feedback";
import Waitlist from "./UI/Waitlist";
import Footer from "./UI/Footer";
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

      <section>
        <HowItWorks />
      </section>

      <section className="w-full h-full">
        <Feedback></Feedback>
      </section>

      <section>
        <Waitlist></Waitlist>
      </section>

    
      <section>
        <Footer></Footer>
      </section>


    </div>
  );
}

export default App;