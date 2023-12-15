import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateItem2PageRoutingModule } from './update-item2-routing.module';

import { UpdateItem2Page } from './update-item2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateItem2PageRoutingModule
  ],
  declarations: [UpdateItem2Page]
})
export class UpdateItem2PageModule {}
