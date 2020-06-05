import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '@@shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('app/modules/dashboard/user-dashboard/user-dashboard.module').then(
        (m) => m.UserDashboardModule
      ),
    pathMatch: 'full',
  },
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
  {
    path: 'account',
    loadChildren: () =>
      import('app/modules/dashboard/account/account.module').then(
        (m) => m.AccountModule
      ),
  },
  {
    path: 'increquests',
    loadChildren: () =>
      import(
        'app/modules/dashboard/incoming-requests/incoming-requests.module'
      ).then((m) => m.IncomingRequestsModule),
  },
  {
    path: 'chats',
    loadChildren: () =>
      import('app/modules/dashboard/chats/chats.module').then(
        (m) => m.ChatsModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
