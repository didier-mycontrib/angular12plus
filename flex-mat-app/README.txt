ng add @angular/material
(nb: @angular/cdk is a subpart of @angular/material 
  and @angular/cdk/layout contains LayoutModule and BreakpointObserver)
 
a ajouter dans app.module.ts :
------------------------------
import { MatTabsModule} from '@angular/material/tabs';
...

============
my-common module : common services (...) but no common css
my-layout module : automatic responsive layout (with its own css)
my-crud module : abstract crud component
my-components module : some components (my-toggle-panel , ...)