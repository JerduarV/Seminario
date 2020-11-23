import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturaDetailsPageRoutingModule } from './lectura-details-routing.module';

import { LecturaDetailsPage } from './lectura-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturaDetailsPageRoutingModule
  ],
  declarations: [LecturaDetailsPage]
})
export class LecturaDetailsPageModule {}
