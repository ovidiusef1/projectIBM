import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { WebRequestsComponent } from '../web-requests/web-requests.component';
@Component({
  selector: 'app-send-post-form',
  templateUrl: './send-post-form.component.html',
  styleUrls: ['./send-post-form.component.css']
})

export class SendPostFormComponent {
  
  constructor(private x:WebRequestsComponent)
  {
  }
  onClick()
  {
    let inputData = (document.getElementById("aici") as HTMLInputElement).value;
    this.x.postActor(inputData);
  }
}
