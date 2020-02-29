import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogonsComponent } from './logons.component';

const routes: Routes = [{ path: '', component: LogonsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogonsRoutingModule { }
