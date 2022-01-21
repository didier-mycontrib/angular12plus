Application angular "how-to" 
exemples de technologies intégrées (chart , map , ....)
============
npm install -s bootstrap 
(en version 5... en 2022)
avec  "node_modules/bootstrap/dist/css/bootstrap.min.css"
dans partie "styles": [ ] de angular.json (près ligne 34)
==========
npm install -s ngx-bootstrap 
(en version 8... en début 2022  compatible bs5 et angular 12/13)
==========
npm install -s ng2-charts chart.js
(chart.js utilisé en interne par ng2-charts)
avec import { NgChartsModule } from 'ng2-charts';
et import : [ NgChartsModule , ...] dans app.module.ts
===========
npm install -s ng2-dragula
(pour drag & drop)
avec import : [ DragulaModule.forRoot()  , ...] dans app.module.ts
avec ajout de 
 (window as any).global = window;
dans src/polyfills.ts
et avec ajout de dragula.scss
et ajout de @import "dragula"; dans src/styles.scss
========