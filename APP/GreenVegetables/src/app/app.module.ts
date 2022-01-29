import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UpdateVeggieComponent } from './update-veggie/update-veggie.component';
import { AddVeggieComponent } from './add-veggie/add-veggie.component';
import { DeleteVeggieComponent } from './delete-veggie/delete-veggie.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UpdateVeggieComponent,
    AddVeggieComponent,
    DeleteVeggieComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
