import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Tools from './components/Tools';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Tools />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
