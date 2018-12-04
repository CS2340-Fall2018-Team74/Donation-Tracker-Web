import {Component, Inject, OnInit} from '@angular/core';
import {Item} from '../../@types/item';
import {DataService} from '../../services/data.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  item: Item = new Item();
  locationID = '';

  constructor(private _data: DataService,
             private ref: MatDialogRef<NewItemComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any) {
    this.locationID = data['locationID'];
  }

  ngOnInit() {
  }

  newItemAdd() {
    this._data.addItem(this.item, this.locationID).then(val => {
      this.ref.close();
    });
  }
}
