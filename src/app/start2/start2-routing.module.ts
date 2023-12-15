import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Start2Page } from './start2.page';

const routes: Routes = [
  {
    path: '',
    component: Start2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Start2PageRoutingModule {}
