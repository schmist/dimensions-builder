// the polyfills must be the first thing imported in node.js
import 'angular2-universal/polyfills';

import * as path from 'path';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';

// Angular 2
import { enableProdMode } from '@angular/core';
// Angular 2 Universal
import { expressEngine } from 'angular2-universal';

import { abilities } from './app/data/static-abilities';

var compression = require('compression');

// enable prod for faster renders
enableProdMode();

const app = express();
const ROOT = path.join(path.resolve(__dirname, '..'));

// Express View
app.engine('.html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

app.use(cookieParser('Angular 2 Universal'));
app.use(bodyParser.json());

// Serve static files
app.use(compression({memLevel: 5}));
app.use('/assets', express.static(path.join(__dirname, 'assets'), {maxAge: 30}));
app.use(express.static(path.join(ROOT, 'dist/client'), {index: false}));


import { serverApi } from './backend/api';
// Our API for demos only
app.get('/data.json', serverApi);

import { ngApp } from './main.node';
// Routes with html5pushstate
// ensure routes match client-side-app
app.get('/', ngApp);
app.get('/all-waves-and-packs', ngApp);
app.get('/wave/*', ngApp);
app.get('/pack/*', ngApp);
app.get('/characters', ngApp);
app.get('/character/*', ngApp);
app.get('/team-builder*', ngApp);
app.get('/abilities', ngApp);
app.get('/ability/*', ngApp);
app.get('/level/*', ngApp);

var urls = [
        // changefreq: 'weekly',  priority: 0.5 
        { url: '/', changefreq: 'weekly', priority: 0.5 },
        { url: '/team-builder', changefreq: 'daily', priority: 0.7 },
        { url: '/all-waves-and-packs', changefreq: 'daily', priority: 0.5 },
        { url: '/characters', changefreq: 'daily', priority: 0.5 },   
        { url: '/abilities', changefreq: 'daily', priority: 0.5 }
      ];
for (let ability of abilities) {
  urls.push({ url: '/ability/' + ability.url, changefreq: 'daily', priority: 0.5});
}
for (let i of [1, 2, 3, 4, 5]) {
  urls.push({ url: '/wave/' + i, changefreq: 'daily', priority: 0.5});
}

var sm = require('sitemap');
var sitemap = sm.createSitemap ({
      hostname: 'http://dimensions-builder.com',
      cacheTime: 600000,        // 600 sec - cache purge period 
      urls: urls
    });
 
app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
      if (err) {
        return res.status(500).end();
      }
      res.header('Content-Type', 'application/xml');
      res.send( xml );
  });
});

// use indexFile over ngApp only when there is too much load on the server
function indexFile(req, res) {
  // when there is too much load on the server just send
  // the index.html without prerendering for client-only
  res.sendFile('/index.html', {root: __dirname});
}

app.get('*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  var pojo = { status: 404, message: 'No Content' };
  var json = JSON.stringify(pojo, null, 2);
  res.status(404).send(json);
});

// Server
let server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on: http://localhost:${server.address().port}`);
});
