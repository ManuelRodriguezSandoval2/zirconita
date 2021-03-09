import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal/principal.component';
import { ProductosComponent } from './paginas/productos/productos.component';

const routes: Routes = [
  { path: 'principal', component: PrincipalComponent }, 
  { path: 'productos', component: ProductosComponent ,}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
