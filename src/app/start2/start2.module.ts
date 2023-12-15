import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Start2PageRoutingModule } from './start2-routing.module';

import { Start2Page } from './start2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Start2PageRoutingModule
  ],
  declarations: [Start2Page]
})
export class Start2PageModule {}
