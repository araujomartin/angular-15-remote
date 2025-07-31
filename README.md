# Angular 15 Microfrontend with Module Federation

This project is a microfrontend built with **Angular 15** and uses **Module Federation** to expose modules for remote consumption. It also leverages **@angular/elements** to expose the main application as a reusable web component.

## Features

- **Angular 15**: Modern web development framework.
- **Module Federation**: Exposes modules for remote consumption by other applications.
- **@angular/elements**: Wraps the main app as a web component (`<angular-15-mfe>`).
- **npm/yarn**: Uses Node.js and your preferred package manager.

## Remote Exposure

This microfrontend exposes its application as a remote module using Module Federation. It is intended to be imported and consumed by a shell application located in a separate repository.

## Usage

### Install dependencies

```bash
npm install
# or
yarn install
```

### Run the application

```bash
npm start
# or
yarn start
```

### Build the application

```bash
npm run build
# or
yarn build
```

## Consuming from Shell

The shell application imports this microfrontend remotely using Module Federation. The exposed web component can be used in the shell or other host applications.

## Exposed Module

- `./web-component`: Exposes the Angular app as a web component (`<angular-15-mfe>`).

> **Note:**  
> In `app.module.ts`, the application is registered as a custom element using `@angular/elements`, allowing easy integration as a web component in