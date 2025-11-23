import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
