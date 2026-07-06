import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen relative font-sans selection:bg-[#2A4EDB]/20 selection:text-slate-900 overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <Expertise />
      <Contact />
      <Footer />
    </main>
  );
}
