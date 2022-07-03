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
npm install -s ngx-bootstrap 
(en version 8... en début 2022  compatible bs5 et angular 12/13)
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
npm install -s @tinymce/tinymce-angular@^5.0.0
import { EditorModule } from '@tinymce/tinymce-angular'; 
pour imports: [...,,EditorModule] de app.module.ts
et
npm install -s tinymce
et
ajout de { "glob": "**/*", "input": "node_modules/tinymce", "output": "/tinymce/" }
dans partie assets:[] de angular.json
et
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
pour ajout de { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' } 
dans partie providers:[] de app.module.ts






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