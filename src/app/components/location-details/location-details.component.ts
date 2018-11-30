import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  constructor(private _db: AngularFirestore) { }
  ngOnInit() {
    // this.getLocations();
  }

  getLocations() {
    this._db.collection('Locations').get().subscribe(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
        console.log(doc.get('name'));
      });
    });
  }
}
