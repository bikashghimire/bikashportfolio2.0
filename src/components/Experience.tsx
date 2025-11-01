import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, CheckCircle, Building } from 'lucide-react';
import { experience } from '@/data/portfolio';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-16">
              {experience.map((job, index) => (
                <div key={job.id} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gray-600 dark:bg-gray-400 rounded-full border-4 border-white dark:border-black shadow-lg hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                  
                  <Card className="md:ml-20 border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8 lg:p-10">
                      {/* Header with improved layout */}
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                        <div className="flex-1">
                          {/* Company and position info */}
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
                                <Building className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                              </div>
                              <Badge variant="outline" className="text-xs font-medium bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                                {experience.length - index} of {experience.length}
                              </Badge>
                            </div>
                          </div>
                          
                          <h3 className="text-xl lg:text-2xl font-semibold text-black dark:text-white mb-2">{job.position}</h3>
                          <h4 className="text-2xl lg:text-3xl font-bold mb-4 text-black dark:text-white">{job.company}</h4>
                          
                          {/* Duration and location */}
                          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                              <span className="font-medium">{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                              <span className="font-medium">{job.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description with improved styling */}
                      <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                          {job.description}
                        </p>
                      </div>

                      {/* Content grid with better spacing */}
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Achievements */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                            <h5 className="font-bold text-lg text-gray-900 dark:text-white">Key Achievements</h5>
                          </div>
                          <ul className="space-y-3">
                            {job.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
                                <CheckCircle className="h-5 w-5 text-gray-700 dark:text-gray-300 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
                            <h5 className="font-bold text-lg text-gray-900 dark:text-white">Technologies Used</h5>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {job.technologies.map((tech) => (
                              <Badge 
                                key={tech} 
                                variant="outline" 
                                className="text-sm py-2 px-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 font-medium"
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