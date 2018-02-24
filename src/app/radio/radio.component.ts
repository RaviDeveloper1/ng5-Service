import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {
  data1;
  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.data1 = this.dataService.getFirstData();
  }

}
