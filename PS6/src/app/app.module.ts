
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { LocDetailComponent } from './locs/detail/locs-detail.component';
import { LocsComponent } from './locs/locs.component';


@NgModule({
  declarations: [
    AppComponent,
    LocDetailComponent,
    LocsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
