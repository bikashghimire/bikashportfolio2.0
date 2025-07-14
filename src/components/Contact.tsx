import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 sm:py-24 lg:py-32 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-blue-50 dark:bg-blue-950 rounded-2xl">
              <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate? I'd love to hear about your project and discuss how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details Card */}
              <Card className="border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  {/* Card Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                      <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Get In Touch
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                      Let's discuss your next project
                    </p>
                  </div>
                  
                  {/* Contact Items */}
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: 'Email Address', value: personalInfo.email, href: `mailto:${personalInfo.email}`, desc: 'Send me an email' },
                      { icon: MapPin, label: 'Location', value: personalInfo.location, href: null, desc: 'Based in' }
                    ].map((contact) => (
                      <div key={contact.label} className="group p-6 rounded-2xl bg-white dark:bg-black border-2 border-gray-100 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 hover:shadow-lg">
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 flex justify-center items-center w-12 h-12 bg-blue-50 dark:bg-blue-900/30 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                            <contact.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
                              {contact.label}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                              {contact.desc}
                            </p>
                            {contact.href ? (
                              <a 
                                href={contact.href} 
                                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors break-all font-medium text-base"
                              >
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-gray-700 dark:text-gray-300 font-medium text-base">
                                {contact.value}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links Card */}
              <Card className="border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8 sm:p-10">
                  {/* Card Header */}
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                      <Github className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                      Follow My Journey
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                      Connect with me on social platforms
                    </p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="space-y-4">
                    {[
                      { icon: Github, label: "GitHub", href: personalInfo.github, desc: "Open source contributions & projects", color: "hover:bg-gray-50 dark:hover:bg-gray-800" },
                      { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, desc: "Professional network & experience", color: "hover:bg-blue-50 dark:hover:bg-blue-900/20" },
                      { icon: Twitter, label: "Twitter", href: personalInfo.twitter, desc: "Tech thoughts & industry updates", color: "hover:bg-sky-50 dark:hover:bg-sky-900/20" }
                    ].map((social) => (
                      <a 
                        key={social.label} 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`block p-4 rounded-2xl border-2 border-gray-100 dark:border-gray-800 ${social.color} transition-all duration-300 hover:shadow-md group`}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex-shrink-0 flex justify-center items-center w-12 h-12 bg-gray-50 dark:bg-gray-800 rounded-xl group-hover:bg-white dark:group-hover:bg-gray-700 transition-colors duration-300">
                            <social.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">
                              {social.label}
                            </h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">
                              {social.desc}
                            </p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black shadow-xl rounded-3xl overflow-hidden">
              <CardContent className="p-8 sm:p-10">
                {/* Form Header */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-blue-100 dark:bg-blue-900 rounded-2xl">
                    <Send className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Send a Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
                    I'll get back to you within 24 hours
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-900 dark:text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-14 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 rounded-xl text-base"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-900 dark:text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-14 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 rounded-xl text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-900 dark:text-white">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 resize-none rounded-xl text-base"
                      placeholder="Tell me about your project, ask a question, or just say hello..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-base group"
                  >
                    <Send className="h-5 w-5 mr-3 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;