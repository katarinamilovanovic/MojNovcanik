import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddNewItem2PageRoutingModule } from './add-new-item2-routing.module';

import { AddNewItem2Page } from './add-new-item2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewItem2PageRoutingModule
  ],
  declarations: [AddNewItem2Page]
})
export class AddNewItem2PageModule {}
