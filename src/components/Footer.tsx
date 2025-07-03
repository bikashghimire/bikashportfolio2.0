import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                Alex Thompson
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Senior Software Developer passionate about creating exceptional web experiences 
                with modern technologies.
              </p>
              <div className="flex space-x-4">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-black dark:text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Contact', href: '#contact' }
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-black dark:text-white">Services</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Web Development</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Technical Consulting</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-200 dark:bg-gray-800" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} Alex Thompson. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;