# Despliegue rápido (comandos)

Windows (PowerShell o Git Bash):

```powershell
# configurar repo remoto y subir
git init
git add .
git commit -m "Inicial: portafolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Linux / macOS:

```bash
git init
git add .
git commit -m "Inicial: portafolio"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Después de hacer `git push` a `main`, GitHub Actions ejecutará el workflow y publicará el sitio en GitHub Pages. En la pestaña *Actions* podés ver el progreso del deploy.