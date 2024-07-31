# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

La biblioteca está diseñada para hacer tu proceso de desarrollo más rápido y sencillo, proporcionando efectos CSS listos para usar y componentes reutilizables de React. Ya sea que estés construyendo un nuevo proyecto o mejorando uno existente, Quick UI te ayuda a completar el trabajo con el mínimo esfuerzo. Aquí te mostramos cómo empezar:

### ¿Por qué Quick UI?
Quick UI se destaca por su simplicidad y velocidad. Con nuestra biblioteca, puedes:

- **Copiar y Pegar**: Simplemente copia y pega el código para los efectos CSS y componentes React.
- **Efectos Versátiles**: Accede a efectos CSS tanto en CSS puro como en Tailwind.
- **Componentes Reutilizables**: Usa componentes React que también utilizan Tailwind, facilitando su integración.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
