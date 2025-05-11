import Nav from "./UI/Nav";
import Hero from "./UI/Hero";
import Features from "./UI/Features";
import Faq from "./UI/Faq"

function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      
      <section id="hero" className="relative min-h-screen">
        <Hero />
      </section>
      <Features></Features>
      <Faq></Faq>
      
    </div>
  );
}

export default App;