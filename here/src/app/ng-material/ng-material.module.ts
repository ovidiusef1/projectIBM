import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatListModule,
    MatSelectModule
  ],
  exports:[
    MatListModule,
    MatSelectModule
  ]
})
export class NgMaterialModule { }
