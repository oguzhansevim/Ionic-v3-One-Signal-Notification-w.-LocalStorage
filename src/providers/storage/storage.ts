import { Injectable } from '@angular/core';
import { NativeStorage } from "@ionic-native/native-storage";

@Injectable()
export class StorageProvider {

  constructor(public storage: NativeStorage) { }

  /*
   * Get Storage Data
   */
  get(key) {
    return new Promise((resolve, reject) => {
      this.storage.getItem(key).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    });
  }

  /*
   * Set Storage Data
   */
  set(key, value) {
    return new Promise((resolve, reject) => {
      this.storage.setItem(key, value).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    });
  }

  /*
   * Remove Storage Data
   */
  remove() {
    return new Promise((resolve, reject) => {
      this.storage.remove('sos').then(() => {
        resolve();
      }).catch(err => {
        reject(err);
      });
    });
  }
}
