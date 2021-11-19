import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { PersonComponent } from './person/person.component';
import { PersonDeteilsComponent } from './person-deteils/person-deteils.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonDeteilsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
