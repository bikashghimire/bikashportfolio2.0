import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Download, MapPin } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="container mx-auto text-center relative z-10 max-w-4xl">
        {/* Location badge */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <Badge variant="secondary" className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
            <MapPin className="h-4 w-4" />
            <span className="hidden xs:inline">{personalInfo.location}</span>
            <span className="xs:hidden">SF, CA</span>
          </Badge>
        </div>

        {/* Main heading */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-black dark:text-white leading-tight">
            {personalInfo.name}
          </h1>
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-600 dark:text-gray-400">
            {personalInfo.title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-300">
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 animate-scale-in delay-500">
          <Button
            size="lg"
            onClick={scrollToAbout}
            className="w-full xs:w-auto bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 px-8 py-4 text-lg font-medium rounded-md transition-all duration-300"
          >
            <span className="hidden sm:inline">Discover My Journey</span>
            <span className="sm:hidden">Learn More</span>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full xs:w-auto px-8 py-4 text-lg font-medium rounded-md border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
          >
            <Download className="h-5 w-5 mr-2" />
            <span className="hidden sm:inline">Download Resume</span>
            <span className="sm:hidden">Resume</span>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce delay-1000">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            className="mx-auto rounded-full text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;