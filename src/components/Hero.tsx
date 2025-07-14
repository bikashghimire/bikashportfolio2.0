import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { personalInfo } from '@/data/portfolio';

const ACCENT = 'bg-blue-600 hover:bg-blue-700 text-white';
const ACCENT_TEXT = 'text-blue-600 dark:text-blue-400';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${particle.opacity})`; // blue-700
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-10"
      />
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        {/* Location badge with accent border */}
        <div className="flex items-center justify-center mb-10 animate-fade-in">
          <Badge variant="secondary" className="flex items-center gap-2 px-6 py-2 text-sm font-medium bg-white/80 dark:bg-black/80 border border-blue-600 text-gray-800 dark:text-gray-200 shadow-sm">
            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="hidden xs:inline">{personalInfo.location}</span>
            <span className="xs:hidden">SF, CA</span>
          </Badge>
        </div>
        {/* Main heading with accent color */}
        <div className="mb-10 animate-slide-up">
          <h1 className={`text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-4 leading-none ${ACCENT_TEXT}`}>
            {personalInfo.name}
          </h1>
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 dark:text-gray-200">
            {personalInfo.title}
          </h2>
        </div>
        {/* Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 font-light">
          {personalInfo.tagline}
        </p>
        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row gap-6 sm:gap-8 justify-center items-center mb-16 animate-scale-in delay-500">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className={`group w-full xs:w-auto px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${ACCENT}`}
          >
            <span className="hidden sm:inline group-hover:translate-x-1 transition-transform duration-300">
              {t('hero.discoverJourney')}
            </span>
            <span className="sm:hidden group-hover:translate-x-1 transition-transform duration-300">
              {t('hero.learnMore')}
            </span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="group w-full xs:w-auto px-10 py-6 text-xl font-semibold rounded-xl border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-700 dark:hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            <Download className="h-6 w-6 mr-3 group-hover:animate-bounce text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">{t('hero.downloadResume')}</span>
            <span className="sm:hidden">{t('hero.resume')}</span>
          </Button>
        </div>
        {/* Scroll indicator */}
        <div className="animate-bounce delay-1000">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="group mx-auto rounded-full text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950 w-16 h-16 transition-all duration-300"
          >
            <ArrowDown className="h-8 w-8 group-hover:translate-y-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;