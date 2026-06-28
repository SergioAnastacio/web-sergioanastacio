import { site } from './site';

export type AppStatus = 'Available' | 'Beta' | 'Coming Soon';
export type Platform = 'iOS' | 'Android';

export interface AppFaq {
  question: string;
  answer: string;
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
      'TaskForge es una app en preparación para organizar tareas, mantener enfoque diario y convertir ideas en progreso visible sin una interfaz pesada.',
    status: 'Coming Soon',
    concept: true,
    platforms: ['iOS', 'Android'],
    features: [
      'Planeación diaria con una lista clara de prioridades.',
      'Estados simples para distinguir pendiente, en progreso y completado.',
      'Diseño ligero pensado para consultar y actualizar tareas rápido.',
      'Base preparada para soporte, privacidad y publicación en tiendas.',
    ],
    faq: [
      {
        question: '¿Cuándo estará disponible TaskForge?',
        answer:
          'TaskForge está en fase de preparación. Esta página funcionará como sitio oficial cuando la app esté lista para pruebas o publicación.',
      },
      {
        question: '¿Estará disponible en iOS y Android?',
        answer:
          'La intención inicial es publicar TaskForge para iOS y Android. Los enlaces de descarga aparecerán cuando cada tienda apruebe la app.',
      },
      {
        question: '¿Cómo puedo solicitar soporte?',
        answer: `Puedes escribir a ${site.emails.support} indicando la app, plataforma y una descripción breve del problema.`,
      },
    ],
    knownIssues: ['No hay incidencias públicas registradas porque la app aún no está publicada.'],
    changelog: [
      {
        version: '0.1.0',
        released: 'Planned',
        changes: [
          'Definición inicial del producto.',
          'Preparación de URLs públicas para landing, privacidad, soporte y términos.',
          'Estructura base para futuras notas de versión.',
        ],
      },
    ],
    privacy: {
      lastUpdated: '2026-06-28',
      introduction:
        'TaskForge está en fase Coming Soon. Esta política describe la intención inicial de privacidad y se actualizará antes de cualquier publicación en tiendas.',
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
        'No hay servicios de terceros confirmados para la versión Coming Soon.',
        'Si se agregan analítica, crash reporting, pagos o autenticación, esta política se actualizará antes de publicar.',
      ],
      children:
        'TaskForge no está dirigida a menores de 13 años. Si esto cambia, la política se actualizará con controles apropiados.',
      rights: `Para preguntas o solicitudes relacionadas con privacidad, escribe a ${site.emails.apps}.`,
    },
    terms: {
      lastUpdated: '2026-06-28',
      summary:
        'Estos términos son una versión inicial para la presencia pública de TaskForge. Los términos finales se ajustarán antes de publicar la app.',
      usage: [
        'Usa la app de forma legal y respetando las tiendas donde se distribuya.',
        'No intentes afectar la seguridad, disponibilidad o integridad del producto.',
        'La disponibilidad de funciones puede cambiar durante versiones beta o pruebas.',
      ],
      accounts:
        'La versión Coming Soon no confirma todavía si requerirá cuentas. Si se agregan cuentas, se documentarán responsabilidades y opciones de eliminación.',
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
