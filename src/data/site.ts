type SiteMeta = {
  title: string;
  titleTemplate: string;
  description: string;
  author: string;
  jobTitle: string;
  twitterHandle?: string;
};

type Locale = 'es' | 'en';

export const site = {
  name: 'Sergio Anastacio',
  url: 'https://sergioanastacio.com',
  defaultLocale: 'es' as Locale,
  locales: ['es', 'en'] as Locale[],
  githubUrl: 'https://github.com/SergioAnastacio',
  linkedinUrl: 'https://www.linkedin.com/in/sergioanastacio',
  avatarUrl: 'https://github.com/SergioAnastacio.png?size=320',
  ogImage: 'https://github.com/SergioAnastacio.png?size=630',
  emails: {
    contact: 'contacto@sergioanastacio.com',
    support: 'soporte@sergioanastacio.com',
    apps: 'apps@sergioanastacio.com',
  },
  meta: {
    es: {
      title: 'Sergio Anastacio — Software Developer & Arquitecto de Soluciones IA',
      titleTemplate: '%s — Sergio Anastacio',
      description:
        'Sergio Anastacio: Software Developer freelance con experiencia como Tech Lead y Arquitecto de Soluciones IA. Desarrollo de productos digitales, sistemas cloud, automatización y consultoría tecnológica.',
      author: 'Sergio Anastacio',
      jobTitle: 'Software Developer & Arquitecto de Soluciones IA',
    } satisfies SiteMeta,
    en: {
      title: 'Sergio Anastacio — Software Developer & AI Solutions Architect',
      titleTemplate: '%s — Sergio Anastacio',
      description:
        'Sergio Anastacio: freelance Software Developer and AI Solutions Architect. Digital products, cloud systems, automation, AI integration and technology consulting.',
      author: 'Sergio Anastacio',
      jobTitle: 'Software Developer & AI Solutions Architect',
    } satisfies SiteMeta,
  },
  nav: [
    { label: 'Products', href: '/productos' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function mailto(email: string, subject?: string) {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${email}${query}`;
}

export function getSiteMeta(lang: Locale) {
  return site.meta[lang] ?? site.meta[site.defaultLocale];
}

export function getAlternateUrls(path: string) {
  const cleanPath = path.replace(/^\/en/, '').replace(/\/$/, '') || '/';
  return site.locales.map((locale) => {
    const localizedCleanPath =
      locale === 'en' && (cleanPath === '/productos' || cleanPath.startsWith('/productos/'))
        ? cleanPath.replace(/^\/productos/, '/products')
        : locale === 'es' && (cleanPath === '/products' || cleanPath.startsWith('/products/'))
          ? cleanPath.replace(/^\/products/, '/productos')
          : cleanPath;
    const prefix = locale === site.defaultLocale ? '' : `/${locale}`;
    const localizedPath = localizedCleanPath === '/' ? prefix || '/' : `${prefix}${localizedCleanPath}`;
    return { locale, url: new URL(localizedPath, site.url).toString() };
  });
}
