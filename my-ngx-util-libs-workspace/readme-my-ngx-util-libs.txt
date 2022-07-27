ng new my-ngx-util-libs-workspace --create-application=false
#to generate my-ngx-util-libs-workspace with package.json , ... without src , scr/app

cd my-ngx-util-libs-workspace
ng g library d2f-ngx-commons
#==> generate projects/d2f-ngx-commons into my-workspace
#and update my-ngx-util-libs-workspace/angular.json with "d2f-ngx-commons" project

cd my-ngx-util-libs-workspace
ng g library d2f-ngx-components
ng g library d2f-ngx-crud
ng g library d2f-ngx-layout

========================
ng g app test-app (just for quick testing of local css and libraries features)
ng serve (to run from workspace directory)
========================
in ng-package.json of d2f-ngx-commons
"assets": ["./assets"] for publishing assets with css

====================
cd my-ngx-util-libs-workspace
ng build d2f-ngx-commons
ng build d2f-ngx-components
ng build d2f-ngx-crud
ng build d2f-ngx-layout

==================
cd dist/d2f-ngx-commons
//npm link   pour creer un lien symbolique npm local
npm login (with didier-defrance , .2.n...9 , didier@d-defrance.fr, one-time pwd to read in email)
npm publish
cd dist/d2f-ngx-components or dist/d2f-ngx-crud or dist/d2f-ngx-layout
//npm link   pour creer un lien symbolique npm local 
//npm login , npm whoami
npm publish

========================
Utilisation de la librarie (dans autre appli "my-app" hors de ce workspace)

cd flex-mat-app
//npm link d2f-ngx-commons ou bien npm link d2f-ngx-commons d2f-ngx-components
npm install -s d2f-ngx-commons  (si publié sur référentiel npm)
npm install -s d2f-ngx-components (si publié sur référentiel npm)
npm install -s d2f-ngx-crud  (si publié sur référentiel npm)
npm install -s d2f-ngx-layout (si publié sur référentiel npm)

quelquepart (dans composant ):
import { ... } from 'd2f-ngx-commons';


---------------------
old test-app config in angular.json:
"styles": [
              "projects/test-app/src/styles.scss",
              "node_modules/@angular/material/prebuilt-themes/indigo-pink.css",
              "projects/d2f-ngx-commons/assets/css/d2f-common-layout.css"
            ],
new test-app config in angular.json:
"stylePreprocessorOptions": {
              "includePaths": [
                "projects/d2f-ngx-commons/assets/scss/",
                "node_modules/d2f-ngx-commons/assets/scss"
              ]
            },

---------------------
NB:
in each ng-package.json of d2f-ngx-xyz library (but not  d2f-ngx-commons)
{
  ...,
  "lib": {
    "entryFile": "src/public-api.ts",
    "styleIncludePaths": [
      "../d2f-ngx-commons/assets/scss"
     ]
  }
}
in order to find .scss to import during ng build of library
Unfortunately , .scss are transformed in static css
during the phase of library building.
values of scss variables must be set at this stage , not after !
