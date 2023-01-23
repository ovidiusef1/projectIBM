import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ActorResourceComponent } from './actor-resource/actor-resource.component';
import { WebRequestsComponent } from './web-requests/web-requests.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MovieResourceComponent } from './movie-resource/movie-resource.component';
import { AppRoutingModule } from './app-routing.module';
import { SendPostFormComponent } from './send-post-form/send-post-form.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ActorResourceComponent,
    WebRequestsComponent,
    MovieResourceComponent,
    SendPostFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ActorResourceComponent,
  WebRequestsComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
