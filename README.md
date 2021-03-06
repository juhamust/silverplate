![logo](https://raw.githubusercontent.com/juhamust/silverplate/develop/client/app/assets/images/logo-bw.png)

Silverplate is a modern code boilerplate for web development. It comes
with following features (preconfigured and read to use):

- **ES6** support with Babel
- **Gulp** with some commonly used plugins
- **Webpack** with both development and production optimized builds: Autoreload, minification
- **Angular 1.x** with component support (Angular 1.5) and commonly used modules
- **Material design** to create easily and good looking
- **Generator** for components, services and views
- **Karma** for unit testing with both Chrome and PhantomJS
- **Docker** for hosting server

Silverplate is proudly derivated from [NG6-Starter](https://github.com/AngularClass/NG6-starter)
adding some opinionated modifications and additions on top of it.

## Getting started

Here to get started:

```bash
#!/bin/bash
# Clone the Github repository
git clone https://github.com/juhamust/silverplate.git
cd silverplate
# Install dependencies
npm install
# Start development server and open http://localhost:3000/ in browser
npm start
```

That's it, happy hacking!

## Usage

#### Material design

- Icons: https://design.google.com/icons/
- Definitions: https://material.angularjs.org/

#### Docker(file)

If you don't have Docker installed, [see Docker instructions](https://www.docker.com/). Once set up, run the commands:

- Build Docker image: `npm run build:image`
- Run Docker image: `npm run start:image`

Now you're able to access outcome with browser: `http://<dockerhost>:<port>/`

## License

Apache 2

## Release notes

#### 0.3.1 (12.4.2016)

- Updated to Angular 1.5 and removed angular-component
- Fixed building in some environments: Upgraded Babel
- Added support for setting the host base path: Handy with GitHub Pages

#### 0.3.0 (10.3.2016)

- Switched from Bootstrap to Angular Material ([use release 0.2.x](https://github.com/juhamust/silverplate/tree/v0.2.0) if you want to keep using Bootstrap instead)

#### 0.2.0 (25.2.2016)

- Added simple Dockerfile example
- Fixed Backend example

#### 0.1.1 (10.2.2016)

- Fixed require

#### 0.1.0 (7.2.2016)

- Initial release

-----

[![Build Status](https://travis-ci.org/juhamust/silverplate.svg?branch=master)](https://travis-ci.org/juhamust/silverplate)
