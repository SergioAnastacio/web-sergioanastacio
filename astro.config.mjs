import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const LAST_MODIFIED = new Date().toISOString();

export default defineConfig({
  site: 'https://sergioanastacio.com',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-ES',
          en: 'en-US',
        },
      },
      serialize(item) {
        const url = new URL(item.url);
        const pathname = url.pathname.replace(/\/$/, '') || '/';

        const highPriority = ['/', '/en'];
        const mediumPriority = ['/apps', '/en/apps', '/services', '/en/services', '/portfolio', '/en/portfolio', '/about', '/en/about'];
        const lowPriority = ['/contact', '/en/contact', '/legal', '/en/legal'];

        if (highPriority.includes(pathname)) {
          item.priority = 1.0;
        } else if (mediumPriority.includes(pathname)) {
          item.priority = 0.8;
        } else if (lowPriority.includes(pathname)) {
          item.priority = 0.6;
        } else if (pathname.includes('/privacy') || pathname.includes('/terms') || pathname.includes('/support')) {
          item.priority = 0.5;
        } else {
          item.priority = 0.7;
        }

        item.lastmod = LAST_MODIFIED;
        item.changefreq = pathname === '/' || pathname === '/en/' ? 'weekly' : 'monthly';

        return item;
      },
      filter(page) {
        return !page.includes('/404');
      },
    }),
    react(),
  ],

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
