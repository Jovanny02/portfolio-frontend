import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/util/User';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  constructor(private http: HttpClient) { }
  url: string = 'http://portfoliomanager-portfoliomanager.namdevops1.conygre.com/';

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + 'user/allusers');
  }

}
