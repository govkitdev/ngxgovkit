import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxGovkitService {

  setGovCss() {
    var myCss = ".exampleClass {margin: 0;width: 100%;color:blue;background-color:red}";
    var style = document.createElement("STYLE");
    style.innerText = myCss;
    document.body.appendChild(style);
  }
}
