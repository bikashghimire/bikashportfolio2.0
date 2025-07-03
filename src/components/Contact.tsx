import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';
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
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-black dark:text-white">
              Let's Connect
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project or just have a conversation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-0 bg-gray-50 dark:bg-gray-900 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <MessageCircle className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                    <h3 className="text-2xl font-bold text-black dark:text-white">Get in Touch</h3>
                  </div>
                  <div className="space-y-6">
                    {[
                      { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
                      { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
                      { icon: MapPin, label: "Location", value: personalInfo.location, href: null }
                    ].map((contact, index) => (
                      <div key={contact.label} className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-black">
                        <div className="flex justify-center items-center w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full">
                          <contact.icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-black dark:text-white">{contact.label}</p>
                          {contact.href ? (
                            <a href={contact.href} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors break-all">
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gray-50 dark:bg-gray-900 shadow-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Follow My Journey</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { icon: Github, label: "GitHub", href: personalInfo.github, desc: "Open source contributions" },
                      { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin, desc: "Professional network" },
                      { icon: Twitter, label: "Twitter", href: personalInfo.twitter, desc: "Tech thoughts & updates" }
                    ].map((social) => (
                      <Button key={social.label} variant="outline" asChild className="justify-start h-auto p-4 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
                        <a href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                          <social.icon className="h-5 w-5" />
                          <div className="text-left">
                            <div className="font-semibold">{social.label}</div>
                            <div className="text-sm opacity-70">{social.desc}</div>
                          </div>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-0 bg-gray-50 dark:bg-gray-900 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-black dark:text-white">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-black dark:text-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-black dark:text-white">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-black dark:text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-black dark:text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-white dark:bg-black border-gray-300 dark:border-gray-700 text-black dark:text-white resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 font-semibold rounded-md transition-all duration-300"
                  >
                    <Send className="h-5 w-5 mr-2" />
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