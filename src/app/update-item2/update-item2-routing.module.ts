import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateItem2Page } from './update-item2.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateItem2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateItem2PageRoutingModule {}
