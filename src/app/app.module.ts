import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondscreenComponent } from './tela2/secondscreen/secondscreen.component';
import { ThirdscreenComponent } from './tela3/thirdscreen/thirdscreen.component';
import { FirstscreenComponent } from './tela1/firstscreen/firstscreen.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { Pagina1Component } from './page/pagina1/pagina1.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondscreenComponent,
    ThirdscreenComponent,
    FirstscreenComponent,
    PipesComponent,
    Pagina1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
