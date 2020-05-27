import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestsComponent } from './pages/requests/requests.component';
import { CreateRequestComponent } from './pages/create-request/create-request.component';
import { RequestDetailsComponent } from './pages/request-details/request-details.component';
import { UpdateRequestComponent } from './pages/update-request/update-request.component';
import { ApiResolver } from '@@core/guards/resolvers/api.resolver';
import { NotFoundComponent } from '@@shared/pages/not-found/not-found.component';
import { ItemUpdateQuestionsResolver } from '@@core/guards/resolvers/ItemsResolvers/items-upqestions.resolver';

const routes: Routes = [
  { path: '', component: RequestsComponent },
  {
    path: 'create/:id',
    component: CreateRequestComponent,
    pathMatch: 'full',
    resolve: { item: ItemUpdateQuestionsResolver },
  },
  {
    path: 'view/:id',
    component: RequestDetailsComponent,
    resolve: { item: ApiResolver },
  },
  {
    path: 'update/:id',
    component: UpdateRequestComponent,
    resolve: { item: ApiResolver },
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestsRoutingModule {}
