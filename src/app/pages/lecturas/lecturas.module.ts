import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturasPageRoutingModule } from './lecturas-routing.module';

import { LecturasPage } from './lecturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturasPageRoutingModule
  ],
  declarations: [LecturasPage]
})
export class LecturasPageModule {}
