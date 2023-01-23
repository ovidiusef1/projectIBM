import { NgModule } from '@angular/core';



import { RouterModule, Routes } from '@angular/router';
import { ActorResourceComponent } from 'src/app/actor-resource/actor-resource.component';
import { MovieResourceComponent } from 'src/app/movie-resource/movie-resource.component';
import { SendPostFormComponent } from './send-post-form/send-post-form.component';

const routes:Routes=[
    {path:"actori",component:ActorResourceComponent},
    {path:"movies",component:MovieResourceComponent},
    {path:"sendPostActors",component:SendPostFormComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
