import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BsSlideAngularAgenciaCriaMaisModule} from "../../projects/bs-slide-angular-agencia-cria-mais/src/lib/bs-slide-angular-agencia-cria-mais.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BsSlideAngularAgenciaCriaMaisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
