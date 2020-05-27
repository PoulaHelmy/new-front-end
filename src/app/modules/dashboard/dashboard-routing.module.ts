import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from '@@shared/layouts/main-nav/main-nav.component';
import { ItemsListComponent } from './items/pages/items-list/items-list.component';

const routes: Routes = [
  { path: '', component: MainNavComponent },
  {
    path: 'items',
    loadChildren: () =>
      import('app/modules/dashboard/items/items.module').then(
        (m) => m.ItemsModule
      ),
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
