import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoggerComponent } from "./components/logger/logger.component";


@NgModule({
  declarations: [
    LoggerComponent
  ],
  exports: [
    LoggerComponent
  ],
  imports:[
    CommonModule,
  ]
})

export class LoginModule { }
