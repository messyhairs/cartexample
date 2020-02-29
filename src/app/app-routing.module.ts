import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { MarketComponent } from './market/market.component';
const routes: Routes = [{ path: 'carts',
loadChildren: () => import('./carts/carts.module').then(m => m.CartsModule) },
{path: 'login' , component: LoginComponent},
{path: 'market' , component: MarketComponent},
{path: '' , component: CreateaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
