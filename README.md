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

## Dominio

El dominio configurado para GitHub Pages es:

```text
sergionastacio.com
```

El archivo `public/CNAME` conserva esa configuración dentro del artefacto publicado.

En GitHub, configura `Settings > Pages > Source` con `GitHub Actions`.
