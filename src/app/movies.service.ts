import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }

  getMovies(token:string, type:string, url:string){
    const headers = new HttpHeaders().set('Authorization', `Token ${token}`);
    if(type == "next"){
      return this.http.get(url,{ 'headers': headers });
    }
    else if(type == "previous"){
      return this.http.get(url,{ 'headers': headers });   
    }
    else{
      var _url = "https://demo.credy.in/api/v1/maya/movies/"
      return this.http.get(_url,{ 'headers': headers });
    }
  }
 

}
