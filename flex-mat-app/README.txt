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

================
#si utilisation de npm link alors besoin d'ajouter   "preserveSymlinks": true dans "angularCompilerOptions": { }
#de tsconfig.json , mais comme plein de bugs/limitations pas de npm link