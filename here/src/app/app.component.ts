import { Component } from '@angular/core';
import { Actori } from './actori';
import { WebRequestsComponent } from './web-requests/web-requests.component';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Detalii Actori';

  constructor(private requests:WebRequestsComponent){

  }
  
}
