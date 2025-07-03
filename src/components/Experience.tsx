import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, CheckCircle, Building } from 'lucide-react';
import { experience } from '@/data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              Professional Journey
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Five years of growth across diverse companies and challenging projects
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - hidden on mobile, visible on md+ */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={job.id} className="relative">
                  {/* Timeline dot - hidden on mobile */}
                  <div className="absolute left-6 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black shadow-lg hidden md:block"></div>
                  
                  <Card className="md:ml-20 border-0 bg-gray-50 dark:bg-gray-900 shadow-sm">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3 flex-wrap">
                            <Building className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                            <Badge variant="outline" className="text-xs font-medium bg-white dark:bg-black border-gray-300 dark:border-gray-700">
                              Position #{experience.length - index}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{job.position}</h3>
                          <h4 className="text-xl font-semibold mb-4 text-gray-700 dark:text-gray-300">{job.company}</h4>
                          <div className="flex flex-col xs:flex-row xs:flex-wrap gap-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="font-medium">{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span className="font-medium">{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-lg">
                        {job.description}
                      </p>

                      {/* Content grid */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Achievements */}
                        <div className="space-y-4">
                          <h5 className="font-bold text-lg text-black dark:text-white mb-4">Key Achievements</h5>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-white dark:bg-black">
                                <CheckCircle className="h-5 w-5 text-gray-600 dark:text-gray-400 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4">
                          <h5 className="font-bold text-lg text-black dark:text-white mb-4">Technologies Used</h5>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-sm py-2 px-3 bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;