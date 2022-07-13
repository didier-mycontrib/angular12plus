ng add @angular/material
(nb: @angular/cdk is a subpart of @angular/material 
  and @angular/cdk/layout contains LayoutModule and BreakpointObserver)
 
a ajouter dans app.module.ts :
------------------------------
import { MatTabsModule} from '@angular/material/tabs';
...