export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.apps': 'Apps',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    'a11y.skipLink': 'Saltar al contenido',
    'skip': 'Saltar al contenido',
    'toggle.theme': 'Cambiar tema',
    'toggle.menu.open': 'Abrir menú',
    'toggle.menu.close': 'Cerrar menú',
    'lang.label': 'ES',

    'home.hero.eyebrow': 'Software Developer, AI Solutions Architect & Tech Lead',
    'home.hero.title': 'Sergio Anastacio',
    'home.hero.copy':
      'Diseño y construyo apps móviles, sistemas cloud, automatización e integraciones con IA. Software claro, mantenible y listo para escalar.',
    'home.hero.cta.apps': 'Ver Apps',
    'home.hero.cta.contact': 'Contáctame',

    'home.summary.kicker': 'Software Developer Freelance',
    'home.summary.title': 'Arquitectura, código y despliegue para productos reales.',
    'home.summary.copy':
      'Hub público para apps móviles, soporte, privacidad, portfolio y servicios profesionales de un software developer con experiencia como Tech Lead y Arquitecto de Soluciones IA.',
    'home.summary.mobile': 'Mobile Apps',
    'home.summary.mobile.copy':
      'Desarrollo de apps iOS y Android con landing, soporte y privacidad por producto.',
    'home.summary.cloud': 'Cloud Systems',
    'home.summary.cloud.copy':
      'APIs, automatización, despliegues y flujos operativos diseñados para crecer sin fricción.',
    'home.summary.ai': 'AI Products',
    'home.summary.ai.copy':
      'Integraciones con IA para reducir tareas repetitivas y convertir contexto técnico en acciones.',

    'home.apps.kicker': 'Apps',
    'home.apps.title': 'Apps móviles bajo la marca Sergio Anastacio.',
    'home.apps.cta': 'Ver todas',

    'home.services.kicker': 'Servicios',
    'home.services.title': 'Servicios para clientes, equipos y productos digitales.',
    'home.services.1.title': 'Mobile App Development',
    'home.services.1.copy': 'Apps iOS y Android con arquitectura limpia, integración de APIs y publicación escalable.',
    'home.services.2.title': 'Backend APIs & DevOps',
    'home.services.2.copy': 'Servicios .NET, bases de datos, CI/CD, Docker, GitHub Actions y automatización cloud.',
    'home.services.3.title': 'AI Integration',
    'home.services.3.copy': 'Flujos con IA para soporte, análisis, automatización y productos con asistencia inteligente.',

    'home.portfolio.kicker': 'Portfolio',
    'home.portfolio.title': 'Casos técnicos y capacidades de arquitectura.',
    'home.portfolio.cta': 'Ver portfolio',

    'home.cta.kicker': 'Contacto',
    'home.cta.title': 'Hablemos de apps, APIs, automatización o IA.',
    'home.cta.body':
      'Para oportunidades profesionales, soporte de apps o colaboración técnica, escríbeme al correo más adecuado.',
    'home.cta.secondary': 'Ver opciones',

    'apps.hero.eyebrow': 'Apps Móviles',
    'apps.hero.title': 'Catálogo de apps iOS y Android.',
    'apps.hero.copy':
      'Apps móviles desarrolladas por Sergio Anastacio. Estado de publicación, plataformas disponibles y enlaces oficiales de App Store y Google Play.',
    'apps.cta.kicker': 'Soporte de Apps',
    'apps.cta.title': '¿Tienes una pregunta sobre una app?',
    'apps.cta.body':
      'Escríbeme al correo de soporte para reportar bugs, dudas de privacidad o solicitudes relacionadas con productos móviles.',
    'apps.cta.secondary': 'Centro de soporte',
    'card.viewapp': 'Ver App',
    'card.privacy': 'Privacidad',
    'card.support': 'Soporte',

    'portfolio.hero.eyebrow': 'Portfolio',
    'portfolio.hero.title': 'Casos de estudio de desarrollo de software.',
    'portfolio.hero.copy': 'Casos de estudio técnicos que muestran cómo abordo arquitectura de software, apps móviles, automatización e integraciones con IA para clientes y productos.',
    'portfolio.cta.kicker': 'Colaboración',
    'portfolio.cta.title': '¿Quieres revisar un caso técnico o construir algo similar?',
    'portfolio.cta.secondary': 'Ver servicios',
    'card.casestudy': 'Ver caso',

    'services.hero.eyebrow': 'Servicios',
    'services.hero.title': 'Servicios de desarrollo de software freelance.',
    'services.hero.copy':
      'Consultoría y desarrollo de software para empresas, startups y equipos que necesitan apps móviles, APIs, automatización, DevOps e integraciones con IA.',
    'services.cta.kicker': 'Empecemos',
    'services.cta.title': 'Cuéntame qué necesitas construir.',
    'services.cta.body':
      'Comparte el problema, plataforma objetivo, fechas clave y cualquier stack existente.',
    'services.cta.secondary': 'Ver portfolio',

    'about.hero.eyebrow': 'Acerca',
    'about.hero.title': 'Sergio Anastacio, Software Developer.',
    'about.hero.copy':
      'Software developer con experiencia como Tech Lead y Arquitecto de Soluciones IA. Me especializo en apps móviles, arquitectura backend, automatización DevOps y sistemas con IA.',
    'about.profile.kicker': 'Perfil',
    'about.profile.title': 'Construyo software claro para usuarios y operable para equipos técnicos.',
    'about.profile.p1':
      'Conecto producto, arquitectura y despliegue: desde interfaces móviles hasta APIs, automatizaciones, infraestructura y flujos de entrega.',
    'about.profile.p2':
      'Mi enfoque es pragmático: entender el problema, reducir fricción, publicar rápido y dejar una base mantenible.',
    'about.interests.kicker': 'Especialidades',
    'about.interests.title': 'Áreas técnicas.',
    'about.cta.title': 'Conecta conmigo.',

    'contact.hero.eyebrow': 'Contacto',
    'contact.hero.title': 'Contacta con Sergio Anastacio',
    'contact.hero.copy':
      '¿Tienes un proyecto, oportunidad profesional o duda sobre una app? Escríbeme al correo adecuado y respondo lo antes posible.',
    'contact.option1': 'Negocios y profesional',
    'contact.option1.copy': 'Clientes, entrevistas, colaboración profesional y oportunidades generales.',
    'contact.option2': 'Soporte de apps',
    'contact.option2.copy': 'Soporte, errores, dudas de uso y reportes relacionados con apps móviles.',
    'contact.option3': 'Apps y privacidad',
    'contact.option3.copy': 'Consultas sobre privacidad, publicación en tiendas y políticas de apps.',
    'contact.send': 'Enviar correo',

    'concept.badge': 'Concepto · No publicado',
    'concept.notice':
      'TaskForge es un producto en concepto. Las funciones, plataformas y políticas descritas aquí son provisionales y se actualizarán antes de cualquier publicación en las tiendas. No se recoge ningún dato de usuario todavía.',

    'signal.header.left': 'Áreas activas',
    'signal.header.right': 'Static-first Astro',

    'footer.tagline': 'Software developer building mobile apps, cloud systems, automation and AI-powered products.',
    'footer.products': 'Productos',
    'footer.professional': 'Profesional',
    'footer.legal': 'Legal',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.built': 'Construido con Astro y desplegado en GitHub Pages.',
  },
  en: {
    'nav.home': 'Home',
    'nav.apps': 'Apps',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'a11y.skipLink': 'Skip to content',
    'skip': 'Skip to content',
    'toggle.theme': 'Toggle theme',
    'toggle.menu.open': 'Open menu',
    'toggle.menu.close': 'Close menu',
    'lang.label': 'EN',

    'home.hero.eyebrow': 'Software Developer, AI Solutions Architect & Tech Lead',
    'home.hero.title': 'Sergio Anastacio',
    'home.hero.copy':
      'I design and build mobile apps, cloud systems, automation and AI integrations. Clear, maintainable software ready to scale.',
    'home.hero.cta.apps': 'View Apps',
    'home.hero.cta.contact': 'Contact Me',

    'home.summary.kicker': 'Freelance Software Developer',
    'home.summary.title': 'Architecture, code and deployment for real products.',
    'home.summary.copy':
      'Public hub for mobile apps, support, privacy, portfolio and professional services from a software developer with experience as Tech Lead and AI Solutions Architect.',
    'home.summary.mobile': 'Mobile Apps',
    'home.summary.mobile.copy':
      'iOS and Android app development with landing, support and privacy per product.',
    'home.summary.cloud': 'Cloud Systems',
    'home.summary.cloud.copy':
      'APIs, automation, deployments and operational workflows designed to scale without friction.',
    'home.summary.ai': 'AI Products',
    'home.summary.ai.copy':
      'AI integrations that reduce repetitive tasks and turn technical context into actions.',

    'home.apps.kicker': 'Apps',
    'home.apps.title': 'Mobile apps under the Sergio Anastacio brand.',
    'home.apps.cta': 'View all',

    'home.services.kicker': 'Services',
    'home.services.title': 'Services for clients, teams and digital products.',
    'home.services.1.title': 'Mobile App Development',
    'home.services.1.copy': 'iOS and Android apps with clean architecture, API integration and scalable publishing.',
    'home.services.2.title': 'Backend APIs & DevOps',
    'home.services.2.copy': '.NET services, databases, CI/CD, Docker, GitHub Actions and cloud automation.',
    'home.services.3.title': 'AI Integration',
    'home.services.3.copy': 'AI workflows for support, analysis, automation and products with intelligent assistance.',

    'home.portfolio.kicker': 'Portfolio',
    'home.portfolio.title': 'Technical case studies and architecture capabilities.',
    'home.portfolio.cta': 'View portfolio',

    'home.cta.kicker': 'Contact',
    'home.cta.title': "Let's talk about apps, APIs, automation or AI.",
    'home.cta.body':
      'For professional opportunities, app support or technical collaboration, reach out to the most suitable email.',
    'home.cta.secondary': 'View options',

    'apps.hero.eyebrow': 'Mobile Apps',
    'apps.hero.title': 'iOS and Android app catalog.',
    'apps.hero.copy':
      'Mobile apps developed by Sergio Anastacio. Release status, available platforms and official App Store and Google Play links.',
    'apps.cta.kicker': 'Apps Support',
    'apps.cta.title': 'Have a question about an app?',
    'apps.cta.body':
      'Reach the support email to report bugs, ask about privacy or send requests related to mobile products.',
    'apps.cta.secondary': 'Support hub',
    'card.viewapp': 'View App',
    'card.privacy': 'Privacy',
    'card.support': 'Support',

    'portfolio.hero.eyebrow': 'Portfolio',
    'portfolio.hero.title': 'Software development case studies.',
    'portfolio.hero.copy': 'Technical case studies showing how I approach software architecture, mobile apps, automation and AI integrations for clients and products.',
    'portfolio.cta.kicker': 'Collaboration',
    'portfolio.cta.title': 'Want to review a technical case or build something similar?',
    'portfolio.cta.secondary': 'Services',
    'card.casestudy': 'View Case Study',

    'services.hero.eyebrow': 'Services',
    'services.hero.title': 'Freelance software development services.',
    'services.hero.copy':
      'Software consulting and development for companies, startups and teams that need mobile apps, APIs, automation, DevOps and AI integrations.',
    'services.cta.kicker': 'Start',
    'services.cta.title': 'Tell me what you need to build.',
    'services.cta.body':
      'Share the problem, target platform, key dates and any existing stack.',
    'services.cta.secondary': 'View portfolio',

    'about.hero.eyebrow': 'About',
    'about.hero.title': 'Sergio Anastacio, Software Developer.',
    'about.hero.copy':
      'Software developer with experience as Tech Lead and AI Solutions Architect. I specialize in mobile apps, backend architecture, DevOps automation and AI-powered systems.',
    'about.profile.kicker': 'Profile',
    'about.profile.title': 'I build clear software for users and operable systems for technical teams.',
    'about.profile.p1':
      'I connect product, architecture and deployment: from mobile interfaces to APIs, automation, infrastructure and delivery flows.',
    'about.profile.p2':
      'My approach is pragmatic: understand the problem, reduce friction, ship fast and leave a maintainable foundation.',
    'about.interests.kicker': 'Specialties',
    'about.interests.title': 'Technical areas.',
    'about.cta.title': 'Connect with me.',

    'contact.hero.eyebrow': 'Contact',
    'contact.hero.title': 'Contact Sergio Anastacio',
    'contact.hero.copy':
      'Have a project, professional opportunity or question about an app? Email the right address and I will reply as soon as possible.',
    'contact.option1': 'Business & professional',
    'contact.option1.copy': 'Clients, interviews, professional collaboration and general opportunities.',
    'contact.option2': 'App support',
    'contact.option2.copy': 'Support, bugs, usage questions and reports related to mobile apps.',
    'contact.option3': 'Apps & privacy',
    'contact.option3.copy': 'Questions about privacy, store publishing and app policies.',
    'contact.send': 'Send email',

    'concept.badge': 'Concept · Not published',
    'concept.notice':
      'TaskForge is a product concept. The features, platforms and policies described here are provisional and will be updated before any release in the stores. No user data is being collected yet.',

    'signal.header.left': 'Active build areas',
    'signal.header.right': 'Static-first Astro',

    'footer.tagline': 'Software developer building mobile apps, cloud systems, automation and AI-powered products.',
    'footer.products': 'Products',
    'footer.professional': 'Professional',
    'footer.legal': 'Legal',
    'footer.rights': 'All rights reserved.',
    'footer.built': 'Built with Astro and deployed through GitHub Pages.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
