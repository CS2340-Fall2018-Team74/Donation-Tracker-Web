import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _db: AngularFirestore) {
    this.getLocations();
  }

  getLocations(): void {
    console.log(this._db.collection('Locations'));
  }
}
