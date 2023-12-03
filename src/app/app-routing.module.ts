import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstscreenComponent } from './tela1/firstscreen/firstscreen.component';
import { SecondscreenComponent } from './tela2/secondscreen/secondscreen.component';
import { ThirdscreenComponent } from './tela3/thirdscreen/thirdscreen.component';
import { Pagina1Component } from './page/pagina1/pagina1.component';
const routes: Routes = [

  {path: 'firstscreen', component:FirstscreenComponent},
  {path: 'secondscreen', component:SecondscreenComponent},
  {path: 'thirdscreen', component:ThirdscreenComponent},
  {path: 'pagina1', component:Pagina1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
