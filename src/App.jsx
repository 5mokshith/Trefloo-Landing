import Nav from "./UI/Nav";
import Features from "./UI/Features";
import Faq from "./UI/Faq";
function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <section id="hero" className="relative min-h-screen">
        <Features />
        <Faq />

      </section>
    </div>
  );
}

export default App;
