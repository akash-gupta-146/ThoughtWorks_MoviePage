import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  moviesList;
  reset:boolean=false;
  byrating:boolean= false;
  bytitle:boolean = false

  constructor(public dataService:DataServiceService) { }

  ngOnInit() {
    this.dataService.getMoviesList()
    .subscribe((response)=>{
      this.moviesList = response;
    })
  }

  open(link){
    window.open(link)
  }

  sortByRating(){
    this.moviesList.sort( function(movie1, movie2) {
	    if ( movie1.content_rating < movie2.content_rating ){
	    	return 1;
	    }else if( movie1.content_rating > movie2.content_rating ){
	        return -1;
	    }else{
	    	return 0;	
	    }
  });
  this.byrating = true
  this.reset=true;
  }

  sortByTitle(){
    this.moviesList.sort( function(movie1, movie2) {
	    if ( movie1.title_year < movie2.title_year ){
	    	return -1;
	    }else if( movie1.title_year > movie2.title_year ){
	        return 1;
	    }else{
	    	return 0;	
	    }
  });
  this.bytitle = true;
  this.reset=true;
  }

  sortReset(){
    this.moviesList=null
    this.dataService.getMoviesList()
    .subscribe((response)=>{
      this.moviesList = response;
    })
    this.byrating = false
    this.bytitle = false
    this.reset=false
  }
}
