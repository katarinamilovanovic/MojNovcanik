import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'add-new-item',
    loadChildren: () => import('./add-new-item/add-new-item.module').then( m => m.AddNewItemPageModule)
  },
  {
    path: 'update-item',
    loadChildren: () => import('./update-item/update-item.module').then( m => m.UpdateItemPageModule)
  },  {
    path: 'start2',
    loadChildren: () => import('./start2/start2.module').then( m => m.Start2PageModule)
  },
  {
    path: 'add-new-item2',
    loadChildren: () => import('./add-new-item2/add-new-item2.module').then( m => m.AddNewItem2PageModule)
  },
  {
    path: 'update-item2',
    loadChildren: () => import('./update-item2/update-item2.module').then( m => m.UpdateItem2PageModule)
  },
  {
    path: 'pick-collection',
    loadChildren: () => import('./pick-collection/pick-collection.module').then( m => m.PickCollectionPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
