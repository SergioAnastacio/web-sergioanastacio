export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'nav.apps': 'Apps',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Servicios',
    'nav.about': 'Acerca',
    'nav.contact': 'Contacto',
    'skip': 'Saltar al contenido',
    'toggle.theme': 'Cambiar tema',
    'toggle.menu.open': 'Abrir menú',
    'toggle.menu.close': 'Cerrar menú',
    'lang.label': 'ES',

    'home.hero.eyebrow': 'Software Developer & Mobile Apps',
    'home.hero.title': 'Sergio Anastacio',
    'home.hero.copy':
      'Diseño y construyo apps móviles, sistemas cloud, automatización e integraciones con IA para productos simples de usar y sólidos de operar.',
    'home.hero.cta.apps': 'Ver Apps',
    'home.hero.cta.contact': 'Contáctame',

    'home.summary.kicker': 'Marca Personal',
    'home.summary.title': 'Software claro para productos reales.',
    'home.summary.copy':
      'Hub público para apps móviles, soporte, privacidad, portfolio y servicios profesionales, con foco en rendimiento, claridad y mantenimiento a largo plazo.',
    'home.summary.mobile': 'Mobile Apps',
    'home.summary.mobile.copy':
      'Presencia pública para apps en App Store y Google Play, con landing, soporte y privacidad por producto.',
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

    'apps.hero.eyebrow': 'Apps',
    'apps.hero.title': 'Mobile apps built for focused work.',
    'apps.hero.copy':
      'Catálogo público de apps móviles, estado de publicación, plataformas disponibles y enlaces requeridos por App Store y Google Play.',
    'apps.cta.kicker': 'Soporte de Apps',
    'apps.cta.title': '¿Tienes una pregunta sobre una app?',
    'apps.cta.body':
      'Escríbeme al correo de soporte para reportar bugs, dudas de privacidad o solicitudes relacionadas con productos móviles.',
    'apps.cta.secondary': 'Centro de soporte',
    'card.viewapp': 'Ver App',
    'card.privacy': 'Privacidad',
    'card.support': 'Soporte',

    'portfolio.hero.eyebrow': 'Portfolio',
    'portfolio.hero.title': 'Portfolio técnico y casos de estudio.',
    'portfolio.hero.copy': 'Casos técnicos y capacidades para clientes, entrevistas y colaboración profesional.',
    'portfolio.cta.kicker': 'Colaboración',
    'portfolio.cta.title': '¿Quieres revisar un caso técnico o construir algo similar?',
    'portfolio.cta.secondary': 'Ver servicios',
    'card.casestudy': 'Ver caso',

    'services.hero.eyebrow': 'Servicios',
    'services.hero.title': 'Servicios de software para productos confiables.',
    'services.hero.copy':
      'Diseño y desarrollo soluciones digitales para negocios y equipos que necesitan apps, APIs, automatización e integraciones con IA.',
    'services.cta.kicker': 'Empecemos',
    'services.cta.title': 'Cuéntame qué necesitas construir.',
    'services.cta.body':
      'Comparte el problema, plataforma objetivo, fechas clave y cualquier stack existente.',
    'services.cta.secondary': 'Ver portfolio',

    'about.hero.eyebrow': 'Acerca',
    'about.hero.title': 'Desarrollador de software enfocado en sistemas útiles.',
    'about.hero.copy':
      'Desarrollador de software enfocado en apps móviles, arquitectura backend, automatización DevOps y sistemas con IA.',
    'about.profile.kicker': 'Perfil',
    'about.profile.title': 'Me interesa construir software que sea claro para usuarios y operable para equipos técnicos.',
    'about.profile.p1':
      'Conecto producto, arquitectura y despliegue: desde interfaces móviles hasta APIs, automatizaciones, infraestructura y flujos de entrega.',
    'about.profile.p2':
      'Mi enfoque es pragmático: entender el problema, reducir fricción, publicar rápido y dejar una base mantenible.',
    'about.interests.kicker': 'Intereses',
    'about.interests.title': 'Áreas técnicas.',
    'about.cta.title': 'Conecta conmigo.',

    'contact.hero.eyebrow': 'Contacto',
    'contact.hero.title': 'Contáctame',
    'contact.hero.copy':
      'Usa el correo adecuado según el tipo de solicitud. Los enlaces apuntan directo a tu cliente de correo.',
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
    'nav.apps': 'Apps',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'skip': 'Skip to content',
    'toggle.theme': 'Toggle theme',
    'toggle.menu.open': 'Open menu',
    'toggle.menu.close': 'Close menu',
    'lang.label': 'EN',

    'home.hero.eyebrow': 'Software Developer & Mobile Apps',
    'home.hero.title': 'Sergio Anastacio',
    'home.hero.copy':
      'I design and build mobile apps, cloud systems, automation and AI integrations for products that are simple to use and solid to operate.',
    'home.hero.cta.apps': 'View Apps',
    'home.hero.cta.contact': 'Contact Me',

    'home.summary.kicker': 'Personal Brand',
    'home.summary.title': 'Clear software for real products.',
    'home.summary.copy':
      'Public hub for mobile apps, support, privacy, portfolio and professional services, focused on performance, clarity and long-term maintainability.',
    'home.summary.mobile': 'Mobile Apps',
    'home.summary.mobile.copy':
      'Public presence for apps on the App Store and Google Play, with landing, support and privacy per product.',
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

    'apps.hero.eyebrow': 'Apps',
    'apps.hero.title': 'Mobile apps built for focused work.',
    'apps.hero.copy':
      'Public catalog of mobile apps, release status, available platforms and the links required by the App Store and Google Play.',
    'apps.cta.kicker': 'Apps Support',
    'apps.cta.title': 'Have a question about an app?',
    'apps.cta.body':
      'Reach the support email to report bugs, ask about privacy or send requests related to mobile products.',
    'apps.cta.secondary': 'Support hub',
    'card.viewapp': 'View App',
    'card.privacy': 'Privacy',
    'card.support': 'Support',

    'portfolio.hero.eyebrow': 'Portfolio',
    'portfolio.hero.title': 'Technical portfolio and case studies.',
    'portfolio.hero.copy': 'Technical cases and capabilities for clients, interviews and professional collaboration.',
    'portfolio.cta.kicker': 'Collaboration',
    'portfolio.cta.title': 'Want to review a technical case or build something similar?',
    'portfolio.cta.secondary': 'Services',
    'card.casestudy': 'View Case Study',

    'services.hero.eyebrow': 'Services',
    'services.hero.title': 'Software services for reliable products.',
    'services.hero.copy':
      'I design and develop digital solutions for businesses and teams that need apps, APIs, automation and AI integrations.',
    'services.cta.kicker': 'Start',
    'services.cta.title': 'Tell me what you need to build.',
    'services.cta.body':
      'Share the problem, target platform, key dates and any existing stack.',
    'services.cta.secondary': 'View portfolio',

    'about.hero.eyebrow': 'About',
    'about.hero.title': 'Software developer focused on useful systems.',
    'about.hero.copy':
      'Software developer focused on mobile apps, backend architecture, DevOps automation and AI-powered systems.',
    'about.profile.kicker': 'Profile',
    'about.profile.title': 'I care about building software that is clear for users and operable for technical teams.',
    'about.profile.p1':
      'I connect product, architecture and deployment: from mobile interfaces to APIs, automation, infrastructure and delivery flows.',
    'about.profile.p2':
      'My approach is pragmatic: understand the problem, reduce friction, ship fast and leave a maintainable foundation.',
    'about.interests.kicker': 'Interests',
    'about.interests.title': 'Technical areas.',
    'about.cta.title': 'Connect with me.',

    'contact.hero.eyebrow': 'Contact',
    'contact.hero.title': 'Contact Me',
    'contact.hero.copy':
      'Use the right email for your request. Links open directly in your mail client.',
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
