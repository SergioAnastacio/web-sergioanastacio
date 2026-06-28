import { site } from './site';

export type AppStatus = 'Available' | 'Beta' | 'Coming Soon';
export type Platform = 'iOS' | 'Android';

export interface AppFaq {
  question: string;
  answer: string;
  questionEn?: string;
  answerEn?: string;
}

export interface AppRelease {
  version: string;
  released: string;
  changes: string[];
}

export interface AppInfo {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: AppStatus;
  concept?: boolean;
  platforms: Platform[];
  appStoreUrl?: string;
  googlePlayUrl?: string;
  features: string[];
  faq: AppFaq[];
  knownIssues: string[];
  changelog: AppRelease[];
  privacy: {
    lastUpdated: string;
    introduction: string;
    collected: string[];
    usage: string[];
    storage: string;
    thirdPartyServices: string[];
    children: string;
    rights: string;
  };
  terms: {
    lastUpdated: string;
    summary: string;
    usage: string[];
    accounts: string;
    subscriptions: string;
    limitations: string;
  };
}

export const apps: AppInfo[] = [
  {
    slug: 'taskforge',
    name: 'TaskForge',
    tagline: 'Simple task management for focused builders.',
    description:
      'TaskForge es un concepto de producto para gestionar tareas, mantener foco diario y convertir ideas en progreso visible, sin una interfaz pesada ni complejidad innecesaria.',
    status: 'Coming Soon',
    concept: true,
    platforms: ['iOS', 'Android'],
    features: [
      'Lista diaria con prioridades claras para empezar el día enfocado.',
      'Estados simples: pendiente, en progreso y completado.',
      'Interfaz ligera pensada para consultar y actualizar tareas en segundos.',
      'Arquitectura preparada para sincronización, privacidad y publicación en tiendas.',
    ],
    faq: [
      {
        question: '¿Cuándo estará disponible TaskForge?',
        questionEn: 'When will TaskForge be available?',
        answer:
          'TaskForge se encuentra en fase de concepto. Los enlaces de descarga en App Store y Google Play aparecerán en esta página cuando la app esté lista para pruebas o publicación.',
        answerEn:
          'TaskForge is currently a concept. Download links for the App Store and Google Play will appear on this page when the app is ready for testing or release.',
      },
      {
        question: '¿Estará disponible en iOS y Android?',
        questionEn: 'Will it be available on iOS and Android?',
        answer:
          'El plan es publicar TaskForge para iOS y Android. Los enlaces se activarán cuando cada tienda apruebe la app.',
        answerEn:
          'The plan is to release TaskForge for iOS and Android. Links will go live once each store approves the app.',
      },
      {
        question: '¿Cómo puedo solicitar soporte?',
        questionEn: 'How can I request support?',
        answer: `Puedes escribir a ${site.emails.support} indicando la app, plataforma y una descripción breve del problema.`,
        answerEn: `You can write to ${site.emails.support} with the app name, platform and a short description of the issue.`,
      },
    ],
    knownIssues: ['Aún no hay incidencias publicadas. Esta sección se actualizará con cada release.'],
    changelog: [
      {
        version: '0.1.0',
        released: '2026-06',
        changes: [
          'Definición del producto y propuesta de valor.',
          'Apertura de URLs públicas para landing, privacidad, soporte y términos.',
          'Estructura base de changelog lista para futuras releases.',
        ],
      },
    ],
    privacy: {
      lastUpdated: '2026-06-28',
      introduction:
        'TaskForge es un producto en concepto. Esta política describe la intención de privacidad del producto y se actualizará antes de cualquier publicación en las tiendas. Ningún dato de usuario se recoge todavía, ya que la app aún no ha sido publicada.',
      collected: [
        'Información que el usuario decida ingresar dentro de la app cuando esté disponible.',
        'Datos técnicos mínimos necesarios para diagnóstico si se habilita soporte o analítica en el futuro.',
      ],
      usage: [
        'Operar las funciones principales de la app.',
        'Responder solicitudes de soporte.',
        'Mejorar estabilidad, rendimiento y experiencia del producto.',
      ],
      storage:
        'La versión final documentará si los datos permanecen en el dispositivo, se sincronizan en la nube o usan servicios de terceros.',
      thirdPartyServices: [
        'No hay servicios de terceros confirmados para la versión de concepto.',
        'Si se agregan analítica, crash reporting, pagos o autenticación, esta política se actualizará antes de publicar.',
      ],
      children:
        'TaskForge no está dirigida a menores de 13 años. Si esto cambia, la política se actualizará con los controles apropiados.',
      rights: `Para preguntas o solicitudes relacionadas con privacidad, escribe a ${site.emails.apps}.`,
    },
    terms: {
      lastUpdated: '2026-06-28',
      summary:
        'Estos términos rigen el uso de TaskForge. La versión final se ajustará antes de la publicación del producto, manteniendo la transparencia sobre cuentas, suscripciones y responsabilidades del usuario.',
      usage: [
        'Usa la app de forma legal y respetando las tiendas donde se distribuya.',
        'No intentes afectar la seguridad, disponibilidad o integridad del producto.',
        'La disponibilidad de funciones puede cambiar durante versiones beta o pruebas.',
      ],
      accounts:
        'La versión de concepto no confirma todavía si requerirá cuentas. Si se agregan cuentas, se documentarán responsabilidades y opciones de eliminación.',
      subscriptions:
        'No hay suscripciones confirmadas. Si se agregan compras o planes pagados, se documentarán precios, renovación y cancelación.',
      limitations:
        'El producto se ofrece como herramienta de productividad y no garantiza resultados específicos. Las funciones pueden cambiar durante el desarrollo.',
    },
  },
];

export function getAppBySlug(slug: string | undefined) {
  return apps.find((app) => app.slug === slug);
}
