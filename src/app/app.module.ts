import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TelevisionComponent } from './television/television.component';
import { RadioComponent } from './radio/radio.component';

import { DataService} from './service/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TelevisionComponent,
    RadioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
