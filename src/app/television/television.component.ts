import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-television',
  templateUrl: './television.component.html',
  styleUrls: ['./television.component.css']
})
export class TelevisionComponent implements OnInit {

  data1;
  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.data1 = this.dataService.getFirstData();
  }

}
