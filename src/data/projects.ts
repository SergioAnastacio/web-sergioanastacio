export interface ProjectInfo {
  slug: string;
  name: string;
  type: string;
  stack: string[];
  summary: string;
  problem: string;
  solution: string;
  result: string;
  architecture: string[];
  decisions: string[];
  lessons: string[];
}

export const projects: ProjectInfo[] = [
  {
    slug: 'mobile-auth-platform',
    name: 'Mobile Authentication Platform',
    type: 'Software Architecture',
    stack: ['OIDC', 'PKCE', '.NET', 'PostgreSQL', 'Redis', 'GitHub Actions'],
    summary:
      'Arquitectura base para autenticación segura en aplicaciones móviles y servicios backend.',
    problem:
      'Varios productos móviles necesitan iniciar sesión de forma segura, compartir identidad y mantener una experiencia consistente entre plataformas.',
    solution:
      'Diseñar una base reutilizable con OIDC, PKCE, servicios backend desacoplados y automatización de despliegue.',
    result:
      'Fundación técnica reutilizable para apps móviles, APIs y futuras integraciones de producto.',
    architecture: [
      'Cliente móvil con flujo Authorization Code + PKCE.',
      'Servicio de identidad centralizado.',
      'APIs backend protegidas por tokens y claims mínimos.',
      'Pipeline de validación y publicación con GitHub Actions.',
    ],
    decisions: [
      'Separar identidad de la lógica de negocio.',
      'Usar PKCE para proteger clientes públicos móviles.',
      'Mantener secretos fuera del cliente y del repositorio.',
    ],
    lessons: [
      'La autenticación móvil debe diseñarse como plataforma, no como pantalla aislada.',
      'La trazabilidad de entornos evita errores entre desarrollo, QA y producción.',
    ],
  },
  {
    slug: 'cloud-delivery-automation',
    name: 'Cloud Delivery Automation',
    type: 'Cloud & DevOps',
    stack: ['Docker', 'GitHub Actions', 'Kubernetes', 'Cloudflare', 'ArgoCD'],
    summary:
      'Automatización de entrega para publicar cambios con ramas claras, validación y despliegues repetibles.',
    problem:
      'Los equipos pierden tiempo cuando despliegue, DNS, runtime config y evidencia de publicación no están conectados.',
    solution:
      'Definir pipelines, entornos y verificaciones que conectan repositorio, infraestructura y aplicación publicada.',
    result:
      'Mayor visibilidad sobre qué cambio llegó a qué entorno y qué evidencia respalda la publicación.',
    architecture: [
      'Branch workflow con revisión antes de publicar.',
      'Build reproducible en CI.',
      'Artefactos versionados y configuración separada por entorno.',
      'Validaciones posteriores al despliegue.',
    ],
    decisions: [
      'Priorizar automatización simple antes que infraestructura compleja.',
      'Mantener configuración visible en repositorio cuando sea posible.',
      'Separar secretos de valores públicos de runtime.',
    ],
    lessons: [
      'Un pipeline útil explica el estado real, no solo ejecuta comandos.',
      'DNS y hosting deben probarse como parte de la entrega.',
    ],
  },
  {
    slug: 'ai-operations-workflows',
    name: 'AI Operations Workflows',
    type: 'AI Solutions',
    stack: ['OpenAI APIs', 'Node.js', '.NET', 'PostgreSQL', 'Automation'],
    summary:
      'Flujos de trabajo con IA para acelerar análisis, soporte operativo y tareas repetibles.',
    problem:
      'Muchas operaciones técnicas requieren revisar contexto disperso antes de tomar una decisión o ejecutar una acción.',
    solution:
      'Construir asistentes y automatizaciones que conectan datos, repositorios y decisiones humanas con pasos verificables.',
    result:
      'Menos fricción en tareas repetitivas y mayor claridad sobre acciones ejecutadas por herramientas automatizadas.',
    architecture: [
      'Entrada estructurada de contexto.',
      'Servicios de integración con repositorios o sistemas internos.',
      'Validaciones antes de ejecutar acciones con impacto.',
      'Registro de resultados para auditoría ligera.',
    ],
    decisions: [
      'Mantener intervención humana en decisiones sensibles.',
      'Usar IA para reducir fricción, no para ocultar lógica crítica.',
      'Registrar evidencia operativa de cada acción relevante.',
    ],
    lessons: [
      'La IA funciona mejor cuando el flujo tiene límites claros.',
      'La automatización necesita observabilidad desde el primer día.',
    ],
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((project) => project.slug === slug);
}
