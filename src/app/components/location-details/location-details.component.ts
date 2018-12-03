import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {DataService} from '../../services/data.service';
import {Location} from '../../@types/location';
import {Item} from '../../@types/item';
import {MatDialog, MatDialogRef} from '@angular/material';
import {InventoryDialogComponent} from '../inventory-dialog/inventory-dialog.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  locations: Location[] = [];

  constructor(private _db: AngularFirestore,
              private _data: DataService,
              private _dialog: MatDialog) {
  }

  ngOnInit() {
    this._data.getLocations().subscribe(locations => {
      this.locations = locations;
      console.log(this.locations);
    });
  }

  openInventory(locationId: string) {
    this._data.getItems(locationId).subscribe((items: Item[]) => {
      console.log(items);
      this._dialog.open(InventoryDialogComponent, {
        data: {
          items: items
        }
      });
    });
  }
}
