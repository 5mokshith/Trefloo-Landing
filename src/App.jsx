import Nav from "./UI/Nav";
import Hero from "./UI/Hero";

function App() {
  return (
    <div className="relative min-h-screen">
      <Nav />
      
      <section
        id="hero"
        className="grid min-h-screen grid-cols-10 grid-rows-2"
      >
        <Hero />
      </section>
      
    </div>
  );
}

export default App;