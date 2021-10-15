/* eslint-disable eol-last */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatosBasicosComponent } from './components/datos-basicos/datos-basicos.component';
import { PreguntaClaveComponent } from './components/pregunta-clave/pregunta-clave.component';
import { FormsModule } from '@angular/forms';
import { SQLite } from '@ionic-native/sqlite/ngx';


import { AuthGuardService } from './services/auth-guard.service';
import { AuthenticationService } from './services/authentication.service';
import { DBTaskService } from './services/dbtask.service';

@NgModule({
  declarations: [AppComponent, DatosBasicosComponent, PreguntaClaveComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [StatusBar,
    SplashScreen,
    SQLite, DBTaskService, AuthGuardService, AuthenticationService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
