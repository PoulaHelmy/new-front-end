import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from '@@shared/layouts/main-nav/main-nav.component';
import { ItemsListComponent } from './items/pages/items-list/items-list.component';
import { RequestsComponent } from './requests/pages/requests/requests.component';

const routes: Routes = [
  {
    path: 'items',
    loadChildren: () =>
      import('app/modules/dashboard/items/items.module').then(
        (m) => m.ItemsModule
      ),
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('app/modules/dashboard/requests/requests.module').then(
        (m) => m.RequestsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
