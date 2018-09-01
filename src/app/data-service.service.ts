import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataServiceService {

  url = "http://starlord.hackerearth.com/movieslisting"
  // url = "data.json"

  constructor(public http:HttpClient) { }

  getMoviesList(){
    return this.http.get(this.url);
  }

}
