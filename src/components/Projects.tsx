import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Filter, Github } from 'lucide-react';
import { projects } from '@/data/portfolio';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Get all unique technologies for filtering
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects based on selected technology
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(project => 
      project.technologies.some(tech => tech.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              Featured Work
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A curated selection of projects showcasing innovation and technical excellence
            </p>
          </div>
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Button
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter('all')}
              className={`flex items-center gap-2 ${activeFilter === 'all' ? 'bg-black dark:bg-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black text-white dark:text-black' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100'}`}
            >
              <Filter className="h-4 w-4" />
              All Projects
            </Button>
            {allTechnologies.slice(0, 8).map((tech) => (
              <Button
                key={tech}
                variant={activeFilter === tech ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveFilter(tech)}
                className={`transition-all duration-300 hover:scale-105 ${activeFilter === tech ? 'bg-black dark:bg-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black text-white dark:text-black' : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-100'}`}
              >
                {tech}
              </Button>
            ))}
          </div>
          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <>
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white flex items-center justify-center gap-3">
                  <Star className="h-6 w-6 text-black dark:text-white" />
                  Featured Projects
                  <Star className="h-6 w-6 text-black dark:text-white" />
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
                {featuredProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="group overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <Badge className="absolute top-4 right-4 bg-black dark:bg-white text-white dark:text-black border-0 animate-pulse">
                        <Star className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                      {/* Hover overlay with project info */}
                      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                          <p className="text-sm opacity-90">{project.description}</p>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-black dark:text-white mb-4 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs py-1 px-3 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs py-1 px-3 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-col xs:flex-row gap-3">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          asChild 
                          className="flex-1 py-2.5 px-4 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 group/btn"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          asChild 
                          className="flex-1 py-2.5 px-4 bg-black dark:bg-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black text-white dark:text-black group/btn"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <>
              <div className="text-center mb-12">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">More Projects</h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Additional experiments and learning projects
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {otherProjects.map((project) => (
                  <Card 
                    key={project.id} 
                    className="group overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-black dark:text-white mb-3 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs py-1 px-2 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-col xs:flex-row gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          asChild 
                          className="flex-1 py-2.5 px-4 text-xs border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 group/btn"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1 group-hover/btn:animate-pulse" />
                            Code
                          </a>
                        </Button>
                        <Button 
                          size="sm" 
                          asChild 
                          className="flex-1 py-2.5 px-4 text-xs bg-black dark:bg-white hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black text-white dark:text-black group/btn"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:rotate-12 transition-transform duration-300" />
                            Demo
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
          {/* No projects found message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                No projects found for "{activeFilter}"
              </h3>
              <Button onClick={() => setActiveFilter('all')} variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                View All Projects
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;