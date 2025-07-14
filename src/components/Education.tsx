import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '@/data/portfolio';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              Education
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Academic foundation and continuous learning journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <Card key={edu.id} className="overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-black shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex justify-center items-center w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold text-black dark:text-white mb-2">{edu.degree}</h3>
                      <h4 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">{edu.institution}</h4>
                      <div className="flex flex-col xs:flex-row xs:flex-wrap gap-4 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4 text-blue-600" />
                          {edu.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h5 className="font-semibold mb-3 text-black dark:text-white">Key Coursework</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="outline" className="text-xs py-1 px-2 bg-blue-50 dark:bg-blue-950 border-blue-600 text-blue-600 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-black dark:text-white">Achievements</h5>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 p-3 rounded-lg bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                          <Award className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;