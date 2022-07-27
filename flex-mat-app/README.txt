ng add @angular/material
(nb: @angular/cdk is a subpart of @angular/material 
  and @angular/cdk/layout contains LayoutModule and BreakpointObserver)
 
a ajouter si besoin dans app.module.ts :
------------------------------
import { MatTabsModule} from '@angular/material/tabs';
...

============
cd flex-mat-app
//npm link d2f-ngx-commons my-ngx-components (à lancer après chaque npm install)
//NB: multiple npm link --> bug in webpack or ...
//npm unlink d2f-ngx-commons
//npm unlink d2f-ngx-components
npm install -s d2f-ngx-commons  (si publié sur référentiel npm)
npm install -s d2f-ngx-components (si publié sur référentiel npm)
npm install -s d2f-ngx-crud  (si publié sur référentiel npm)
npm install -s d2f-ngx-layout (si publié sur référentiel npm)

===========
d2f-ngx-commons module : common services (...) and some css
d2f-ngx-layout module : automatic responsive layout (with its own css)
d2f-ngx-crud module : abstract crud component
d2f-ngx-components module : some components (my-toggle-panel , ...)

----------------
old app config in angular.json:
"styles": [
              ...,
              "./node_modules/d2f-ngx-commons/assets/css/d2f-common-layout.css",
              "src/styles.scss"
            ],

new app config in angular.json:
"stylePreprocessorOptions": {
              "includePaths": [
                "src/assets/scss",
                "node_modules/d2f-ngx-commons/assets/scss"
              ]
            },

================
#si utilisation de npm link alors besoin d'ajouter   "preserveSymlinks": true dans "angularCompilerOptions": { }
#de tsconfig.json , mais comme plein de bugs/limitations pas de npm link

==================
pour prendre en compte une nouvelle version d'une librairie:
- si version temporaire en developpement (pas vraiment changée dans package.json):
    * arrêter ng-serve
    * npm update d2f-ngx-xyz (avec ng serve arrêté)
    * supprimer le cache angular (répertoire .angular)
    * relancer ng-serve
- si changement de version officialisée dans package.json :
    * arrêter ng-serve
    * modifier la version dans package.json
    * npm install (avec ng serve arrêté)
    * supprimer le cache angular (répertoire .angular)
    * relancer ng-serve
