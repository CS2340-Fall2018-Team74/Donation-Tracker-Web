import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {Item} from '../../@types/item';
import {NewItemComponent} from '../new-item/new-item.component';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-inventory-dialog',
  templateUrl: './inventory-dialog.component.html',
  styleUrls: ['./inventory-dialog.component.css']
})
export class InventoryDialogComponent implements OnInit {
  items: Item[] = [];
  locationName = '';
  locationID = '';

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private _data: DataService,
              private _dialog: MatDialog) {
    this.items = data['items'];
    this.locationName = data['locationName'];
    this.locationID = data['locationID'];
    console.log(this.locationName);
  }

  ngOnInit() {
  }

  openAddDialog() {
    this._dialog.open(NewItemComponent, {
      data: {
        locationID: this.locationID
      }
    }).afterClosed().subscribe(val => {
      this._data.getItems(this.locationID).subscribe(newItems => {
        this.items = newItems;
      });
    });
  }
}
