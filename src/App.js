import Events from "./components/Events";
import Vision from "./components/Vision";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollSection from "./components/ScrollSection/ScrollSection";
import About from "./components/About";
import Team from "./components/Team";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App ">
      <Header />
      {/* <ScrollSection /> */}
      <Hero />
      <About />
      <Events />
      <Vision />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
