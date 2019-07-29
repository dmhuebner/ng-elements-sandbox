import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GreeterComponent } from './greeter/greeter.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    GreeterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [GreeterComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(GreeterComponent, {injector});
    customElements.define('do-greet', el);
  }

  ngDoBootstrap() {}
}
