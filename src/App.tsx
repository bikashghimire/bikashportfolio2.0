import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <Skills />
            <About />
            <Experience />
            <Education />
            <Certifications />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;