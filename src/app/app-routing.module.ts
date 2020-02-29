import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'carts',
loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule) },
{ path: '',
loadChildren: () => import('./logons/logons.module').then(m => m.LogonsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
