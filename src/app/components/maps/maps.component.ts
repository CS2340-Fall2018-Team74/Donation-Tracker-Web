import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {LatLng} from '../../@types/LatLng';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  latitude =  33.7490;
  longitude = 84.3880;
  latLng: LatLng[] = [];
  constructor(private _db: DataService) { }

  ngOnInit() {
    this.latLng = this._db.getLatLng();
  }

}
