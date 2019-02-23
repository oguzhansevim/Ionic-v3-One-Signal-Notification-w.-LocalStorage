import { Component } from '@angular/core';
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  localStorageData;

  constructor(private _storage: StorageProvider) {
    this.getSosData();
  }

  getSosData(){
    this._storage.get('%YOUR_KEY_HERE%').then(res => {
      this.localStorageData = res;
    }).catch(err => {
      console.log('err: ' + JSON.stringify(err))
    });
  }

}
