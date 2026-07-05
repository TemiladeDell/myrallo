import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import PopularTools from "./components/PopularTools/PopularTools";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />
      <Hero />
      <PopularTools />
      <Footer />
    </div>
  );
}

export default App;