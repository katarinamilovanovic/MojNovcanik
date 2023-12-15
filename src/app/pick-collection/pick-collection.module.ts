import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickCollectionPageRoutingModule } from './pick-collection-routing.module';

import { PickCollectionPage } from './pick-collection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickCollectionPageRoutingModule
  ],
  declarations: [PickCollectionPage]
})
export class PickCollectionPageModule {}
