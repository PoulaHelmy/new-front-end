import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainNavComponent } from '@@shared/layouts/main-nav/main-nav.component';
import { ItemsListComponent } from './items/pages/items-list/items-list.component';

const routes: Routes = [
  {
    path: 'items',
    component: ItemsListComponent,
    loadChildren: () =>
      import('app/modules/dashboard/items/items.module').then(
        (m) => m.ItemsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
