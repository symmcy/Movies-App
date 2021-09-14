import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  login(username:string, password:string){
    const body = { username: username, password:password };
    var url = "https://demo.credy.in/api/v1/usermodule/login/"
    return this.http.post(url, body);
  }

 
}
