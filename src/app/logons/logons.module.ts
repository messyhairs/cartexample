import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogonsRoutingModule } from './logons-routing.module';
import { LogonsComponent } from './logons.component';


@NgModule({
  declarations: [LogonsComponent],
  imports: [
    CommonModule,
    LogonsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogonsModule { }
