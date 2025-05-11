import Nav from "./UI/Nav";
import Hero from "./UI/Hero";

function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      
      <section id="hero" className="relative min-h-screen">
        <Hero />
      </section>
      
      
    </div>
  );
}

export default App;