import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickCollectionPage } from './pick-collection.page';

const routes: Routes = [
  {
    path: '',
    component: PickCollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickCollectionPageRoutingModule {}
