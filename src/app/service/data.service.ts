import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  data: string[] = ['news', 'music', 'sports'];

  getFirstData() {
    return this.data[0];
  }
}
