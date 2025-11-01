import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Cloud, Palette, Cpu, Globe } from 'lucide-react';

interface Skill {
  name: string;
  category: string;
  icon?: React.ReactNode;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', icon: <Code className="h-4 w-4 text-white" /> },
  { name: 'TypeScript', category: 'frontend', icon: <Code className="h-4 w-4 text-white" /> },
  { name: 'JavaScript', category: 'frontend', icon: <Code className="h-4 w-4 text-white" /> },
  { name: 'HTML/CSS', category: 'frontend', icon: <Code className="h-4 w-4 text-white" /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <Palette className="h-4 w-4 text-white" /> },
  { name: 'Next.js', category: 'frontend', icon: <Globe className="h-4 w-4 text-white" /> },
  // Backend
  { name: 'Node.js', category: 'backend', icon: <Cpu className="h-4 w-4 text-white" /> },
  { name: 'Express.js', category: 'backend', icon: <Cpu className="h-4 w-4 text-white" /> },
  { name: 'Python', category: 'backend', icon: <Cpu className="h-4 w-4 text-white" /> },
  { name: 'PHP', category: 'backend', icon: <Cpu className="h-4 w-4 text-white" /> },
  // Database
  { name: 'MongoDB', category: 'database', icon: <Database className="h-4 w-4 text-white" /> },
  { name: 'PostgreSQL', category: 'database', icon: <Database className="h-4 w-4 text-white" /> },
  { name: 'MySQL', category: 'database', icon: <Database className="h-4 w-4 text-white" /> },
  // Cloud & DevOps
  { name: 'AWS', category: 'cloud', icon: <Cloud className="h-4 w-4 text-white" /> },
  { name: 'Docker', category: 'cloud', icon: <Cloud className="h-4 w-4 text-white" /> },
  { name: 'Git', category: 'cloud', icon: <Cloud className="h-4 w-4 text-white" /> },
  { name: 'CI/CD', category: 'cloud', icon: <Cloud className="h-4 w-4 text-white" /> },
];

const categories = [
  { id: 'frontend', name: 'Frontend', icon: <Code className="h-4 w-4 text-black dark:text-white" /> },
  { id: 'backend', name: 'Backend', icon: <Cpu className="h-4 w-4 text-black dark:text-white" /> },
  { id: 'database', name: 'Database', icon: <Database className="h-4 w-4 text-black dark:text-white" /> },
  { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="h-4 w-4 text-black dark:text-white" /> },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  return (
    <section id="skills" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-white dark:bg-black border border-black dark:border-white rounded-2xl">
              <Code className="w-8 h-8 sm:w-10 sm:h-10 text-black dark:text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-black dark:text-white leading-tight">
              Technical Skills
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
          
          {/* Skills Tabs */}
          <div className="w-full">
            {/* Tab Navigation */}
            <div className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16 bg-white dark:bg-black border border-gray-200 dark:border-gray-800 p-2 rounded-2xl shadow-sm">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 text-sm sm:text-base rounded-xl transition-all duration-300 font-semibold ${
                    activeCategory === category.id
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg transform scale-105'
                      : 'bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7">
                    {category.icon}
                  </div>
                  <span className="hidden xs:inline">{category.name}</span>
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            {categories.map((category) => (
              <div key={category.id} className={activeCategory === category.id ? 'block' : 'hidden'}>
                <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-xl rounded-3xl overflow-hidden">
                  <CardContent className="p-8 sm:p-10 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl">
                        {category.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black dark:text-white mb-2">
                          {category.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                          {category.id === 'frontend' && 'Building beautiful and responsive user interfaces'}
                          {category.id === 'backend' && 'Creating robust and scalable server-side applications'}
                          {category.id === 'database' && 'Designing and managing efficient data storage solutions'}
                          {category.id === 'cloud' && 'Deploying and maintaining cloud infrastructure and DevOps practices'}
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
                      {skills
                        .filter(skill => skill.category === category.id)
                        .map((skill) => (
                          <Badge
                            key={skill.name}
                            variant="outline"
                            className="py-3 sm:py-4 px-4 sm:px-5 text-center text-sm sm:text-base bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 font-semibold rounded-xl shadow-sm hover:shadow-md"
                          >
                            {skill.name}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Additional Skills Grid */}
          <div className="mt-20 sm:mt-24 lg:mt-32">
            <div className="text-center mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black dark:text-white">
                Additional Technologies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                Tools and platforms that enhance my development workflow
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
              {[
                'Storybook', 'Jest', 'Material UI', 'SASS', 'Firebase', 'Azure',
                'GitHub', 'JIRA', 'Figma', 'Maze', 'npm', 'Web Components'
              ].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="py-3 sm:py-4 px-4 sm:px-5 text-center text-sm sm:text-base bg-white dark:bg-black border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100 transition-all duration-300 font-medium rounded-xl shadow-sm hover:shadow-md"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 