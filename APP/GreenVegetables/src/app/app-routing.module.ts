import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVeggieComponent } from './add-veggie/add-veggie.component';
import { DeleteVeggieComponent } from './delete-veggie/delete-veggie.component';
import { LandingComponent } from './landing/landing.component';
import { UpdateVeggieComponent } from './update-veggie/update-veggie.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'landing', redirectTo: '', pathMatch: 'full' },
  { path: 'add-veggie', component: AddVeggieComponent },
  { path: 'update-veggie/:id', component: UpdateVeggieComponent },
  { path: 'delete-veggie/:id', component: DeleteVeggieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
