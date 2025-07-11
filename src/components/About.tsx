import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';
import { skills } from '@/data/portfolio';

const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              {t('about.title')}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Story card */}
            <Card className="border-0 bg-white dark:bg-black shadow-sm">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">{t('about.myJourney')}</h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p className="text-lg">
                    {t('about.description1')}
                  </p>
                  <p className="text-lg">
                    {t('about.description2')}
                  </p>
                  <p className="text-lg">
                    {t('about.description3')}
                  </p>
                  <p className="text-lg">
                    {t('about.description4')}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* What I Value card */}
            <Card className="border-0 bg-white dark:bg-black shadow-sm">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">{t('about.whatIValue')}</h3>
                <div className="space-y-4">
                  {[
                    t('about.value1'),
                    t('about.value2'),
                    t('about.value3'),
                    t('about.value4'),
                    t('about.value5')
                  ].map((value) => (
                    <div key={value} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <div className="w-2 h-2 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-400 leading-relaxed">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills section */}
          <Card className="border-0 bg-white dark:bg-black shadow-sm">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-black dark:text-white">{t('about.technicalExpertise')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="mb-6">
                      <h4 className="font-bold text-xl text-black dark:text-white mb-4">
                        {skillGroup.category}
                      </h4>
                      <div className="w-12 h-1 bg-black dark:bg-white rounded-full"></div>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="text-sm py-2 px-4 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;