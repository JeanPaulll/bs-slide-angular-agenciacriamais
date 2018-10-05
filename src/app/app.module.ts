import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BsSlideAngularAgenciaCriaMaisModule} from '../../projects/bs-slide-angular-agencia-cria-mais/src/lib/bs-slide-angular-agencia-cria-mais.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule( {
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        BsSlideAngularAgenciaCriaMaisModule
    ],
    providers: [],
    bootstrap: [AppComponent]
} )
export class AppModule {
}
