import { site } from './site';

export type ProductStatus = 'Available' | 'Beta' | 'Release Candidate' | 'Coming Soon';
export type ProductCategory = 'Mobile' | 'Desktop' | 'Web' | 'Platform';
export type Platform = 'iOS' | 'Android' | 'Windows' | 'macOS' | 'Linux' | 'Web';

export interface ProductFaq {
  question: string;
  answer: string;
  questionEn?: string;
  answerEn?: string;
}

export interface ProductRelease {
  version: string;
  released: string;
  changes: string[];
  changesEn?: string[];
}

export interface ProductModule {
  title: string;
  copy: string;
  titleEn?: string;
  copyEn?: string;
}

export interface ProductPlan {
  name: string;
  summary: string;
  summaryEn?: string;
}

export interface ProductInfo {
  slug: string;
  name: string;
  productName?: string;
  category: ProductCategory;
  featured?: boolean;
  status: ProductStatus;
  statusNote?: string;
  statusNoteEn?: string;
  concept?: boolean;
  platforms: Platform[];
  tagline: string;
  taglineEn?: string;
  description: string;
  descriptionEn?: string;
  iconUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
  downloadUrl?: string;
  demoUrl?: string;
  features: string[];
  featuresEn?: string[];
  modules?: ProductModule[];
  plans?: ProductPlan[];
  faq: ProductFaq[];
  knownIssues: string[];
  knownIssuesEn?: string[];
  changelog: ProductRelease[];
  privacy: {
    lastUpdated: string;
    introduction: string;
    introductionEn?: string;
    collected: string[];
    collectedEn?: string[];
    usage: string[];
    usageEn?: string[];
    storage: string;
    storageEn?: string;
    thirdPartyServices: string[];
    thirdPartyServicesEn?: string[];
    children: string;
    childrenEn?: string;
    rights: string;
    rightsEn?: string;
  };
  terms: {
    lastUpdated: string;
    summary: string;
    summaryEn?: string;
    usage: string[];
    usageEn?: string[];
    accounts: string;
    accountsEn?: string;
    subscriptions: string;
    subscriptionsEn?: string;
    limitations: string;
    limitationsEn?: string;
  };
}

