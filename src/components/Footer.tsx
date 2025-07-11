import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageToggle from './LanguageToggle';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">
                {personalInfo.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {t('footer.description')}
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
              <h4 className="font-semibold mb-4 text-black dark:text-white">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {[
                  { label: t('footer.about'), href: '#about' },
                  { label: t('footer.experience'), href: '#experience' },
                  { label: t('footer.projects'), href: '#projects' },
                  { label: t('footer.contact'), href: '#contact' }
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
              <h4 className="font-semibold mb-4 text-black dark:text-white">{t('footer.services')}</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>{t('footer.webDevelopment')}</li>
                <li>{t('footer.frontendDevelopment')}</li>
                <li>{t('footer.backendDevelopment')}</li>
                <li>{t('footer.technicalConsulting')}</li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-200 dark:bg-gray-800" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} {personalInfo.name}. {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-1">
                {t('footer.madeWith')} <Heart className="h-4 w-4 text-red-500" /> {t('footer.using')}
              </p>
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;