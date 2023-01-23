import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actori } from '../actori';
import { Movies } from '../movies';
import {HttpParams} from "@angular/common/http";
import {HttpHeaders}  from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ActorResourceComponent } from '../actor-resource/actor-resource.component';
@Component({
  selector: 'app-web-requests',
  templateUrl: './web-requests.component.html',
  styleUrls: ['./web-requests.component.css']
})
export class WebRequestsComponent {
  private uri="http://localhost:8082";

  constructor(private http:HttpClient)
  {
  }
  async getActori(): Promise<Actori[]> {
    
    return await this.http.get<Actori[]>(this.uri+"/api/actori").toPromise() as Actori[];

  }
  async getMoviesAll(): Promise<Movies[]> {
    
    return await this.http.get<Movies[]>(this.uri+"/api/movies/all").toPromise() as Movies[];

  }
  postActor(x:string) {
    
    
    this.http.post(this.uri+"/api/actori/adaugareActor/"+x, null).subscribe((response)=>console.log(response));

  }
}
