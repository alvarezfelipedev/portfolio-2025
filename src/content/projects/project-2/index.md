---
title: "Test con Cypress.io y POM"
description: "Test automatizado con Cypress y POM como diseño de patrón."
date: "Apr 25 2024"
repoURL: "https://github.com/alvarezfelipedev/test-demoblaze-cypress-pom"
---

### Pre-requisitos 📋

Instala Node.js desde su sitio web oficial [Node.js](https://nodejs.org/en). Recomiendo instalar o actualizar, si es necesario, a la versión 22.0 o superior.

### Instalación 🔧

_Opción 1:_

Clona el repositorio con <a href="https://cli.github.com/">GitHub CLI</a>

```
gh repo clone alvarezfelipedev/test-demoblaze-cypress-pom
```

_Opción 2:_

```
git clone https://github.com/alvarezfelipedev/test-demoblaze-cypress-pom.git
```

<br />

_Después de clonarlo, ve al proyecto desde el terminal e instala el framework Cypress._

```
pnpm install cypress --save-dev
```

## Correr los test ⚙️

_Opción 1:_

Disponible para Node v22.0 y posteriores

```
node --run test
```

_Opción 2:_

Sigue los pasos de la interfaz de Cypress y ejecuta el archivo: <b>place-order.cy.js</b>

```
pnpm cypress open
```
