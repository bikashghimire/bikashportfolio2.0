import { useEffect } from 'react';
import { personalInfo, projects } from '@/data/portfolio';

const SEO: React.FC = () => {
  useEffect(() => {
    const personJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: personalInfo.name,
      jobTitle: personalInfo.title,
      description: personalInfo.bio,
      email: `mailto:${personalInfo.email}`,
      url: typeof window !== 'undefined' ? window.location.origin : undefined,
      sameAs: [personalInfo.github, personalInfo.linkedin, personalInfo.twitter].filter(Boolean),
      address: {
        '@type': 'PostalAddress',
        addressLocality: personalInfo.location,
      },
    };

    const projectList = projects.map((p) => ({
      '@type': 'CreativeWork',
      name: p.title,
      description: p.description,
      url: p.demo || p.github,
      image: p.image,
      keywords: (p.technologies || []).join(', '),
    }));

    const portfolioJsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: projectList.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item,
      })),
    };

    const addScript = (id: string, json: unknown) => {
      let el = document.getElementById(id) as HTMLScriptElement | null;
      if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = id;
        document.head.appendChild(el);
      }
      el.text = JSON.stringify(json);
    };

    addScript('ld-person', personJsonLd);
    addScript('ld-projects', portfolioJsonLd);

    return () => {
      const ids = ['ld-person', 'ld-projects'];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.parentNode) node.parentNode.removeChild(node);
      });
    };
  }, []);

  return null;
};

export default SEO;


