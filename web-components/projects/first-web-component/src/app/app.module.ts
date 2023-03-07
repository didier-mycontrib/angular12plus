import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { MyButtonComponent } from './my-button/my-button.component';

@NgModule({
  declarations: [
    MyButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [MyButtonComponent]
})
export class AppModule  implements DoBootstrap {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const webComponent = createCustomElement(MyButtonComponent, {injector:this.injector});
    customElements.define('my-button', webComponent);
  }
}