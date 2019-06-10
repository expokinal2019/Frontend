# Buenas prácticas para el desarrollo web

Una pequeña de guía algunas buenas prácticas que deberias comenzar a seguir lo más pronto posible para el desarrollo web.

## HTML
+ No utilizar "inline-styles", son poco flexibles, por ejemplo no puedes aplicar "media-queries" a estos estilos y no son reutilizables. Además que no permite que sea legible tu código.
 ```html
 <div style="margin: 10px;">
 ```
## CSS
## GIT
Git es un sistema de control de versiones. Un herramienta muy poderosa que es necesaria aprender.

[Para comenzar esta bien por aquí](https://rogerdudler.github.io/git-guide/)

Una forma usual para trabajar con git, equipos y proyectos. Consiste en trabajar características, nuevas implementaciones o mejoras, en diferentes ramas y luego integralas a la rama maestra.

Por ejemplo, desarrollas una aplicación web y alguien del equipo desarrollara una nueva herramienta para crear tareas. Para ello crea una nueva rama `new-create-task`:
```bash
git branch new-create-task # Crea una nueva rama
git checkout new-create-task # Cambia a la rama new-create-task
```
o la version resumida
```bash
git checkout -b new-create-task # Crea una nueva rama y cambia de rama.
```
En esa rama seguira trabajando hasta que complete el trabajo. Una forma de publicar la rama puede ser `git push -u origin new-create-task`.

El siguiente paso después de haber terminado el trabajo en la rama de la característica es integrarla a la rama `master`.
```bash
git checkout master
git merge new-create-task
```
Si fuera necesario resolver conflictos.

# Consejos especialmente para este proyecto
## Node
Deberías instalar node con esta herramienta [nvm](https://github.com/nvm-sh/nvm). Te permite tener varias versiones de node instaladas y ¡cambiarlas en un comando!
## Gestor de paquetes de node
Para este proyecto utilzaremos **[yarn instrucciones para instalar aquí](https://yarnpkg.com/en/)**. Algunos comandos y sus compraciones con npm:
  ```bash
  yarn #npm install
  ```
  ```bash
  yarn add ember-cli #npm install ember-cli
  ```
  ```bash
  yarn global add isotope-layout #npm install -g isotope-layout
  ```
  También es bastante útil:
  ```bash
  yarn help
  ```
[Documentación de yarn.](https://yarnpkg.com/en/docs)
