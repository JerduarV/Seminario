import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestLectPage } from './test-lect.page';

const routes: Routes = [
  {
    path: '',
    component: TestLectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestLectPageRoutingModule {}
