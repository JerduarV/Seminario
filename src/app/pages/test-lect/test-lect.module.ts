import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestLectPageRoutingModule } from './test-lect-routing.module';

import { TestLectPage } from './test-lect.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestLectPageRoutingModule
  ],
  declarations: [TestLectPage]
})
export class TestLectPageModule {}
