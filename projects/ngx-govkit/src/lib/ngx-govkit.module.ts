import {InjectionToken, NgModule} from '@angular/core';
import {NgxGovkitService} from "./ngx-govkit.service";
import {GovkitConfig} from "./interfaces/govkitconfig";


export const GOVKIT_CONFIG_OPTIONS = new InjectionToken<GovkitConfig>('configOptions');

@NgModule({
  declarations: [

  ],
  imports: [
  ],
  exports: [

  ]
})
export class NgxGovkitModule {
  constructor(private govkitService: NgxGovkitService) {
    govkitService.setGovCss();
  }
}
