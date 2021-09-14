
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movieDetails:any = [];
movieList:any = [] ; 
className : string = '' ;
searched_data : any = []  ; 
// private subjectKeyup = new Subject<any>() ; 
value : any ; 


  
 
 onSearch ($event:any ){
    this.value = $event.target.value ; 
  //  this.subjectKeyup.next(this.value) ; 
   this.searched_data = this.movieList.filter((emp:any) =>
      emp.title.toLowerCase().includes(this.value.toLowerCase())
    );

   
   
 }

 

  constructor(private movieService:MoviesService) { 
    
  }
  Reload = () => {
      location.reload() ; 
    }
     

  ngOnInit(): void {
    this.className = 'box' ;
    
   
    
    
    
    

   
    

    
     
    
    
    var _token:any = localStorage.getItem('myToken');
    this.movieService.getMovies(_token, "all", "")
    .subscribe(data => {
      this.bindApiData(data);
      
    });
  
  }

  onNextClick(){
    var _token:any = localStorage.getItem('myToken');
    this.movieService.getMovies(_token, "next", this.movieDetails.next)
    .subscribe(data => {
      this.bindApiData(data);
    });
  }

  onPreviousClick(){
    var _token:any = localStorage.getItem('myToken');
    this.movieService.getMovies(_token, "previous", this.movieDetails.previous)
    .subscribe(data => {
      this.bindApiData(data);
    });
  }

  bindApiData(data:any){
      this.movieDetails = data;
      this.movieList = this.movieDetails.results;
      this.searched_data = this.movieList   ; 
  }
  
expand(e:any){
  console.log(e.target) ; 
   if(e.target.parentElement.className == 'box'){
     e.target.parentElement.className = 'big' ; 
   }else if  (e.target.className == 'box'){
     e.target.className = 'big' ; }
   else if  (e.target.parentElement.parentElement.className == 'box'){
     e.target.parentElement.parentElement.className = 'big' ; 
   } else if (e.target.className == 'big') {
     e.target.className = 'box' ; 
   }    else if (e.target.parentElement.parentElement.className == 'big') {
     e.target.parentElement.parentElement.className =  'box' ; 
   } else if (e.target.parentElement.className == 'big'){
     e.target.parentElement.className = 'box' ; 
   } else {} ; 

   }

   }
   
  
  


