import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VistaListaComponent } from './vista-lista/vista-lista.component';
import { LoginVistaComponent } from './login-vista/login-vista.component';
import {TokenInterceptor} from './auth/token.interceptor';
import { IniComponent } from './ini/ini.component';
import {WsErrHandlerInterceptor} from './auth/wsErrHandler.interceptor';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    VistaListaComponent,
    LoginVistaComponent,
    IniComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
  },
    {
    provide: HTTP_INTERCEPTORS,
      useClass:WsErrHandlerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
