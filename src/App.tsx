import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Showcase } from "./components/Showcase";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
