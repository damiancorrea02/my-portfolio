# Desplegar Portafolio (GitHub Pages)

Guía rápida para publicar tu portafolio y obtener una URL pública accesible por cualquier persona.

Opciones rápidas:
- **GitHub Pages** — ideal para sitios estáticos (HTML/CSS/JS). Gratis y con HTTPS.

Pasos mínimos (recomendado):

1. Crea un repositorio en GitHub (por ejemplo `portafolio`).
2. Conecta tu carpeta local a ese repo y sube los archivos:

```bash
git init
git add .
git commit -m "Inicial: portafolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

3. Añadí el workflow de GitHub Actions (ya incluido en este proyecto) — cuando hagas `git push` a `main` se desplegará automáticamente a GitHub Pages y te dará una URL tipo `https://TU_USUARIO.github.io/TU_REPO`.

Notas:
- Si no querés usar Actions, podés activar Pages desde la configuración del repo (Settings → Pages) y elegir la rama `main` y carpeta `/ (root)`.
- Para cambiar la URL o usar un dominio propio, ver Settings → Pages.

Si querés, te ayudo a crear el repo y hacer el primer push (necesitaré que pegues el enlace del repo o que ejecutes los comandos localmente).
