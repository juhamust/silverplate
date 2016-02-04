'use strict';

import fs from 'fs';
import path from 'path';
import Promise from 'bluebird';
import gulp from 'gulp';
import webpack from 'webpack';
import sync from 'run-sequence';
import serve from 'browser-sync';
import rimraf from 'rimraf';
import yargs from 'yargs';
import chalk from 'chalk';
import lodash from 'lodash';
import to from 'to-case';
import loader from 'gulp-load-plugins';
import webpackDevMiddelware from 'webpack-dev-middleware';
import webpachHotMiddelware from 'webpack-hot-middleware';
import colorsSupported from 'supports-color';
import { markdown } from 'markdown';


var plugins = loader();
let reload = () => serve.reload();
let root = path.join(__dirname, 'client');

// Helper method for resolving paths
let resolveToApp = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/{glob}
};

let resolveToComponents = (glob) => {
  glob = glob || '';
  return path.join(root, 'app', glob); // app/components/{glob}
};

let resolveToTemplates = (type = 'component') => {
  return path.join(__dirname, 'generator', `${type}/**/*.**`);
};

// Map of all paths
let paths = {
  js: resolveToComponents('**/*!(.spec.js).js'), // exclude spec files
  styl: resolveToApp('**/*.scss'), // stylesheets
  html: [
    resolveToApp('**/*.html'),
    path.join(root, 'index.html')
  ],
  entry: path.join(root, 'app/app.js'),
  output: path.join(__dirname, 'dist')
};

let generate = (name, type = 'component', parentPath = 'components') => {
  let destPath = path.join(resolveToComponents(), parentPath, name);

  gulp.src(resolveToTemplates(type))
  .pipe(plugins.template({
    name: name,
    shortCaseName: to.lower(to.pascal(name)),
    upCaseName: to.camel(name),
    pascalCaseName: to.pascal(name),
    upCaseName: to.camel(name),
    slugCaseName: to.slug(name)
  }))
  .pipe(plugins.rename((path) => {
    path.basename = path.basename.replace('temp', name);
  }))
  .pipe(gulp.dest(destPath));

  return Promise.resolve();
}

gulp.task('clean', (cb) => {
  rimraf('dist', cb);
});

gulp.task('markdown', (cb) => {
  let targetFile = path.join(__dirname, 'client/app/assets/html/readme.html');
  let htmlContents = markdown.toHTML(fs.readFileSync('./README.md').toString());

  return new Promise(function(resolve, reject) {
    fs.writeFile(targetFile, htmlContents, 'utf8', (err) => {
      if (err) reject(err);
      resolve();
    });
  });
})

gulp.task('webpack', (cb) => {
  const config = require('./webpack.config');
  config.entry.app = paths.entry;

  webpack(config, (err, stats) => {
    if(err)  {
      throw new plugins.util.PluginError("webpack", err);
    }

    plugins.util.log("[webpack]", stats.toString({
      colors: colorsSupported,
      chunks: false,
      errorDetails: true
    }));

    cb();
  });
});

gulp.task('serve', () => {
  const config = require('./webpack.dev.config');
  config.entry.app = [
    // this modules required to make HRM working
    // it responsible for all this webpack magic
    'webpack-hot-middleware/client?reload=true',
    // application entry point
    paths.entry
  ];

  var compiler = webpack(config);

  serve({
    port: process.env.PORT || 3000,
    open: false,
    server: { baseDir: paths.output },
    middleware: [
      webpackDevMiddelware(compiler, {
        stats: {
          colors: colorsSupported,
          chunks: false,
          modules: false
        },
        publicPath: config.output.publicPath
      }),
      webpachHotMiddelware(compiler)
    ]
  });
});

gulp.task('watch', ['serve']);

gulp.task('generate:component', (cb) => {
  generate(yargs.argv.name, 'component', 'components')
  .then(() => {
    plugins.util.log('Component generated');
    plugins.util.log(chalk.yellow('!! Register your component in client/app/components/index.js !!'));
    cb();
  });
});

gulp.task('generate:view', (cb) => {
  generate(yargs.argv.name, 'view', 'views')
  .then(() => {
    plugins.util.log('View generated');
    plugins.util.log(chalk.yellow('!! Register your view in client/app/views/index.js !!'));
    cb();
  });
});

gulp.task('generate:service', (cb) => {
  generate(yargs.argv.name, 'service', 'services')
  .then(() => {
    plugins.util.log('Service generated');
    plugins.util.log(chalk.yellow('!! Register your service in client/app/services/index.js !!'));
    cb();
  });
});

gulp.task('build', (done) => {
  sync('clean', 'markdown', 'webpack', done);
});

gulp.task('default', (done) => {
  sync('build', 'watch', done);
});