export const products: ProductInfo[] = [
  {
    slug: 'fresh-pos',
    name: 'Fresh-Pos',
    productName: 'Fresh Retail Core',
    category: 'Desktop',
    featured: true,
    status: 'Beta',
    statusNote: 'Beta privada rumbo a producción',
    statusNoteEn: 'Private beta moving toward production',
    platforms: ['Windows'],
    iconUrl: '/products/fresh-pos-icon.png',
    downloadUrl:
      'https://updates.sergioanastacio.com/apps/fresh-retail-core/mvp/win/x64/0.1.0-mvp.0/Fresh%20Retail%20Core%20Setup%200.1.0-mvp.0.exe',
    tagline:
      'Punto de venta desktop para tiendas físicas que necesitan vender, controlar inventario y cerrar caja aunque falle internet.',
    taglineEn:
      'Desktop point-of-sale for physical stores that need sales, inventory and cash closing even when internet fails.',
    description:
      'Fresh-Pos es una aplicación de escritorio para pequeños y medianos comercios. Inicia con operación local, base SQLite, POS, inventario, caja, tickets y una ruta clara hacia nube, IA y facturación.',
    descriptionEn:
      'Fresh-Pos is a desktop application for small and medium retail stores. It starts with local operation, SQLite, POS, inventory, cash register, tickets and a clear path toward cloud, AI and invoicing.',
    features: [
      'Venta rápida desde escritorio con búsqueda por producto, SKU o código de barras.',
      'Inventario local con movimientos, alertas de stock bajo y catálogo estructurado.',
      'Apertura, movimientos y cierre de caja con evidencia operativa.',
      'Ticket personalizado para tienda física e impresión térmica.',
      'Base local preparada para respaldo, sincronización cloud y actualizaciones futuras.',
      'Ruta de producto hacia IA operativa, facturación electrónica y acompañamiento comercial.',
    ],
    featuresEn: [
      'Fast desktop sales with product, SKU or barcode search.',
      'Local inventory with movements, low-stock alerts and structured catalog management.',
      'Cash opening, movements and closing with operational evidence.',
      'Custom store ticket and thermal printer support.',
      'Local base prepared for backup, cloud sync and future updates.',
      'Product path toward operational AI, electronic invoicing and guided rollout.',
    ],
    modules: [
      {
        title: 'POS',
        copy: 'Nueva venta, cobro en efectivo, tarjeta, transferencia o mixto.',
        titleEn: 'POS',
        copyEn: 'New sale, cash, card, transfer or mixed payment.',
      },
      {
        title: 'Inventario',
        copy: 'Productos, variantes, existencias, ajustes y stock bajo.',
        titleEn: 'Inventory',
        copyEn: 'Products, variants, stock levels, adjustments and low stock.',
      },
      {
        title: 'Caja',
        copy: 'Apertura, retiro, ingreso, efectivo esperado y corte.',
        titleEn: 'Cash Register',
        copyEn: 'Opening, withdrawals, deposits, expected cash and closing.',
      },
      {
        title: 'Tickets',
        copy: 'Identidad de tienda, vista previa, folio y ticket imprimible.',
        titleEn: 'Tickets',
        copyEn: 'Store identity, preview, folio and printable ticket.',
      },
      {
        title: 'Reportes',
        copy: 'Ventas, métodos de pago, productos bajos y operación diaria.',
        titleEn: 'Reports',
        copyEn: 'Sales, payment methods, low-stock products and daily operation.',
      },
      {
        title: 'Evolución',
        copy: 'Respaldos, nube, IA, facturación y módulos complementarios.',
        titleEn: 'Evolution',
        copyEn: 'Backups, cloud, AI, invoicing and complementary modules.',
      },
    ],
    plans: [
      {
        name: 'Core Free',
        summary: 'Prueba local controlada para una tienda, una caja y límites claros.',
        summaryEn: 'Controlled local trial for one store, one register and clear limits.',
      },
      {
        name: 'Control',
        summary: 'Operación formal con mayor capacidad, soporte, personalización y respaldo.',
        summaryEn: 'Formal operation with more capacity, support, customization and backup.',
      },
      {
        name: 'Intelligence',
        summary: 'Ruta premium con IA para preguntas sobre ventas, caja e inventario.',
        summaryEn: 'Premium path with AI for questions about sales, cash and inventory.',
      },
    ],
    faq: [
      {
        question: '¿Fresh-Pos funciona sin internet?',
        questionEn: 'Does Fresh-Pos work without internet?',
        answer:
          'Sí. La primera línea del producto es desktop-first con operación local y SQLite. La nube se plantea como evolución para respaldo y sincronización.',
        answerEn:
          'Yes. The first product line is desktop-first with local operation and SQLite. Cloud is planned as an evolution for backup and synchronization.',
      },
      {
        question: '¿Para qué negocios está pensado?',
        questionEn: 'What businesses is it designed for?',
        answer:
          'Está pensado para comercios pequeños y medianos como abarrotes, papelerías, boutiques, cosméticos, ferreterías pequeñas y tiendas que hoy operan con Excel, libreta o caja manual.',
        answerEn:
          'It is designed for small and medium stores such as grocery shops, stationery stores, boutiques, cosmetics shops, small hardware stores and businesses currently using Excel, notebooks or manual cash registers.',
      },
      {
        question: '¿Ya está listo para producción?',
        questionEn: 'Is it production-ready?',
        answer:
          'Está en beta privada rumbo a producción. El objetivo es validar el flujo real de venta, inventario, caja y ticket antes de ampliar nube, IA y facturación.',
        answerEn:
          'It is in private beta moving toward production. The goal is to validate real sales, inventory, cash and ticket workflows before expanding cloud, AI and invoicing.',
      },
      {
        question: '¿Cómo solicito una demo?',
        questionEn: 'How can I request a demo?',
        answer: `Puedes escribir a ${site.emails.contact} con el giro del negocio, número aproximado de productos y si ya cuentas con impresora o lector de códigos.`,
        answerEn: `You can write to ${site.emails.contact} with your business type, approximate product count and whether you already have a printer or barcode scanner.`,
      },
    ],
    knownIssues: [
      'Producto en beta privada. La disponibilidad pública, instalador y planes se confirmarán antes del lanzamiento comercial.',
    ],
    knownIssuesEn: [
      'Product in private beta. Public availability, installer and plans will be confirmed before commercial launch.',
    ],
    changelog: [
      {
        version: '0.1.0-mvp.0',
        released: '2026-07',
        changes: [
          'MVP desktop con shell Electron, React, SQLite local y módulos base de POS.',
          'Modelo comercial definido para Core Free, Control, Intelligence, Fiscal y Mobile Companion.',
          'Ruta de publicación Windows con instalador, actualizaciones y Release Management Service.',
        ],
        changesEn: [
          'Desktop MVP with Electron shell, React, local SQLite and base POS modules.',
          'Commercial model defined for Core Free, Control, Intelligence, Fiscal and Mobile Companion.',
          'Windows release path with installer, updates and Release Management Service.',
        ],
      },
    ],
    privacy: {
      lastUpdated: '2026-07-01',
      introduction:
        'Fresh-Pos se encuentra en beta privada. Esta política describe el enfoque de privacidad esperado para la aplicación desktop y se actualizará antes de cualquier lanzamiento público.',
      introductionEn:
        'Fresh-Pos is in private beta. This policy describes the expected privacy approach for the desktop application and will be updated before any public release.',
      collected: [
        'Datos operativos capturados por el usuario dentro del negocio, como productos, ventas, inventario, caja, tickets y configuración de tienda.',
        'Datos técnicos mínimos necesarios para diagnóstico, soporte, licenciamiento y actualización cuando esas funciones estén habilitadas.',
      ],
      collectedEn: [
        'Operational data entered by the user inside the business, such as products, sales, inventory, cash register, tickets and store settings.',
        'Minimum technical data needed for diagnostics, support, licensing and updates when those functions are enabled.',
      ],
      usage: [
        'Operar el punto de venta, inventario, caja y reportes locales.',
        'Brindar soporte, diagnóstico y mejoras de estabilidad.',
        'Preparar respaldo, sincronización cloud, licenciamiento o actualizaciones cuando el plan lo incluya.',
      ],
      usageEn: [
        'Operate local point-of-sale, inventory, cash register and reports.',
        'Provide support, diagnostics and stability improvements.',
        'Prepare backup, cloud sync, licensing or updates when included in the plan.',
      ],
      storage:
        'La versión inicial está diseñada para operar localmente con SQLite. Cualquier respaldo o sincronización cloud se documentará y habilitará por plan.',
      storageEn:
        'The initial version is designed to operate locally with SQLite. Any backup or cloud synchronization will be documented and enabled by plan.',
      thirdPartyServices: [
        'No hay servicios públicos obligatorios para la versión beta privada.',
        'Funciones futuras como actualizaciones, licencias, respaldo, IA o facturación podrán usar servicios externos documentados.',
      ],
      thirdPartyServicesEn: [
        'There are no mandatory public services for the private beta.',
        'Future features such as updates, licenses, backup, AI or invoicing may use documented external services.',
      ],
      children:
        'Fresh-Pos no está dirigido a menores de 13 años. Es una herramienta operativa para negocios.',
      childrenEn:
        'Fresh-Pos is not directed to children under 13. It is an operational tool for businesses.',
      rights: `Para preguntas o solicitudes relacionadas con privacidad, escribe a ${site.emails.apps}.`,
      rightsEn: `For privacy questions or requests, write to ${site.emails.apps}.`,
    },
    terms: {
      lastUpdated: '2026-07-01',
      summary:
        'Estos términos aplican al uso de Fresh-Pos durante su etapa beta y podrán actualizarse antes del lanzamiento público, instalación comercial o contratación de planes.',
      summaryEn:
        'These terms apply to Fresh-Pos during its beta stage and may be updated before public launch, commercial installation or plan subscription.',
      usage: [
        'Usa el producto de forma legal y únicamente para operación autorizada del negocio.',
        'No intentes afectar la seguridad, disponibilidad, licenciamiento o integridad del sistema.',
        'La versión beta puede cambiar funciones, límites, instaladores y disponibilidad sin previo aviso comercial.',
      ],
      usageEn: [
        'Use the product legally and only for authorized business operation.',
        'Do not attempt to affect the security, availability, licensing or integrity of the system.',
        'The beta version may change features, limits, installers and availability without commercial notice.',
      ],
      accounts:
        'La versión local puede operar con usuarios internos del negocio. Cualquier cuenta cloud, licencia o portal se documentará cuando esté disponible.',
      accountsEn:
        'The local version may operate with internal business users. Any cloud account, license or portal will be documented when available.',
      subscriptions:
        'Los planes, precios, límites, instalación, soporte y add-ons se confirmarán antes de una oferta comercial pública.',
      subscriptionsEn:
        'Plans, pricing, limits, installation, support and add-ons will be confirmed before a public commercial offer.',
      limitations:
        'Fresh-Pos es una herramienta operativa. El usuario debe validar sus datos, respaldos, hardware y obligaciones fiscales aplicables.',
      limitationsEn:
        'Fresh-Pos is an operational tool. The user must validate data, backups, hardware and applicable fiscal obligations.',
    },
  },
  {
    slug: 'taskforge',
    name: 'TaskForge',
    category: 'Mobile',
    status: 'Coming Soon',
    concept: true,
    platforms: ['iOS', 'Android'],
    tagline: 'Gestión simple de tareas para builders enfocados.',
    taglineEn: 'Simple task management for focused builders.',
    description:
      'TaskForge es un concepto de producto para gestionar tareas, mantener foco diario y convertir ideas en progreso visible, sin una interfaz pesada ni complejidad innecesaria.',
    descriptionEn:
      'TaskForge is a product concept for task management, daily focus and visible progress without a heavy interface or unnecessary complexity.',
    features: [
      'Lista diaria con prioridades claras para empezar el día enfocado.',
      'Estados simples: pendiente, en progreso y completado.',
      'Interfaz ligera pensada para consultar y actualizar tareas en segundos.',
      'Arquitectura preparada para sincronización, privacidad y publicación en tiendas.',
    ],
    featuresEn: [
      'Daily list with clear priorities to start focused.',
      'Simple states: pending, in progress and completed.',
      'Lightweight interface designed for quick check-ins and updates.',
      'Architecture prepared for sync, privacy and store publishing.',
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
        answer: `Puedes escribir a ${site.emails.support} indicando el producto, plataforma y una descripción breve del problema.`,
        answerEn: `You can write to ${site.emails.support} with the product name, platform and a short description of the issue.`,
      },
    ],
    knownIssues: ['Aún no hay incidencias publicadas. Esta sección se actualizará con cada release.'],
    knownIssuesEn: ['No known issues have been published yet. This section will be updated with each release.'],
    changelog: [
      {
        version: '0.1.0',
        released: '2026-06',
        changes: [
          'Definición del producto y propuesta de valor.',
          'Apertura de URLs públicas para landing, privacidad, soporte y términos.',
          'Estructura base de changelog lista para futuras releases.',
        ],
        changesEn: [
          'Product definition and value proposition.',
          'Public URLs opened for landing, privacy, support and terms.',
          'Base changelog structure ready for future releases.',
        ],
      },
    ],
    privacy: {
      lastUpdated: '2026-06-28',
      introduction:
        'TaskForge es un producto en concepto. Esta política describe la intención de privacidad del producto y se actualizará antes de cualquier publicación en las tiendas. Ningún dato de usuario se recoge todavía, ya que la app aún no ha sido publicada.',
      introductionEn:
        'TaskForge is a product concept. This policy describes the privacy intent of the product and will be updated before any store release. No user data is collected yet because the app has not been published.',
      collected: [
        'Información que el usuario decida ingresar dentro de la app cuando esté disponible.',
        'Datos técnicos mínimos necesarios para diagnóstico si se habilita soporte o analítica en el futuro.',
      ],
      collectedEn: [
        'Information the user chooses to enter in the app when it becomes available.',
        'Minimum technical data needed for diagnostics if support or analytics are enabled in the future.',
      ],
      usage: [
        'Operar las funciones principales de la app.',
        'Responder solicitudes de soporte.',
        'Mejorar estabilidad, rendimiento y experiencia del producto.',
      ],
      usageEn: [
        'Operate the main app features.',
        'Respond to support requests.',
        'Improve stability, performance and product experience.',
      ],
      storage:
        'La versión final documentará si los datos permanecen en el dispositivo, se sincronizan en la nube o usan servicios de terceros.',
      storageEn:
        'The final version will document whether data remains on device, syncs to the cloud or uses third-party services.',
      thirdPartyServices: [
        'No hay servicios de terceros confirmados para la versión de concepto.',
        'Si se agregan analítica, crash reporting, pagos o autenticación, esta política se actualizará antes de publicar.',
      ],
      thirdPartyServicesEn: [
        'No third-party services are confirmed for the concept version.',
        'If analytics, crash reporting, payments or authentication are added, this policy will be updated before release.',
      ],
      children:
        'TaskForge no está dirigida a menores de 13 años. Si esto cambia, la política se actualizará con los controles apropiados.',
      childrenEn:
        'TaskForge is not directed to children under 13. If this changes, the policy will be updated with appropriate controls.',
      rights: `Para preguntas o solicitudes relacionadas con privacidad, escribe a ${site.emails.apps}.`,
      rightsEn: `For privacy questions or requests, write to ${site.emails.apps}.`,
    },
    terms: {
      lastUpdated: '2026-06-28',
      summary:
        'Estos términos rigen el uso de TaskForge. La versión final se ajustará antes de la publicación del producto, manteniendo la transparencia sobre cuentas, suscripciones y responsabilidades del usuario.',
      summaryEn:
        'These terms govern the use of TaskForge. The final version will be adjusted before publication, keeping transparency around accounts, subscriptions and user responsibilities.',
      usage: [
        'Usa la app de forma legal y respetando las tiendas donde se distribuya.',
        'No intentes afectar la seguridad, disponibilidad o integridad del producto.',
        'La disponibilidad de funciones puede cambiar durante versiones beta o pruebas.',
      ],
      usageEn: [
        'Use the app legally and respect the stores where it is distributed.',
        'Do not attempt to affect product security, availability or integrity.',
        'Feature availability may change during beta or testing versions.',
      ],
      accounts:
        'La versión de concepto no confirma todavía si requerirá cuentas. Si se agregan cuentas, se documentarán responsabilidades y opciones de eliminación.',
      accountsEn:
        'The concept version does not yet confirm whether accounts will be required. If accounts are added, responsibilities and deletion options will be documented.',
      subscriptions:
        'No hay suscripciones confirmadas. Si se agregan compras o planes pagados, se documentarán precios, renovación y cancelación.',
      subscriptionsEn:
        'No subscriptions are confirmed. If purchases or paid plans are added, pricing, renewal and cancellation will be documented.',
      limitations:
        'El producto se ofrece como herramienta de productividad y no garantiza resultados específicos. Las funciones pueden cambiar durante el desarrollo.',
      limitationsEn:
        'The product is offered as a productivity tool and does not guarantee specific results. Features may change during development.',
    },
  },
];

export const mobileProducts = products.filter((product) => product.category === 'Mobile');
export const featuredProducts = products.filter((product) => product.featured);

export function getProductBySlug(slug: string | undefined) {
  return products.find((product) => product.slug === slug);
}

export function getProductDescription(product: ProductInfo, en: boolean) {
  return en && product.descriptionEn ? product.descriptionEn : product.description;
}

export function getProductTagline(product: ProductInfo, en: boolean) {
  return en && product.taglineEn ? product.taglineEn : product.tagline;
}

export function getProductFeatures(product: ProductInfo, en: boolean) {
  return en && product.featuresEn ? product.featuresEn : product.features;
}

export function getProductKnownIssues(product: ProductInfo, en: boolean) {
  return en && product.knownIssuesEn ? product.knownIssuesEn : product.knownIssues;
}
