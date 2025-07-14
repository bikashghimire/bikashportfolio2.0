import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlignCenterVertical as Certificate, Calendar } from 'lucide-react';
import { certifications } from '@/data/portfolio';

const Certifications: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-blue-50 dark:bg-blue-950 rounded-2xl">
              <Certificate className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Certifications
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Professional certifications and continuous learning achievements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.id} className="border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Certificate Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-blue-100 dark:bg-blue-900 rounded-2xl group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300">
                      <Certificate className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-6">
                    {/* Date */}
                    <div className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-black border-2 border-gray-100 dark:border-gray-800">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-xl">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Issued Date</p>
                        <p className="text-gray-900 dark:text-white font-semibold">{cert.date}</p>
                      </div>
                    </div>

                    {/* Credential ID */}
                    <div className="p-4 rounded-2xl bg-white dark:bg-black border-2 border-gray-100 dark:border-gray-800">
                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-2 text-center">
                        Credential ID
                      </p>
                      <p className="text-gray-900 dark:text-white text-sm font-mono text-center break-all bg-gray-50 dark:bg-gray-800 p-3 rounded-xl">
                        {cert.credentialId}
                      </p>
                    </div>

                    {/* Verification Badge */}
                    <div className="flex justify-center">
                      <Badge 
                        variant="outline" 
                        className="px-6 py-3 text-sm font-semibold bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-400 rounded-xl"
                      >
                        ✓ Verified Certificate
                      </Badge>
                    </div>
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