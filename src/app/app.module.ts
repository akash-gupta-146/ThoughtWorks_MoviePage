import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ViewComponent } from './view/view.component';
import { DataServiceService } from './data-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { FormsModule }   from '@angular/forms';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewComponent,
    LoadingComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataServiceService,
    HttpClient,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
