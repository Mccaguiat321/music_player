import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RockComponent } from './rock/rock.component';
import { MedlyComponent } from './medly/medly.component';


const routes: Routes = [
 

  { path: 'rock', component: RockComponent },
  { path: 'medly', component: MedlyComponent },
  // Add other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
