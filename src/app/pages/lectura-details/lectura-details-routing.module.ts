import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturaDetailsPage } from './lectura-details.page';

const routes: Routes = [
  {
    path: '',
    component: LecturaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturaDetailsPageRoutingModule {}
