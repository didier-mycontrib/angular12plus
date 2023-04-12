Application angular "how-to" 
exemples de technologies intégrées (chart , map , ....)
============
npm install -s bootstrap
et eventuellement npm install -s bootstrap-icons
(en version 5... en 2022)
avec  "node_modules/bootstrap/dist/css/bootstrap.min.css"
et eventuellement "node_modules/bootstrap-icons/font/bootstrap-icons.css"
dans partie "styles": [ ] de angular.json (près ligne 34)
==========
ne plus utiliser ngx-bootstrap avec angular 14,15, ...
mais @angular/material a la place
==========
npm install -s ng2-charts chart.js
(chart.js utilisé en interne par ng2-charts)
avec import { NgChartsModule } from 'ng2-charts';
et import : [ NgChartsModule , ...] dans app.module.ts
===========
npm install -s leaflet
npm install -s @types/leaflet
npm install -s @asymmetrik/ngx-leaflet
et ajouter ceci dans partie styles de angular.json:
"node_modules/leaflet/dist/leaflet.css",
Ajouter également ceci dans app.module.ts :
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
...
imports: [
	...,
	LeafletModule
]





===================
Upgrade angular/cli et angular-app:

npm uninstall -g @angular/cli
npm cache verify
npm install -g @angular/cli@latest



npm uninstall --save-dev @angular/cli
npm install --save-dev @angular/cli@latest

npx @angular/cli update @angular/core

puis (dans cette application):
supprimer le répertoire node_modules (à reconstruire)
npm install