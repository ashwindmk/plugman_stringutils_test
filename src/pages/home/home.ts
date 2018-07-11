import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StringutilsProvider } from '../../providers/stringutils/stringutils';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public stringUtils: StringutilsProvider) {

  }

  test() {
    this.stringUtils.test()
      .then(result => {
        alert("Result: " + result);
      })
      .catch(error => {
        alert("Error: " + error);
      });
  }

  isBlank(arg1) {
    let data = {
      input: arg1
    }

    this.stringUtils.isBlank(data)
      .then(result => {
        alert(result);
      })
      .catch(error => {
        alert(error);
      });
  }

  isEmpty(arg1) {
    let data = {
      input: arg1
    }

    this.stringUtils.isEmpty(data)
      .then(result => {
        alert(result);
      })
      .catch(error => {
        alert(error);
      });
  }

}
