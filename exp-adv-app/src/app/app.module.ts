import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithChangesComponent } from './with-changes/with-changes.component';
import { MyChildComponent } from './with-changes/my-child/my-child.component';
import { InOutLifeCycleComponent } from './with-changes/in-out-life-cycle/in-out-life-cycle.component';
import { InsideOutsideZoneComponent } from './with-changes/inside-outside-zone/inside-outside-zone.component';
import { CustomDetectionComponent } from './with-changes/custom-detection/custom-detection.component';
import { HighlightDirective } from './common/directive/highlight-directive';
import { WithDirectiveComponent } from './with-directive/with-directive.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WithChildComponent } from './with-child/with-child.component';
import { AChildComponent } from './with-child/a-child/a-child.component';
import { WithContentComponent } from './with-content/with-content.component';
import { MyTabsetComponent } from './with-content/my-tabset/my-tabset.component';
import { MyTabComponent } from './with-content/my-tab/my-tab.component';
import { UnlessDirective } from './common/directive/unless.directive';
import { MyMatchSizeOfChildsDirective } from './common/directive/my-match-size-of-childs.directive';
import { AdvancedComponent } from './advanced/advanced/advanced.component';
import { WithAnimationsComponent } from './advanced/with-animations/with-animations.component';
import { WithTraductionComponent } from './advanced/with-traduction/with-traduction.component';
import { WithInjectionComponent } from './advanced/with-injection/with-injection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyStringService } from './advanced/service/MyStringService';
import { MyStringServiceV1 } from './advanced/service/MyStringServiceV1';
import { MyStringServiceV2 } from './advanced/service/MyStringServiceV2';
import { APP_TITLE } from './common/token/global-tokens';
import {MatTabsModule} from '@angular/material/tabs';
import { WithNgTemplateComponent } from './advanced/with-ng-template/with-ng-template.component';
import { TogglePanelComponent } from './toggle-panel/toggle-panel.component';
import { PanelWithTemplateRefComponent } from './advanced/with-ng-template/panel-with-template-ref/panel-with-template-ref.component';
import { NgxsModule } from '@ngxs/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DynamicCheckboxComponent } from './common/dyn-form/dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicFieldComponent } from './common/dyn-form/dynamic-field/dynamic-field.component';
import { DynamicInputComponent } from './common/dyn-form/dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from './common/dyn-form/dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './common/dyn-form/dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicErrorComponent } from './common/dyn-form/dynamic-error/dynamic-error.component';
import { DynamicFormComponent } from './common/dyn-form/dynamic-form/dynamic-form.component';
import { MyDynFormComponent } from './advanced/my-dyn-form/my-dyn-form.component';
import { MyReactiveFormComponent } from './advanced/my-reactive-form/my-reactive-form.component';


//import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    WithChangesComponent,
    MyChildComponent,
    InOutLifeCycleComponent,
    InsideOutsideZoneComponent,
    CustomDetectionComponent,
    HighlightDirective,
    WithDirectiveComponent,
    HeaderComponent,
    WelcomeComponent,
    WithChildComponent,
    AChildComponent,
    WithContentComponent,
    MyTabsetComponent,
    MyTabComponent,
    UnlessDirective,
    MyMatchSizeOfChildsDirective,
    AdvancedComponent,
    WithTraductionComponent,
    WithInjectionComponent,
    WithAnimationsComponent,
    WithNgTemplateComponent,
    TogglePanelComponent,
    PanelWithTemplateRefComponent,
    MyDynFormComponent,
    DynamicFieldComponent,
    DynamicFormComponent,
    DynamicInputComponent,
    DynamicSelectComponent,
    DynamicRadioComponent,
    DynamicCheckboxComponent,
    DynamicErrorComponent,
    MyReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    StoreModule.forRoot({}), //here or in lazy2 module,
    NgxsModule.forRoot([])/* even empty in main module */,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    EffectsModule.forRoot([])/* EffectsModule.forFeature([...]) in lazy2 module */
  ],
  providers: [
    {provide: APP_TITLE, useValue: 'adv_app' },
    //{ provide: MyStringService, useClass: MyStringServiceV1 }
    { provide: MyStringService, useClass: MyStringServiceV2 }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
