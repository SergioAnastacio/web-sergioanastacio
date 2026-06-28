# web-sergioanastacio

Sitio personal de Sergio Anastacio construido con Astro y publicado en GitHub Pages.

## Flujo de ramas

- `main`: rama de publicación. Cada push a `main` ejecuta el workflow de GitHub Pages.
- `dev`: rama de desarrollo. Los cambios deben entrar a `main` mediante pull request.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura del sitio

Rutas principales:

```text
/
/apps
/apps/{app-slug}
/apps/{app-slug}/changelog
/portfolio
/portfolio/{case-study-slug}
/services
/about
/contact
/support
/support/{app-slug}
/privacy
/privacy/{app-slug}
/terms
/terms/{app-slug}
/legal
```

Astro genera el sitemap con `@astrojs/sitemap` en:

```text
/sitemap-index.xml
```

## Dominio

El dominio configurado para GitHub Pages es:

```text
sergioanastacio.com
```

El archivo `public/CNAME` conserva esa configuración dentro del artefacto publicado.

En GitHub, configura `Settings > Pages > Source` con `GitHub Actions`.

En Cloudflare DNS, configura el dominio raiz con registros `A` hacia GitHub Pages:

```text
A  @  185.199.108.153
A  @  185.199.109.153
A  @  185.199.110.153
A  @  185.199.111.153
```

Y configura `www` como:

```text
CNAME  www  SergioAnastacio.github.io
```

Durante la validacion inicial en GitHub Pages conviene dejar esos registros como `DNS only`.

## Correo

El correo del dominio se gestiona con Zoho Mail.

Direcciones publicadas por el sitio:

```text
contacto@sergioanastacio.com
soporte@sergioanastacio.com
apps@sergioanastacio.com
```

Los registros de correo (MX, SPF, DKIM y DMARC cuando aplique) deben mantenerse en Cloudflare DNS según lo indicado por Zoho Admin Console.
