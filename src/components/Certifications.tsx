import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlignCenterVertical as Certificate, Calendar } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const Certifications: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              Certifications
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.id} className="overflow-hidden border-0 bg-gray-50 dark:bg-gray-900 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex justify-center items-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full">
                      <Certificate className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-semibold text-black dark:text-white mb-1">{cert.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400 text-xs">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      <span className="font-medium">Credential ID:</span> 
                      <span className="break-all ml-1">{cert.credentialId}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-0">
                      Verified
                    </Badge>
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

export default Certifications;