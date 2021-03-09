import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal/principal.component';
import {PulserasComponent} from './paginas/pulseras/pulseras.component'
import { AnillosComponent } from './paginas/anillos/anillos.component';
import { CadenasComponent } from './paginas/cadenas/cadenas.component';
import { ArosComponent } from './paginas/aros/aros.component';
import { ConjuntosComponent } from './paginas/conjuntos/conjuntos.component';


const routes: Routes = [
  { path: 'principal', component: PrincipalComponent }, 
  { path: 'pulseras', component: PulserasComponent },
  { path: 'anillos', component: AnillosComponent },
  { path: 'cadenas', component: CadenasComponent },
  { path: 'aros', component: ArosComponent },
  { path: 'conjuntos', component: ConjuntosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
