export const site = {
  name: 'Sergio Anastacio',
  title: 'Sergio Anastacio — Software Developer & Mobile Apps',
  description:
    'Sitio personal de Sergio Anastacio: desarrollo de apps móviles, sistemas cloud, automatización, IA y servicios profesionales de software.',
  url: 'https://sergioanastacio.com',
  githubUrl: 'https://github.com/SergioAnastacio',
  avatarUrl: 'https://github.com/SergioAnastacio.png?size=320',
  emails: {
    contact: 'contacto@sergioanastacio.com',
    support: 'soporte@sergioanastacio.com',
    apps: 'apps@sergioanastacio.com',
  },
  nav: [
    { label: 'Apps', href: '/apps' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function mailto(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${query}`;
}
