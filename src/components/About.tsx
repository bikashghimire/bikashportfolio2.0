import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { personalInfo, skills } from '@/data/portfolio';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              About Me
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Passionate about crafting exceptional digital experiences through innovative technology solutions
            </p>
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Story card */}
            <Card className="border-0 bg-white dark:bg-black shadow-sm">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">My Journey</h3>
                <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p className="text-lg">
                    {personalInfo.bio}
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you can find me exploring cutting-edge technologies, contributing to open-source projects, 
                    or sharing insights through technical writing and community talks. I believe in the power of continuous learning 
                    and staying ahead of the technological curve.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick facts card */}
            <Card className="border-0 bg-white dark:bg-black shadow-sm">
              <CardContent className="p-8 lg:p-10">
                <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-black dark:text-white">Quick Facts</h3>
                <div className="space-y-6">
                  {[
                    { label: "Experience", value: "5+ Years" },
                    { label: "Companies", value: "5" },
                    { label: "Projects", value: "50+" },
                    { label: "Education", value: "MS Computer Science" },
                    { label: "Location", value: personalInfo.location }
                  ].map((fact, index) => (
                    <div key={fact.label} className="flex justify-between items-center p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{fact.label}</span>
                      <span className="font-bold text-lg text-black dark:text-white">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills section */}
          <Card className="border-0 bg-white dark:bg-black shadow-sm">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-10 text-center text-black dark:text-white">Technical Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {skills.map((skillGroup, index) => (
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