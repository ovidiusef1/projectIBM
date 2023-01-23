import { Component } from '@angular/core';
import { Movies } from '../movies';
import { WebRequestsComponent } from '../web-requests/web-requests.component';
@Component({
  selector: 'app-movie-resource',
  templateUrl: './movie-resource.component.html',
  styleUrls: ['./movie-resource.component.css']
})
export class MovieResourceComponent {
  movies:Movies[]=[];
  constructor(private test:WebRequestsComponent){}

  async ngOnInit() {
    this.movies=await this.test.getMoviesAll();

      console.log(this.movies[2].actors);

  }
}
