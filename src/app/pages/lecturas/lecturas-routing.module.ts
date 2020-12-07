import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturasPage } from './lecturas.page';

const routes: Routes = [
  {
    path: '',
    component: LecturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturasPageRoutingModule {}
