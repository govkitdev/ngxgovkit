import { NgModule } from '@angular/core';
import { NgxGovkitComponent } from './ngx-govkit.component';
import {NgxGovkitService} from "./ngx-govkit.service";



@NgModule({
  declarations: [
    NgxGovkitComponent
  ],
  imports: [
  ],
  exports: [
    NgxGovkitComponent
  ]
})
export class NgxGovkitModule {
  constructor(private govkitService: NgxGovkitService) {
    govkitService.setGovCss();
  }
}
