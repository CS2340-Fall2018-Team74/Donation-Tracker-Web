import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Location} from '../@types/location';
import {Item} from '../@types/item';
import {LatLng} from '../@types/LatLng';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _db: AngularFirestore) {
  }

  getItems(locationId: string): Observable<Item[]> {
    const items: Item[] = [];
    return this._db.collection('Locations')
      .doc(locationId)
      .collection('Items')
      .get().pipe(map(snapshot => {
        snapshot.forEach(val => {
          items.push(<Item> val.data());
        });
        return items;
      }));
  }

  getLatLng(): LatLng[] {
    const latLng: LatLng[] = [];
    this.getLocations().forEach((locations) => {
      locations.forEach((location) => {
        latLng.push(new LatLng(Number.parseFloat(location.latitude), Number.parseFloat(location.longitude)));
      });
    });
    console.log(latLng);
    return latLng;
  }

  getLocations(): Observable<Location[]> {
    const locations: Location[] = [];
    return this._db.collection('Locations').get().pipe(map(snapshot => {
      snapshot.forEach(val => {
        const location: Location = <Location> val.data();
        location.id = val.id;
        locations.push(location);
      });
      return locations;
    }));
  }
}
