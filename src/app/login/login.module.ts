import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggerComponent } from "./components/logger/logger.component";

import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LoggerComponent
  ],
  exports: [
    LoggerComponent
  ],
  imports:[
    CommonModule,
    MatCardModule
  ]
})

export class LoginModule { }
