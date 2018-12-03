import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Item} from '../../@types/item';

@Component({
  selector: 'app-inventory-dialog',
  templateUrl: './inventory-dialog.component.html',
  styleUrls: ['./inventory-dialog.component.css']
})
export class InventoryDialogComponent implements OnInit {
  items: Item[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.items = data['items'];
  }

  ngOnInit() {
  }

}
