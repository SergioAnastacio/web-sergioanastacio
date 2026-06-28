import { ui, defaultLang, languages, type Lang, type UIKey } from './ui';

export { languages, defaultLang };
export type { Lang, UIKey };

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in languages) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return (key: UIKey): string => ui[lang][key] ?? ui[defaultLang][key] ?? key;
}

export function getLocalizedPath(path: string, lang: Lang): string {
  const clean = path === '/' ? '' : path;
  if (lang === defaultLang) return clean || '/';
  return `/en${clean}`;
}

export function getAlternatePath(pathname: string, targetLang: Lang): string {
  const stripped = pathname.replace(/^\/en(\/|$)/, '$1');
  return getLocalizedPath(stripped || '/', targetLang);
}

const monthNamesEs = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
];
const monthNamesEn = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split('-').map((n) => parseInt(n, 10));
  if (!y || !m || !d) return iso;
  if (lang === 'en') {
    return `${monthNamesEn[m - 1]} ${d}, ${y}`;
  }
  return `${d} de ${monthNamesEs[m - 1]} de ${y}`;
}
