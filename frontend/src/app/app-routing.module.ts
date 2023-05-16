import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  { path: '', component:ReservaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
