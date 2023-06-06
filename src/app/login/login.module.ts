import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggerComponent } from "./components/logger/logger.component";

import { MatCardModule } from '@angular/material/card';
import { RegisterComponent } from "./components/register/register.component";


@NgModule({
  declarations: [
    LoggerComponent,
    RegisterComponent,
  ],
  exports: [
    LoggerComponent,
    RegisterComponent,
  ],
  imports:[
    CommonModule,
    MatCardModule
  ]
})

export class LoginModule { }
