import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // pageIntro = $localize`Hello Alex!`
  userName = 'Alex';
  //                    :<meaning>  | <description>      <@@id>:
  pageIntro = $localize`:Site header|Greeting the customer@@siteHeader:Hello ${this.userName}!`;
  pageIntro2 = $localize`Hello ${this.userName}:userFirstName:!`;

  constructor() {
    this.greet`Hello, ${this.userName}!`;
  }

  /**
   * Tagged template example
   * @param textArray
   * @param PH1
   */
  greet(textArray: TemplateStringsArray, PH1: string | number) {
    //Hello, ,!<>Alex
    console.log(textArray + '<>' + PH1);
    //Hello, <>!<>undefined<>Alex
    console.log(`${textArray[0]}<>${textArray[1]}<>${textArray[2]}<>${PH1}`);
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
