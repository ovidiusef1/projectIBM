import { Component, OnInit} from '@angular/core';
import { from } from 'rxjs';
import {Actori} from '../actori';
import {AppComponent} from '../app.component';
import { WebRequestsComponent } from '../web-requests/web-requests.component';

@Component({
  selector: 'app-actor-resource',
  templateUrl: './actor-resource.component.html',
  styleUrls: ['./actor-resource.component.css']
})
export class ActorResourceComponent implements OnInit {
  actori:Actori[]=[];
  constructor(private test:WebRequestsComponent){}

  async ngOnInit() {
    this.actori=await this.test.getActori();

      console.log(this.actori);

  }
  
}
