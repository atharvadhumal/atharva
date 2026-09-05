import { ActiveSectionProvider } from "./context/ActiveSection";
import StarField from "./components/StarField";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <ActiveSectionProvider>
      <div className="relative min-h-screen bg-bg text-text">
        <StarField />
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ActiveSectionProvider>
  );
}
